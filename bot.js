var Discord = require('discord.js');
var auth = require('./auth.json');
var bot = new Discord.Client();
var corplist = ['DPT' , 'Domicile' , 'Bloodtide' , 'Dynasty' , 'space-bar' , 'Beer' , 'Meadow' , 'District' , 'Dominion' , 'TradeSys' , 'Destiny' , 'TradePub' , 'Simply-Chaos' , 'helloWorld' , 'Diligent' , 'Kith', 'PPU' , 'Wayfarers'];

// Initialize Discord Bot
bot.once('ready', () => {
	console.log('Ready!');
});

bot.login(auth.token);

//On member entrance
bot.on('guildMemberAdd' , member => {
    var welcome = member.guild.channels.cache.get('706052898836054038');
    welcome.send('Welcome to the Family. What corp are you from? (Use !corp [corpname] [in game username])');
});

//Role assignment and Name Change
bot.on('message' , msg => {
    if(!msg.content.startsWith('!') || msg.author.bot){
        return;
    }
    var args = msg.content.slice(1).split(' ');
    var cmd = args[0].toLowerCase();
    switch(cmd){
        case 'corp':
            var corpname = args[1];
            var name = '';
            name = args.slice(2).join(' ');
            if(name == '') return msg.channel.send('Please use the format !corp [corp name] [game username]');
            for(i = 0; i < corplist.length; i++){
                if(corpname == corplist[i]){
                    msg.channel.send('Welcome to ' + corpname + ', ' + name);
                    msg.member.roles.add(msg.guild.roles.cache.find(role => role.name.toLowerCase() == corpname.toLowerCase()))
                    msg.member.setNickname(name + ' - ' + corplist[i]);
                    break;
                } else if(i == corplist.length - 1){
                    msg.channel.send('Sorry, that corp is not part of the family.');
                }
            }
            break;
        case 'help':
            msg.channel.send('!corp [corpname] [in game username] --- Join a corp!');
            msg.channel.send('There may be some easter egg commands. Go find them');
            break;
        case 'execute':
            var order = '';
            order = args.slice(1).join(' ');
            if(name == ' ') return msg.channel.send('Please give an order.');
            switch(order){
                case 'order 66':
                    msg.member.setNickname('Jedi Scum');
                    msg.channel.send('*pew* **BANG** ***ARGHGHGH*** We killed the <@' + msg.member.id + '>!');
                    break;
            }
        break;
        default:
            msg.channel.send('Sorry, we do not have that command. View the list of commands with !help');
            break;
    }
});