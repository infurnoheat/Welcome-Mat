var Discord = require('discord.js');
var bot = new Discord.Client();

// Initialize Discord Bot
bot.once('ready', () => {
	console.log('Ready!');
});

bot.login(process.env.BOT_TOKEN);

//On member entrance
bot.on('guildMemberAdd' , member => {
    var welcome = member.guild.channels.cache.get('743269687751868521');
    welcome.send('Welcome! PLease list the games you play. Please use !play [full game name] except for PUBG');
    member.roles.add(msg.guild.roles.cache.find(role => role.name.toLowerCase() == 'gamers'));
});

//Commands
bot.on('message' , msg => {
    if(!msg.content.startsWith('!') || msg.author.bot){
        return;
    }
    var args = msg.content.slice(1).split(' ');
    var cmd = args[0].toLowerCase();
    switch(cmd){
        case 'play':
            //msg.channel.send('play');
            var game = args.slice(1).join('');
            if(msg.guild.roles.cache.find(role => role.name.toLowerCase() == game.toLowerCase())){
                if(game == 'admin'){
                    msg.channel.send('You can\'t give yourself admin powers!');
                    break;
                }
                msg.channel.send('You now play ' + msg.guild.roles.cache.find(role => role.name.toLowerCase() == game.toLowerCase()).name);
                msg.member.roles.add(msg.guild.roles.cache.find(role => role.name.toLowerCase() == game.toLowerCase()));
                break;
            } else {
                msg.channel.send('We don\'t have that game.');
            }
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
        case 'help':
            msg.channel.send('!play [full game name] except for PUBG --- Adds a game you play to your username');
            msg.channel.send('There may be some easter egg commands. Go find them');
            break;
        default:
            msg.channel.send('Sorry, we do not have that command. View the list of commands with !help');
            break;
    }
});