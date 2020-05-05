var Discord = require('discord.js');
var auth = require('./auth.json');
var bot = new Discord.Client();
var corplist = ['DPT' , 'Domicile'];

// Initialize Discord Bot
bot.once('ready', () => {
	console.log('Ready!');
});

bot.login(auth.token);

//On member entrance, send msg: Not working


//Role assignment: WIP
bot.on('message' , msg => {
    if(!msg.content.startsWith('!') || msg.author.bot){
        return;
    }
    var args = msg.content.slice(1).split(' ');
    var cmd = args[0].toLowerCase();
    switch(cmd){
        case 'corp':
            var corpname = args[1].toLowerCase();
            var name;
            for(i = 2; i < args.length; i++){
                name += args[i] + ' ';
            }
            for(i = 0; i < corplist.length; i++){
                if(corpname = corplist[i]){
                    msg.channel.send('Welcome to ' + corpname);
                    msg.member.roles.add(msg.guild.roles.cache.find(role => role.name.toLowerCase() == name.toLowerCase()))
                    msg.member.setNickname(msg.member.user.username + '- ' + name);
                } else if(i = conplist.length - 1){
                    msg.channel.send('Sorry, that corp is not part of the family.');
                }
            }
            break;
        case 'help':
            msg.channel.send('!corp [corpname] [gamename] --- Join a corp!');
            break;
        default:
            msg.channel.send('Sorry, we do not have that command. View the list of commands with !help');
            break;
    }
})