var team = "Your team ate 8 burgers, drank 17 beers and 11 fanta's";

var team = team
.replace("Your team ate ","")
.replace(" and ",",")
.replace(" drank ","")
.split(",");
    console.log(team);

var celtic = team.map(function(t){
      var parts = t.split(" ");
        console.log(parts);
  
  return{
    
    food:parts[1],
    quantity:Number(parts[0])
    
  };
  
});
console.log(celtic);


var data =  "burgers - 37 each, beers - 12, fanta's 9";

var data = data 
.replace(" each, ",",")
.replace(/ -/g,"")
.replace(", ",",")
.split(",");
console.log(data);

newData = data.map(function(r){
      var parts2 = r.split(" ");
          console.log(parts2);
 
      return{
        junk:parts2[0],
        price:Number(parts2[1])
      };
});

    console.log(newData);

//finding how much the coach sould pay:
for (var i =0; i < newData.length; i++){
 
 //console.log(newData[i].junk);
  //console.log(celtic[i].quantity);
 
   var value1 = newData[i].price;
  var value2 = celtic[i].quantity;
  
  total = value1 * value2;
    
 console.log(total);
}
 
