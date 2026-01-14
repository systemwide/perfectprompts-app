const { mdToPdf } = require('md-to-pdf');
const fs = require('fs').promises;
const path = require('path');

const PROMPTS_DIR = path.join(__dirname, '..', 'prompts');
const OUTPUT_DIR = path.join(__dirname, '..', 'deliverables');
const CSS_FILE = path.join(__dirname, 'pdf-styles.css');

async function convertLeadMagnet() {
  const inputPath = path.join(PROMPTS_DIR, 'free-prompts.md');
  const pdfOutput = path.join(OUTPUT_DIR, 'pdf', 'free-prompts.pdf');
  const txtOutput = path.join(OUTPUT_DIR, 'txt', 'free-prompts.txt');

  console.log('\n🎁 Converting free lead magnet...\n');

  const markdown = await fs.readFile(inputPath, 'utf-8');
  const cssContent = await fs.readFile(CSS_FILE, 'utf-8');

  try {
    const pdf = await mdToPdf(
      { content: markdown },
      {
        css: cssContent,
        pdf_options: {
          format: 'Letter',
          margin: {
            top: '0.75in',
            right: '0.75in',
            bottom: '0.75in',
            left: '0.75in'
          },
          printBackground: true
        },
        launch_options: {
          args: ['--no-sandbox']
        }
      }
    );

    if (pdf) {
      await fs.writeFile(pdfOutput, pdf.content);
      console.log(`✓ PDF: ${pdfOutput}`);
    }
  } catch (err) {
    console.error(`✗ PDF Error: ${err.message}`);
  }

  const lines = markdown.split('\n');
  let result = [];
  let inCodeBlock = false;

  for (const line of lines) {
    if (line.startsWith('# ')) {
      result.push('=' .repeat(60));
      result.push(line.substring(2).toUpperCase());
      result.push('=' .repeat(60));
      result.push('');
    } else if (line.startsWith('## ')) {
      result.push('');
      result.push('-'.repeat(50));
      result.push(line.substring(3));
      result.push('-'.repeat(50));
      result.push('');
    } else if (line.startsWith('### ')) {
      result.push('');
      result.push(`>>> ${line.substring(4)}`);
      result.push('');
    } else if (line.startsWith('```')) {
      if (!inCodeBlock) {
        result.push('[PROMPT START]');
        result.push('');
      } else {
        result.push('');
        result.push('[PROMPT END]');
        result.push('');
      }
      inCodeBlock = !inCodeBlock;
    } else if (inCodeBlock) {
      result.push(line);
    } else if (line.startsWith('**') && line.endsWith('**')) {
      result.push(line.replace(/\*\*/g, ''));
    } else if (line.trim() && !line.startsWith('---')) {
      result.push(line.replace(/\*\*/g, '').replace(/\*/g, ''));
    }
  }

  result.push('');
  result.push('='.repeat(60));
  result.push('Get more prompts at PerfectPrompts.ai');
  result.push('='.repeat(60));

  await fs.writeFile(txtOutput, result.join('\n'));
  console.log(`✓ TXT: ${txtOutput}`);

  console.log('\n✅ Lead magnet conversion complete!\n');
}

convertLeadMagnet().catch(console.error);
