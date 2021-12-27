# easy discord api

<a href="https://www.npmjs.com/package/easy-discord-api/"><img src="https://img.shields.io/npm/v/easy-discord-api.svg?maxAge=3600" alt="NPM version" /></a>
<a href="https://www.npmjs.com/package/easy-discord-api"><img src="https://img.shields.io/npm/dt/easy-discord-api.svg?maxAge=3600" alt="NPM downloads" /></a>

[<img src="https://nodei.co/npm/easy-discord-api.png?downloads=true&stars=true">](https://npmjs.com/easy-discord-api)

Made with ❤️ by 𝕯𝕽𝕬𝕲𝕺𝕹𝕳𝖀𝕹𝕿𝕰𝕽™®-𝔪𝔠𝔷𝔤𝔬𝔡𝔭𝔦𝔤𝔤𝔶ᴰᵉᵛ#4992
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

