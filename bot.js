var Discord = require('discord.js');
var auth = require('./auth.json');
var bot = new Discord.Client();

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
    if(args.length > 1){
        var name = args[1].toLowerCase();
    }
    switch(cmd){
        case 'corp':
            switch(name){
                case 'dpt':
                    msg.channel.send('Welcome to DPT');
                    msg.member.roles.add(message.guild.roles.cache.find(role => role.name.toLowerCase() == args[0].toLowerCase()))
                    break;
                default:
                    msg.channel.send('Sorry, but we do not have that corp');
                    break;
            }
            break;
        case 'help':
            msg.channel.send('!corp [corpname] --- Join a corp!');
            break;
        default:
            msg.channel.send('Sorry, we do not have that command. View the list of commands with !help');
            break;
    }
})