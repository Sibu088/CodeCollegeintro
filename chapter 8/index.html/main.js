var sayHelloTo = function (name) {
    console.log("Hello " + name + "!");
};
sayHelloTo("Sibu");

var drawCats = function (howManyTimes) {
    for (var i = 0; i < howManyTimes; i++) {
        console.log(i + " =^.^=");
    }
};
drawCats(7);

var printMultipleTimes = function (howManyTimes, whatToDraw) {
    for (var i = 0; i < howManyTimes; i++) {
      console.log(+ " " + whatToDraw);
    }
   };
   printMultipleTimes(11,"Sibu")
   var fifthLetter = function (name) {
     if (name.length < 5) {
    return;
     }
     return "The fifth letter of your name is " + name[4] + ".";
    };
   console.log(fifthLetter ("sibusisos")) ;
   var hello = prompt("Hi").toUpperCase();
   while (hello !== "HI") {
       alert("Nope");
   };
   