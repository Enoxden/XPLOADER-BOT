  //project_name : XPLOADER
// @author : TYLOR
// @youtube : https://www.youtube.com/@heyits_tylor
// @instagram : heyits_tylor
// @telegram : t.me/heyits_tylor
// @github : Dark-Xploit
// @tiktok : heyits_tylor
// @whatsapp : +254754783972
//*
//* 
//=================================================//
const fs = require('fs')
const { color } = require('./lib/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//=================================================//
global.SESSION_ID = process.env.SESSION_ID || 'XPLOADER~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUtrV21Oc1BpRkFlSXdubEdVeXl1VU54UmlVWkRnUVlzb091WEVUbWIwTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0U3Q3pTTDExUVFTTG9mWmhBckxUQWhteXJseWtvRHoxRzdkSkpkL25Gbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlTTVBLzVuZjduRFlOZTB1WHM0d2ZJVHJwZng2S210SmFjN05VaW4wY0h3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKOG01WVdWQkovb0Y4RnMxL3daL3dVdHZRNGdMQ0c1d3JvdWxyNnBnSVRjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1JeUF0Z0VCcVBrTUdoZmJBL3FPQWxhd09KNklYTXVicCtRUkFiVis1MHc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilord1lMcmxQakNBS2FPUFBqWVZ5amtLSURPZDBqRWdublVBQ3hsUnFiV0U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0w2cTgrbVBlY1hiNmNlMHFoVU9vRndhUTF3WE1UTy9selJ6eWs3VXpYcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUCs2STNOcWtITUFUV1JOUW1MdUZ3YkZydmc5WGdYNzFSeE5TcDlIOXZFcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdiTzhVMk5xVTZBNmVicTFDSmQxdmxJWUZMVjViSHhDMmNpTWlmUDBCKzZKOXBHQVZkVUhoaGtSYkpEQ2l0VVhya05lazhhd2pYdWlSTHpmcTJBU2pnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzcsImFkdlNlY3JldEtleSI6ImlPRi9rUHRZbE00VWpsRE0yZmJOOGlnUWlNTGJOUklRcmxZdWpVcG5DRms9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0NzQzOTAxNjgwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjIxRTU1NDlERTAwNzNDMTRCQ0I4NkQwMzMyMjBDQkJGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzU5MTQ1NDN9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI1NDc0MzkwMTY4MEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJDMDkxRkZBMzU5RDhGOEVGNjgzNzc1RUFGM0QyQzcwRiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM1OTE0NTQ0fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJuamNUdmtIVVFkYTJKUjIzV2ZRQVVBIiwicGhvbmVJZCI6IjRmMDNmM2RmLTdmZDctNGJiOS1iZDFiLTg2YmZlYmYwYmM2ZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFdnBlY1B3eFRaWXMyYWxKZzROcFFhT3ZySVE9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNLclU1QjJlNTR2NDc0QVFSYjZYTTNiNG02OD0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BDbnB0Z0NFSi9vMzdzR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InlydFdiaXFZWUhJbUZXekhRSi9SZUpnYWhiemtxQ0dCeHJJdmlyNlZHeDQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImtwcjR4MGZ0NWRPK1hDWUNsRGFzYzVSbjFTN3Z0ZS9FMytpbnhQdUIzdmczTGxXdFZ0ZWpOQ2YyVFk3MS95cWJRZWpjMnRoeFNWSVkvMG9jRFV2akR3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJmNzZTZ2h3Z3QwYmFDQytNQUhlU0hSc1c3T25MVmozZVJ3cHBVc3oxenBPTXM5dnh6bWUwaWhkOEtFalF4a29jNDVmV3krdTFHYzhTWll5MWFhTnZnQT09In0sIm1lIjp7ImlkIjoiMjU0NzQzOTAxNjgwOjE3QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjc5NTgxMjk4ODAyOTI4OjE3QGxpZCIsIm5hbWUiOiLSvdWy1oV48J+niiJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3NDM5MDE2ODA6MTdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY3E3Vm00cW1HQnlKaFZzeDBDZjBYaVlHb1c4NUtnaGdjYXlMNHErbFJzZSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNTkxNDU0MSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFINC8ifQ==' 
//Enter your Xploader session id here; must start with XPLOADER~

//=================================================//
global.botname = process.env.BOT_NAME || 'Ennoxx𝐁𝐨𝐭' 
//Your desired bot name

//=================================================//
global.ownernumber = process.env.OWNER_NUMBER || '254742378511' 
//Type your number here

//=================================================//
global.ownername = process.env.OWNER_NAME || 'Tylor' 
//Type your name here

//=================================================//
global.plink = process.env.PLINK || "https://www.instagram.com/heyits_tylor?igsh=YzljYTk1ODg3Zg=="

//=================================================//
global.wm = process.env.GL_WM || "©𝐗𝐩𝐥𝐨𝐚𝐝𝐞𝐫𝐁𝐨𝐭"

//=================================================//
global.packname = process.env.STICKER_PACK_NAME || "Xploader" 
//The sticker pack name

//=================================================//
global.author = process.env.STICKER_AUTHOR_NAME || "Bot" 
//The sticker author name

//=================================================//
global.urldb =process.env.MONGODB_URL || ""
// just leave blank or enter a mongoDB url

//=================================================//
global.xprefix = process.env.PREFIX || '.' 
//Set your desired prefix

//=================================================//
global.mode = process.env.MODE || 'public';
// Set to 'private' to enable private mode, otherwise default is 'public'

//=================================================//
global.hituet = 0 
//=================================================//
global.autoviewstatus = process.env.AUTO_STATUS_VIEW || 'true'

//=================================================//
global.autoreactstatus = process.env.AUTO_STATUS_REACT || 'true'

//=================================================//
global.anticall = process.env.ANTI_CALL || 'false'

//=================================================//
global.welcome = process.env.WELCOME_MSG || 'false'

//=================================================//
global.statusemoji = process.env.STATUS_EMOJI || '🙂'
//Set the emoji that you want to be reacted to status

//=================================================//
global.timezones = process.env.TIMEZONE || "Africa/Nairobi" 
//Don't edit this if you don't know!

//=================================================//
global.countrycode = process.env.COUNTRY_CODE || '254' 
//set your country code for functionality of blockforeign and antiforeign commands

//=================================================//
global.autoblockforeign = process.env.AUTO_BLOCK_FOREIGN || 'false';
// Set to 'true' to enable automatic blocking of foreign numbers

//=================================================//
global.gcantiforeign = process.env.GC_ANTI_FOREIGN || 'false';
// Set to 'true' to enable automatic removal of foreign numbers from groups

//=================================================//
global.autoread = process.env.AUTO_READ || 'false';
// Set to 'true' to enable automatic reading of messages

//=================================================//
//=================================================//
global.menustyle = process.env.MENU_STYLE || '2' 
// options 1, 2, 3, 4 or 5
// 1 = Document menu(Android only)
// 2 = Text only menu(Android & iOS)
//3 = Image menu with context(Android & iOS)
//4 = Image menu(Android & iOS)
//5 = Payment menu

//=================================================//
//Replies
global.mess = { 
  limit: '*Your limit is used up!*', 
  nsfw: '*Tell the admin to enable NSFW first!*', 
  done: '*Done*', 
  error: '*Sorry, I cannot perform that action!*', 
  success: '*©𝐗𝐩𝐥𝐨𝐚𝐝𝐞𝐫𝐁𝐨𝐭*', 
  premium: '*Only premium users can use this command!*', 
  owner: '*Apologies, only my owner can use this command!*', 
  group: '*This feature becomes available when you use it in a group!*', 
  admin: '*You’ll unlock this feature with me as an admin!*', 
  notadmin: '*This feature will work once you become an admin. A way of ensuring order!*' 
}
//=================================================//

//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red'))
  delete require.cache[file]
  require(file)
})
//=================================================//
