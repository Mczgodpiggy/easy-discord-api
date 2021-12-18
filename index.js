const fetch = require("node-fetch")

function duserinfo(token, id){
    if (!token) return "Error no token entered"
    if (!id) return "Error no id given"
  if (id && token) {
    return fetch(`https://discord.com/api/v6/users/${id}`, {
      headers: {
				  authorization: `Bot ${token}`,
			  },
      })
      .then(res => res.json())
      .then(data => {
        return data
      })
  }
}

function dsmbinfo(token, sid, id){
  if (sid && !isNaN(sid) && id && !isNaN(id)) {
    return fetch(`https://discord.com/api/v6/guilds/${sid}/members/${id}`, {
      headers: {
				  authorization: `Bot ${token}`,
			  },
    })
    .then(res => res.json())
    .then(data => {
      return data;
    })
  } else if (isNaN(sid) || !sid) {
    return "Please give a server ID"
  } else if (isNaN(id) || !id) {
    return "Please give a member's user ID"
  } else if (!token) return "Error no token entered"
}

module.exports = {
  duserinfo,
  dsmbinfo
}