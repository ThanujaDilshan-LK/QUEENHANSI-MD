const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')

<p align="center">
  < img src "https://graph.org/file/7d0f7b56a97eceb2f1e88-a16c9156de6157ee82.jpg" alt="QUEENHANSI-MD Logo" width="350" style="border-radius: 15px;">
</p>

cmd({

    pattern: "menu",

    react: "💥",

    alias: ["panel","commands"],

    desc: "Get bot\'s command list.",

    category: "main",

    use: '.menu',

    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, umarmd, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{
const config = await readEnv();
let madeMenu = `╭━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷

*Queen_Ahinsa-MD*

     *${pushname}*
     
❁ ════ ❃•◯•❃ ════ ❁

┏━━━━━━━━━━━━━━━━━━━━━━━━━━
      *Queen_Ahinsa-MD Official Menu*
┗━━━━━━━━━━━━━━━━━━━━━━━━━━

*Queen_Ahinsa-MD Select Your Favourite Catacory³²👨🏻‍💻*


*╭──❮ DOWNLOAD COMMANDS ❯*
│
│📖 COMMAND: .play
│ℹ️ Download Audio from yt
│ 
│📖 COMMAND: .song
│ℹ️ Download song from yt
│ 
│📖 COMMAND: .apk
│ℹ️ Download apk from playstore
│ 
│📖 COMMAND: .video
│ℹ️ Download video from yt
│ 
│📖 COMMAND: .fb
│ℹ️ Download  video from fb
│ 
│📖 COMMAND: .tk
│ℹ️ Download video from tiktok
│ 
│📖 COMMAND: .ig
│ℹ️ Download video from ig
│ 
│📖 COMMAND: .gdrive
│ℹ️ Download drive files
│ 
│📖 COMMAND: .wamod
│ℹ️ Download wamod apk
│
│📖 COMMAND: .img
│ℹ️ Download image
│
│📖 COMMAND: .xvideo
│ℹ️ Download xxx video
╰────────────⦁ 

*╭──❮ SEARCH COMMANDS ❯*
│
│📖 COMMAND: .yts
│ℹ️ Serch videos from yt
╰────────────⦁  

*╭──❮‍ MAIN COMMANDS ❯*
│
│📖 COMMAND: .alive
│ℹ️ Check online or not
│  
│📖 COMMAND: .ping
│ℹ️ Check bot speed
│  
│📖 COMMAND: .menu
│ℹ️ Nero main menu
│
│📖 COMMAND: .menu2
│ℹ️ Nero main menu2
│ 
│📖 COMMAND: .ai
│ℹ️ chat with ai bot
│
│📖 COMMAND: .system
│ℹ️ check bot systems
│
│📖 COMMAND: .owner
│ℹ️ get owner info
│ 
│📖 COMMAND: .status
│ℹ️ check bot runtime
╰────────────⦁

*╭──❮ OTHER COMMANDS ❯*
│
│📖 COMMAND: .hirunews/news
│ℹ️ Get news result for life
│ 
│📖 COMMAND: .wabeta
│ℹ️ Get whatsapp beta news
│
│📖 COMMAND: .sitech
│ℹ️ Get tech news
│ 
│📖 COMMAND: .nasa
│ℹ️ Get nasa news
╰────────────⦁

*╭──❮ GROUP COMMANDS ❯*
│
│📖 COMMAND: .mute
│ℹ️ Mute group
│
│📖 COMMAND: .unmute
│ℹ️ Unmute group
│
│📖 COMMAND: .left
│ℹ️ left group
│
│📖 COMMAND: .jid
│ℹ️ group jid
╰────────────⦁

*╭──❮ OWNER COMMANDS ❯*
│
│📖 COMMAND: .update
│ℹ️ update bot velue 
│
│📖 COMMAND: .restart 
│ℹ️ restart your bot
╰────────────⦁

*╭──❮ CONVERT COMMANDS ❯*
│
│📖 COMMAND: .sticker
│ℹ️ convert photo to sticker
╰────────────⦁



┏━━━━━━━━━━━━━━━━━━━━━━━━━━

Queen_Ahinsa-MD Official Whatsapp Bot³²*

╰━❁ ═══ ❃•⇆•❃ ═══ ❁━╯
`

await conn.sendMessage(from, { text: madeMenu ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363232588171807@newsletter',
      newsletterName: "QUEEN_AHINSA-MD",
      serverMessageId: 999
    },
externalAdReply: { 
title: '◀︎Queen_Ahinsa-MD MENU▶︎',
body: `${pushname}`,
mediaType: 1,
thumbnailUrl: "https://i.ibb.co/SR76mBh/Pu3-ZYHBS5139.jpg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
});
