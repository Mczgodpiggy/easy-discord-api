# easy discord api

<a href="https://www.npmjs.com/package/easy-discord-api/"><img src="https://img.shields.io/npm/v/easy-discord-api.svg?maxAge=3600" alt="NPM version" /></a>
<a href="https://www.npmjs.com/package/easy-discord-api"><img src="https://img.shields.io/npm/dt/easy-discord-api.svg?maxAge=3600" alt="NPM downloads" /></a>

[<img src="https://nodei.co/npm/easy-discord-api.png?downloads=true&stars=true">](https://npmjs.com/easy-discord-api)

Made with โค๏ธ by ๐ฏ๐ฝ๐ฌ๐ฒ๐บ๐น๐ณ๐๐น๐ฟ๐ฐ๐ฝโขยฎ-๐ช๐ ๐ท๐ค๐ฌ๐ก๐ญ๐ฆ๐ค๐ค๐ถแดฐแตแต#4992
# Examples
```js
//require the package
const dapi = require("easy-discord-api")

//get's a discord user's info
dapi.duserinfo("your_bot_token_here", "user_Id").then(res => console.log(res))

//get a server member's info
dapi.dsmbinfo("your_bot_token_here", "guild_id", "member_id").then(res => console.log(res))

//get a guild's info
dapi.dguildinfo("your_bot_token", "guild_id").then(res => console.log(res))
```

