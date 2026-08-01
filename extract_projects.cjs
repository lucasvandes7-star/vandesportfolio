const fs = require('fs');
const path = require('path');

const files = [
  'castilhos-associados.html',
  'sorriso-fiel.html',
  'aurora-viagens/index.html',
  'ai-site/index.html',
  'dashboards/clinica-estetica.html',
  'meu-site/index.html'
];

const projects = [];

files.forEach(file => {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    const content = fs.readFileSync(fullPath, 'utf8');
    
    // Attempt to extract title
    let title = file.split('/')[0].replace('.html', '').replace('-', ' ');
    const titleMatch = content.match(/<title>(.*?)<\/title>/i);
    if (titleMatch) {
      title = titleMatch[1].split('|')[0].trim();
    }

    // Attempt to extract hero image
    let imgUrl = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&auto=format&fit=crop&q=80'; // fallback
    
    // Look for first img src
    const imgMatch = content.match(/<img[^>]+src=["']([^"']+)["']/i);
    if (imgMatch && imgMatch[1]) {
      imgUrl = imgMatch[1];
    } else {
      // Look for background-image
      const bgMatch = content.match(/background-image:\s*url\(["']?([^"'\)]+)["']?\)/i);
      if (bgMatch && bgMatch[1] && !bgMatch[1].includes('data:image/svg+xml')) {
        imgUrl = bgMatch[1];
      }
    }

    projects.push({
      common: title,
      binomial: file.split('/')[0].replace('.html', ''),
      photo: {
        url: imgUrl,
        text: `Screenshot of ${title}`,
        by: 'Lucas Vandes'
      }
    });
  }
});

fs.writeFileSync('extracted_projects.json', JSON.stringify(projects, null, 2));
console.log('Extraction complete');
