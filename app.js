const weather = require('weather-js');

weather.find({search:'Miami Dade',degreeType:'F'},function (err,result){
  if(err) console.log(err)
  console.log(result)
})
