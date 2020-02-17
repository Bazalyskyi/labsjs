const WIDTH=5;
const HEIGTH=5;
let count=4;
function life(arr){
  count=count-1;
  let safe=0;
  let arr2=[]
  for(var i=0;i<HEIGTH;i++)
  {
    arr2[i]=[];
    for(var s=0;s<WIDTH;s++ )
    {
      safe=0;
       if(arr[i][s]==1)
      {
        if(i+1!=HEIGTH)
        {
          safe=arr[i+1][s]+safe;
          if(s+1!=WIDTH)
          {
            safe=arr[i+1][s+1]+safe;
          }
        }
        if(s+1!=WIDTH)
        {
          safe=arr[i][s+1]+safe;
        }
        if(i>0)
        {
          safe=arr[i-1][s]+safe;
          if(s+1!=WIDTH)
          {
            safe=arr[i-1][s+1]+safe;
          }
          if(s>0)
          {
            safe=arr[i-1][s-1]+safe;

          }
        }
          if(s>0)
          {
            safe=arr[i][s-1]+safe;
            if(i+1!=HEIGTH)
            {
              safe=arr[i+1][s-1]+safe;
            }
          }
        if(safe==2||safe==3)
        {
          arr2[i][s]=1;
        }
        else {
          arr2[i][s]=0;
        }
      }
      else {
        if(i+1!=HEIGTH)
        {
          safe=arr[i+1][s]+safe;
          if(s+1!=WIDTH)
          {
            safe=arr[i+1][s+1]+safe;
          }
        }
        if(s+1!=WIDTH)
        {
          safe=arr[i][s+1]+safe;
        }
        if(i>0)
        {
          safe=arr[i-1][s]+safe;
          if(s+1!=WIDTH)
          {
            safe=arr[i-1][s+1]+safe;
          }
          if(s>0)
          {
            safe=arr[i-1][s-1]+safe;

          }
        }
          if(s>0)
          {
            safe=arr[i][s-1]+safe;
            if(i+1!=HEIGTH)
            {
              safe=arr[i+1][s-1]+safe;
            }
          }
        if(safe==3)
        {
          arr2[i][s]=1;
        }
        else {
          arr2[i][s]=0;
        }
      }
    }
  }
  console.log(arr2);
  if(count>0)
  {
    life(arr2);
  }
}
function main() {
  let arr = [];
  let number = require("readline");
  for(var int = 0; int < HEIGTH ; int++)
  {

      arr[int]=[];
      for(var t = 0; t < WIDTH; t++)
      {
          arr[int][t] =Math.round(Math.random());
      }
  }
  console.log(arr);
  life(arr);
}
main();
