// scripts/generate-og.mjs
import { createCanvas, GlobalFonts } from '@napi-rs/canvas';
import fs from 'fs';

const W = 1200, H = 630;
const canvas = createCanvas(W, H);
const ctx = canvas.getContext('2d');

// Fundo escuro
ctx.fillStyle = '#0f172a';
ctx.fillRect(0, 0, W, H);

// Barra lateral azul (elemento visual da marca)
ctx.fillStyle = '#0090FF';
ctx.fillRect(60, 60, 5, 510);

// Nome da marca
ctx.fillStyle = '#0090FF';
ctx.font = 'bold 26px Arial';
ctx.fillText('INTALKY', 88, 105);
ctx.fillStyle = '#475569';
ctx.font = '15px Arial';
ctx.fillText('ASSESSORIA & AUTOMAÇÃO', 88, 130);

// Headline — linha 1 branca
ctx.fillStyle = '#f1f5f9';
ctx.font = 'bold 64px Arial';
ctx.fillText('Sua clínica perde', 88, 250);

// Headline — linha 2 branca
ctx.fillText('pacientes todo dia.', 88, 330);

// Headline — linha 3 ciano
ctx.fillStyle = '#0090FF';
ctx.fillText('Descubra por quê.', 88, 410);

// Linha separadora
ctx.fillStyle = '#1e293b';
ctx.fillRect(88, 445, 1020, 2);

// Métricas — 3 colunas
const metricas = [
  { valor: 'R$50M+', label: 'em vendas gerados' },
  { valor: '4x',     label: 'crescimento em 12 meses' },
  { valor: '-70%',   label: 'redução de no-show' },
];
metricas.forEach((m, i) => {
  const x = 88 + i * 370;
  ctx.fillStyle = i === 2 ? '#0090FF' : '#f1f5f9';
  ctx.font = 'bold 40px Arial';
  ctx.fillText(m.valor, x, 510);
  ctx.fillStyle = '#64748b';
  ctx.font = '15px Arial';
  ctx.fillText(m.label, x, 535);
});

// Salvar como JPEG
const buffer = canvas.toBuffer('image/jpeg', 90);
fs.writeFileSync('./public/og-image.jpg', buffer);
console.log('✅ og-image.jpg criada em public/ (' + buffer.length + ' bytes)');
