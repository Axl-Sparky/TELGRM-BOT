const TelegramBot = require('node-telegram-bot-api');

// Replace with your bot's token
const token = '7827921460:AAEkT715nf6B1FIWLu-E1PypfVak6KiSBG4';

// Create a bot instance
const bot = new TelegramBot(token, { polling: true });

// Load the plugins
const hiP = require('./plugins/hiP');
hiPlugin(bot); // Load hiPlugin

const buttonP= require('./plugins/buttonP');
ajsalPlugin(bot); // Load ajsalPlugin
