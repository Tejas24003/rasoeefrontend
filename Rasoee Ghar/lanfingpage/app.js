let listProductHTML = document.querySelector('.listProduct');
let listCartHTML = document.querySelector('.listCart');
let iconCart = document.querySelector('.icon-cart');
let iconCartSpan = document.querySelector('.icon-cart span');
let body = document.querySelector('body');
let closeCart = document.querySelector('.close');
let products = [];
let cart = [];


iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})
closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})

var x = 0;
var y = 0;
document.getElementById("c").innerText = x;
document.getElementById("v").innerText = y;
function add(val) {
    document.getElementById("hello").innerHTML += "<li>" + val + "<input type='button' value='-' onclick='remove()'></li>";
    x = x + 1;
    document.getElementById("c").innerText = x;
    y = y + 1;
    document.getElementById("v").innerText = y;



}


// remove item
function remove() {

    var listItem = document.getElementsByTagName("li");
    for (var i = 0; i < listItem.length; i++) {

        listItem[i].onclick = function () {
            this.parentNode.removeChild(this);
        }


    }
    x = x - 1;
    document.getElementById("c").innerText = x;
    y = y - 1;
    document.getElementById("v").innerText = y;

}