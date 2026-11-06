require('dotenv').config();
const { REST, Routes } = require('discord.js');
const commands = require('./commands/definitions');
const token = process.env.DISCORD_TOKEN;
const clientId = process.env.CLIENT_ID || '1568366321639362662';
const guildId = process.env.GUILD_ID || '694270550524035112';
if (!token) throw new Error('DISCORD_TOKEN is missing.');
const rest = new REST({ version: '10' }).setToken(token);
(async()=>{ await rest.put(Routes.applicationGuildCommands(clientId,guildId),{body:commands.map(c=>c.toJSON())}); console.log(`Registered ${commands.length} Novex commands in ${guildId}.`); })().catch(e=>{console.error(e);process.exit(1);});
