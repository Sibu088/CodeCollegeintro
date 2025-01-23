var dreamCar = {
    make: "Oldsmobile",
    model: "98",
    color: "pink",
    year: 1983,
    bodyStyle: "Luxury Car",
    price: 4500
   };

   alert("The type of dreamCar is: " + typeof dreamCar);

 document.getElementById("pricetag").innerHTML = dreamCar.price;
 setInterval(moveRight,100);

   document.getElementById("modelyear").innerHTML = dreamCar.year;
 document.getElementById("body").style.backgroundColor = dreamCar.color;
 document.getElementById("body").innerHTML = dreamCar.make + " " + dreamCar.model;

 

var  object={
key1:"value",
key2:70
};


