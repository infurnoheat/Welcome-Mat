var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';

// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

//On member entrance, send msg: Not working
bot.on('guildMemberAdd', function (user, userID, channelID, message, evt) {
    bot.sendMessage({
        to: channelID,
        message: 'Welcome, ' + user +  ', to the Ontario Dynasty family. What corps are you from? (!corp [corpname])'
    });
});

//Role assignment: WIP
bot.on('message', function (user, userID, channelID, message, evt) {
    if(message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
        args = args.splice(1);
        switch(cmd) {
            case 'corp':
                if(args[0] == ('DPT')){
                    bot.editNickname({
                        userID: userID,
                        nick: user + '-' + args[0]
                    });
                    bot.sendMessage({
                        to: channelID,
                        message: 'Welcome to the DPT!'
                    });
                    bot.addToRole({
                        userID: userID,
                        roleID: '&707061297191321610'
                    });
                }
            break;
         }
     }
});