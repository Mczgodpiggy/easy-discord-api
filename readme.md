# ez discord api
Made with ❤️ by 𝕯𝕽𝕬𝕲𝕺𝕹𝕳𝖀𝕹𝕿𝕰𝕽™®-𝔪𝔠𝔷𝔤𝔬𝔡𝔭𝔦𝔤𝔤𝔶ᴰᵉᵛ#4992
# Examples
```js
//require the package
const dapi = require("ez-discord-api")

//get's a discord user's info
dapi.duserinfo("your_bot_token_here", "user_Id").then(res => console.log(res))

//get a server member's info
dapi.dsmbinfo("your_bot_token_here", "guild_id", "member_id").then(res => console.log(res))
```
