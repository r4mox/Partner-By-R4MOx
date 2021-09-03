const discord = require("discord.js")
const client =new discord.Client()
const talkedRecently = new Set();    



client.on("ready", () => {
  console.log("R4MOx")
  client.user.setStatus("ONLINE");

  client.user.setActivity(`R4MOx`, { type: "PLAYING" });

  client.guilds.cache.forEach(g => {

    if (g.member(client.user).hasPermission("ADMINISTRATOR")) {

      g.fetchInvites().then(guildInvites => {});

    }

  });

});
client.on("message", SHVAN => {

  if (SHVAN.content.startsWith("reklam")) {

    SHVAN.author.send("**چاوەکەم ریـکـلامـەکـەم بـۆ بنێرە**");

    SHVAN.reply("**ریـکلامەکەم لە تایـبـەت بـۆ بنێرە**");

  } 
});

client.on("message", vex => { 
if(vex.content.includes("discord.gg")){ 
    
    if (talkedRecently.has(vex.author.id)) {
      vex.author.send("Plase wait for 3 Hours and again send it");
    } else {

if(vex.channel.type === "dm"){ 
if(vex.author.id===client.user.id) return; 
vex.author.send("")
let s2 = vex .content = vex.content.replace(/@(everyone)/, "🥰").replace(/@(here)/, "🥰");
let hama1 = client.channels.cache.get("872597619564773386")//id bashe reklam
hama1.send(`
ناردرا لە لایەن
<@${vex.author.id}> ` +`
سێرڤەرەکە
${s2}
          `)
  }

}}
  talkedRecently.add(vex.author.id);
        setTimeout(() => {
          talkedRecently.delete(vex.author.id);
        }, 60000);
  
  
})

const channelid = "855230044258828328"//id channele vc
client.on("ready", () => {
    const channel = client.channels.cache.get(channelid);
    if (!channel) return console.error("The channel does not exist!");
    channel.join().then(connection => {
        console.log("Successfully connected.");
    }).catch(e => {
        console.error(e);
    });
});


client.login("")
