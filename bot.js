 
 let telegramBot = require("node-telegram-bot-api");
 let token = 'My_Telegram_APi_Key';
 var bot = new telegramBot(token , {polling:true});

 


const request = require('request')

bot.onText(/\/movie (.+)/ ,function(msg , match){
    var movie = match[1];
    var chatId = msg.chat.id;
 
  request(`https://www.omdbapi.com/?apikey=b9fb2fc5&t=${movie}`, function(error , response , body)
  {
  
    if(!error && response.statusCode==200)
     {
        bot.sendMessage(chatId, '__Looking Result     : '  + movie + '.....', {parse_mode:'Markdown'}).then(function(msg){
            var res = JSON.parse(body);
       bot.sendMessage(chatId , res.Poster,  {caption : "Result : \nTitle: "  +res.Title+  '\nYear: ' +res.Year+ '\nReleased:  ' +res.Released+  '\nDirector:   ' +res.Director})
       
        })
     }


  })    
    
})