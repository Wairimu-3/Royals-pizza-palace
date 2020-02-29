$(document).ready(function () {
    $("#trigger").click(function () {
        $("#offers").toggle();
    });
});


$(document).ready(function () {
    $("#trigger").click(function () {
        $("#menu").toggle();
    });
});


$(document).ready(function () {
    $(".onCrack1").click(function () {
        $("#click1").toggle();
        $("#magic1").toggle();
    });
    $(".onCrack2").click(function () {
        $("#magic2").toggle();
        $("#click2").toggle();
    });
    $(".onCrack3").click(function () {
        $("#magic3").toggle();
        $("#click3").toggle();
    });
});


function myMessage() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("comment").value;
    if (email !== "" && name !== "" && message !== "") {
        // document.getElementById("pop").innerHTML =
        alert("Hello" + " " + name + " we have received your message. Thank you for reaching out to us.");
    } else if (email == "" || name !== "" || message !== "") {
        alert("Please fill in all the details");
    }
}

$(document).ready(function () {
    $("div.image-frame").hover(function () {
        $(".classAdd1").addClass("mask flex-center rgba-red-strong");
    });
    $("div.image-frame").hover(function () {
        $(".classAdd2").addClass("mask flex-center rgba-blue-light");
    });
    $("div.image-frame").hover(function () {
        $(".classAdd3").addClass("mask flex-center rgba-green-slight");
    });
    $("div.image-frame").hover(function () {
        $(".classAdd4").addClass("mask flex-center");
    });
});

var btn = document.getElementById("myBtn")


btn.onclick = function (event) {
    var x = document.forms["myForm"]["contact-name"].value;
    if (x == "") {
        alert("Please enter your name");
        return false;
    }
    var y = document.forms["myForm"]["contact-email"].value;
    if (y == "") {
        alert("Please enter your email");
        return false;
    }
    var z = document.forms["myForm"]["contact-message"].value;
    if (z == "") {
        alert("Please enter your message");
        return false;
    }
    var person1Input = $("input#contact-name").val();
    $("span#outputName").append(person1Input);

    $('.toast').toast('show');
    event.preventDefault();
}

function getSize() {
    var selectedValue = document.getElementById("size").value;
    return parseInt(selectedValue);
}



function getType() {
    var selectedToppings = document.getElementById("typeOfPizza").value;
    return parseInt(selectedToppings);
}
function getQuantity() {
    var selectedQuantity = document.getElementById("quantity").value;
    return parseInt(selectedQuantity);
}
function getCrust() {
    var selectedQuantity = document.getElementById("crust").value;
    return parseInt(selectedQuantity);
}
function getToppings() {
    var selectedToppings = document.getElementById("toppings").value;
    return parseInt(selectedToppings);
}
function getTotalAmount() {
    let totalAmount = (getSize() + getToppings() + getType()) * getQuantity();
    if (totalAmount) {
        alert("You have Ordered" + " " + getQuantity("") + " " + "pizza." + "" + " The Total Amount is kshs " + (totalAmount) + "" + " Thank you for eating at Royals pizza palace.");
    } else {
        return false
    }
    return totalAmount;
}
function output() {
    let ourAmount = getTotalAmount()
    if (ourAmount) {
        prompt('Enter your location');
        alert("Your pizza will be delivered to you...the delivery fee is ksh.100...Welcome again!!")
    } else {
        alert("Royals pizza palace!!We offer top notch pizza service.Welcome!")
    }
}