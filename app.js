const weather = require('weather-js');


weather.find({search:'Miami,Fl',degreeType:'F'},function (err,result){
  if(err) console.log(err)
  console.log(result)
})
