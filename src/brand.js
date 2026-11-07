const { EmbedBuilder } = require('discord.js');
const cfg = require('../config');
const fs = require('node:fs');
const path = require('node:path');
const logo = path.join(__dirname, '../../assets/novex-logo.jpg');
function embed(title, description) {
  const e = new EmbedBuilder().setColor(cfg.blue).setTitle(title).setDescription(description || '\u200b').setFooter({ text: cfg.brand }).setTimestamp();
  if (fs.existsSync(logo)) e.setThumbnail('attachment://novex-logo.jpg');
  return e;
}
function logoFile() { return { attachment: logo, name: 'novex-logo.jpg' }; }
module.exports = { embed, logoFile };
