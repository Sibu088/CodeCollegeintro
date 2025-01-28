var nums = [1, 2, 3, 4];
var items = ["Coke", "Kit Kat", "Bar One", "Fanta"];
var prices = [7.5, 9.5, 8.5, 7.5];
var quantities = [0, 0, 0, 0];
var totals = [0.0, 0.0, 0.0, 0.0];
var totalOrderAmt = 0;

function add_selection(x) {
    console.log(x);
    quantities[x] = quantities[x] + 1;
    totals[x] = prices[x] * quantities[x];
    totalOrderAmt += prices[x];

    display_all();
}

function remove_selection(x) {
    console.log(x);
    if (quantities[x] > 0) {
        quantities[x]--;
        totals[x] -= prices[x];
        totalOrderAmt -= prices[x];

        display_all();
    }
}

function checkout() {
    display_all();
    var checkoutDiv = document.createElement('div');
    checkoutDiv.style.fontSize = '24px';
    checkoutDiv.style.color = 'red';
    checkoutDiv.style.fontWeight = 'bold';
    checkoutDiv.innerHTML = "Total: $" + totalOrderAmt.toFixed(2);
    document.getElementById("demo").appendChild(checkoutDiv);
}

function display_all() {
    var myTable = "<table><tr><th style='width: 100px; color: red; text-align: right;'>Num</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Item</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Price</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Quantity</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Total</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Add</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Remove</th>";
    myTable += "</tr>";

    for (i = 0; i < items.length; i++) {
        myTable += "<tr><td style='width: 100px; text-align: right;'>" + nums[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + items[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + prices[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + quantities[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + totals[i].toFixed(2) + "</td>";
        myTable += "<td><button onclick='add_selection(" + i + ")'>Add</button></td>";
        myTable += "<td><button onclick='remove_selection(" + i + ")'>Remove</button></td>";
        myTable += "</tr>";
    }

    myTable += "</table>";
    // document.write(myTable);
    document.getElementById("demo").innerHTML = myTable;
    // Add a checkout button
    var checkoutButton = document.createElement('button');
    checkoutButton.style.fontSize = '24px';
    checkoutButton.style.color = "blue";
    checkoutButton.innerHTML = "Checkout";
    checkoutButton.onclick = checkout;
    document.getElementById("demo").appendChild(checkoutButton);
}

window.onload = function() {
    display_all();
}