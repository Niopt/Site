const { Telegraf } = require('telegraf')

// Ваш токен Telegram-бота
const TOKEN = '7764849066:AAEpORB1whrdgEmZlfAF3qa-kKl35icHWII'

// Инициализация бота
const bot = new Telegraf(TOKEN)

// Обработчик команды /start
bot.command('start', ctx => {
  ctx.reply('Привет! Я могу выполнять различные команды.')
})

// Команда /help
bot.command('help', ctx => {
  const helpText = `
Доступные команды:
/start - начать взаимодействие
/help - показать помощь
/echo <текст> - повторить введенный текст
  `
  ctx.reply(helpText)
})

// Комманда /echo
bot.command('echo', ctx => {
  if (!ctx.message.text || !ctx.message.text.split(' ').slice(1).join(' ')) {
    return ctx.reply('Пожалуйста, введите текст для повтора.')
  }
  const textToEcho = ctx.message.text.slice(6)
  ctx.reply(textToEcho)
})

// Эхо-обработчик для обычных сообщений
bot.on('text', ctx => {
  console.log(ctx.message.text)
  ctx.reply(`Эхо: ${ctx.message.text}`)
})

// Запуск бота
bot.launch()

console.log('Бот запущен!')

// Graceful shutdown
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))