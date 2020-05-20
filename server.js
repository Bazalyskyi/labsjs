var express = require('express');

var app = express();

app.use(express.static('.'))

app.get('/get', function (req,res){
  res.send(a());
})

app.listen(3012 , function(){
  console.log(' ');
})

function a(){
  var date = new Date();
  var time=date.getHours();
  var x=0;
  var y=0;
  if(date.getHours()>=12)
  {
    time=time-12
  }
  if(time<3)
  {
    var x =0;
    var y=-(time*60 + date.getMinutes() + date.getSeconds()*0.016)*0.1;
  }
  else if(time<6)
  {
    var y =-18;
    var x=-((time-3)*60+date.getMinutes()+date.getSeconds()*0.016)*0.1;
  }
  else if(time<9)
  {
    var x =-18;
    var y=-18+((time-6)*60 + date.getMinutes()+date.getSeconds()*0.016)*0.1;
  }
  else {
    var y =0;
    var x=-18+((time-9)*60+date.getMinutes()+date.getSeconds()*0.016)*0.1;
  }
  cords=[x*10,y*10];
  console.log(cords);
  return cords;
}
