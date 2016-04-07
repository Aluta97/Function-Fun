/*
var places = "in Cape Town 9, in George 7, in Port Elizabeth 5 and in Johannesburg -1 ";

var places = places
.replace(/and/,",")
.replace(/in/g, "")
.replace(/\s/g,"")
.split(",");

console.log(places);

var p = places.map(function(str){
  return {
    name : str.substring(0, str.length-1),
    temp : str.substring(str.length-1, str.length)
    
  }
});

console.log(p)
*/

var places = "in Cape Town 9, in George 7, in Port Elizabeth 5 and in Johannesburg -1";

var places = places
.replace(/ and /,",")
.replace(/in /g, "")
.replace(/, /g, ",");

console.log(places);

places = places.split(",");

console.log(places);

places = places.map(function(place){
  var parts = place.split(" ");
  console.log(parts);
  if (parts.length > 2){
    return {
      name : parts[0] + " " + parts[1],
      temp : Number(parts[2])
    };
  }
  else{
    return {
      name : parts[0],
      temp : Number(parts[1])
    };
  }
});

console.log(places);

// var total = 0;

var x = [];

places.forEach(function(av){
//   console.log(av.temp);
  
   x.push(av.temp);
    
   
});

      console.log(x);




