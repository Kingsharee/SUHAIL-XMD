const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


up//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_46_11_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDgzLFxuICAgICAgICA0MixcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTY3LFxuICAgICAgICAyNCxcbiAgICAgICAgMjUzLFxuICAgICAgICA3MixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDMzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjMzLFxuICAgICAgICA5NixcbiAgICAgICAgMjIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTY2LFxuICAgICAgICA1NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDg2LFxuICAgICAgICAzOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDcwLFxuICAgICAgICA3MixcbiAgICAgICAgMTcxLFxuICAgICAgICA5NixcbiAgICAgICAgMjEsXG4gICAgICAgIDc4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjA1LFxuICAgICAgICA1MixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDExMixcbiAgICAgICAgODgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDksXG4gICAgICAgIDUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI5LFxuICAgICAgICA5NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjMyLFxuICAgICAgICA2NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA1NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDUzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTczLFxuICAgICAgICA0NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDY5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDAsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTI2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA1MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjA1LFxuICAgICAgICA0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTksXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDgwLFxuICAgICAgICAzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDM5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDUzLFxuICAgICAgICA5MixcbiAgICAgICAgMTgyLFxuICAgICAgICAxODcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDY4LFxuICAgICAgICA3OCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDc2LFxuICAgICAgICA4NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTIxLFxuICAgICAgICA4LFxuICAgICAgICA1OCxcbiAgICAgICAgNCxcbiAgICAgICAgMjQxLFxuICAgICAgICA1MCxcbiAgICAgICAgODcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODQsXG4gICAgICAgIDE1LFxuICAgICAgICA2NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODQsXG4gICAgICAgIDgxLFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjIzLFxuICBcImFkdlNlY3JldEtleVwiOiBcInhJazJqclNkeTV6WUJZNUs4a2RQMjZoL1dXU2ZsM1RsWk8rUzAxWlhOOWs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm5fQzBEVWRrUmxPUzNyYWNJcnlVeHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTA5MGM4MmEtYmZiMC00NDIwLWFmNDEtZjY3ZDBjNDc4Y2VkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyNyxcbiAgICAgIDI1MixcbiAgICAgIDEyNixcbiAgICAgIDkzLFxuICAgICAgMTIyLFxuICAgICAgMTY5LFxuICAgICAgMTg0LFxuICAgICAgMTk0LFxuICAgICAgMjcsXG4gICAgICAyMTgsXG4gICAgICAxMTAsXG4gICAgICA5OSxcbiAgICAgIDI0MixcbiAgICAgIDIxMCxcbiAgICAgIDY1LFxuICAgICAgNjYsXG4gICAgICA1NyxcbiAgICAgIDEyOSxcbiAgICAgIDIyOSxcbiAgICAgIDIwOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDksXG4gICAgICA3NixcbiAgICAgIDM2LFxuICAgICAgNTYsXG4gICAgICA2MixcbiAgICAgIDE4MixcbiAgICAgIDEzMixcbiAgICAgIDM5LFxuICAgICAgMjQyLFxuICAgICAgMzEsXG4gICAgICA3NyxcbiAgICAgIDE2NCxcbiAgICAgIDEwMCxcbiAgICAgIDYyLFxuICAgICAgMTkyLFxuICAgICAgMjcsXG4gICAgICAyNDIsXG4gICAgICA3OCxcbiAgICAgIDE5MCxcbiAgICAgIDI0NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJROEw4OFc2WlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMTkzNTUxNTYwOjM0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi2ojYp9qp2bnZgM2c26zZsNmw2LEg2LTZgM2c2ZPZmNmA2YDYsduM2YFcIixcbiAgICBcImxpZFwiOiBcIjgxMjk1NjI3NTIyMTMxOjM0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0x2K2xMMEVFTzZaN0xrR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiU1d0NWFqdFY5Rit0M1AyVzVDM2ZQU3ZISjJQR1JseWZYSktPVDVWVytFTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJsdElQVjF6eTdTQThrSlQvaUQxWnNyTGxhd282V1VmY1E2czdUSklhRmdueENIbVphV2M3TDh2VC9MZUlPTVQrdGZKVzV1aVE2UVI5ckNHSVhmOWdEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI0U3djRFlGZHBNcHk5UHZKNFZDSkh1RytxZDV3VXJDZHBhYkFEQ3NTR0tOM0hZRFI3YmlRZlBhQzlOZUVvb0JTM1crREhRdXBOTWxqRzFINTFZSmJCQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMxOTM1NTE1NjA6MzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzE5MjMxODUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIWUdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhZRy5qc29uIjogIntcImtleURhdGFcIjpcIndPOXVoRFcxVVI4bnpyN3VnVWU4UUxoZ0lyd3VScjdqYVQ4b0FtTXBXRFk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTIwMjAxMTk2MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
