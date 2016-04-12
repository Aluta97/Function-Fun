
 var team = "Your team ate 11 pies, drank 17 cokes and 5 pepsi's";
 
 var team = team
 .replace("Your team ate ","")
 .replace(" drank", " ")
 .replace(" and ",",")
 .replace(",  ",",")
 .split(",");

 //console.log(team);

 x = [];

  team.forEach(function(za){
    var parts = za.split(" ");
          //console.log(parts);  
    
    x.push({
      food:parts[1],
      price:Number(parts[0])
    }); 
  
          
    });

    console.log(x);


  var prices = "pies - 19 each, cokes - 11,pepsi's 9";

  var prices = prices
  .replace(/ - /g," ")
  .replace(" each, ",",")
  .split(",");

  //console.log(prices);
 
 y = [];

 prices.forEach(function(cd){
     var parts2 = cd.split(" ");
    //     console.log(parts2);
  y.push({
    junk:parts2[0],
    price:Number(parts2[1])
  });   
   
 });
  console.log(y);

  for (var i = 0; i < y.length; i++){
//     console.log(y[i].price);
//     console.log(x[i].price);
    
    var value1 = y[i].price;
    var value2 = x[i].price;
    
    total = value1 * value2;
    
     console.log(total);
  }
