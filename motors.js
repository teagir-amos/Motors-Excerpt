const buy1 = document.querySelector("#Buy1");
console.log(buy1)
const buy2 = document.querySelector("#Buy2");
const mpesa = document.querySelector("#MpesaR");
const bank = document.querySelector("#BankR");
const payment = document.querySelector("#Payment");
const carTypes = document.querySelector("#CarTypes")
const confirm = document.querySelector("#confirm");
const ok = document.querySelector("#Ok");
const name = document.querySelector("#name");
const error = document.querySelector("#error");
const number = document.querySelector("#number");
const honda = document.querySelector("#honda");
const mazda = document.querySelector("#mazda");

function Buy1(params) {
    let clickCount = 0;

    buy1.addEventListener("click", function() {
    clickCount++;
    console.log(clickCount)

    if (clickCount % 2 === 1) {
        payment.style.opacity = "3"

    } else {
        payment.style.opacity = "0" 
    }
});
}

Buy1();

function Honda(params) {
    const name = document.querySelector("#name");
    const honda = document.querySelector("#honda");
    const mazda = document.querySelector("#mazda");
    const buy1 = document.querySelector("#Buy1");
    const crv = document.querySelector("#crv");
    let newName1 = document.getElementById("honda").innerHTML;
    

    crv.addEventListener("mouseenter", function(){
        document.getElementById("name").innerHTML = newName1;
    });


}

Honda();

function Mazda(params) {
    const demio = document.querySelector("#demio");
    let newName2 = document.getElementById("mazda").innerHTML;
    demio.addEventListener("mouseenter", function(){
        document.getElementById("name").innerHTML = newName2;
    })

}

Mazda();





function Buy2(params) {
    let clickCount = 0;

    buy2.addEventListener("click", function() {
    clickCount++;
    console.log(clickCount)

    if (clickCount % 2 === 1) {
        payment.style.opacity = "3"
    } else {
        payment.style.opacity = "0" 
    };
});
};

Buy2();

function showConfirm(params) {
    const confirm = document.querySelector("#confirm");
    const mpesa = document.querySelector("#MpesaR");
    mpesa.addEventListener("click", function(){
         confirm.style.display = "block";
    });
};

showConfirm();


function thankYou(params) {
    const ok = document.querySelector("#Ok");
    const confirm = document.querySelector("#confirm");
    const payment = document.querySelector("#Payment");
    ok.addEventListener("click", function(){
        confirm.style.display = "none";
        payment.style.display = "none";
    });
};

thankYou();
   

function amountHonda(params) {
    const honda = document.querySelector("#milions");
    const mazda = document.querySelector("#thousands");
    const number = document.querySelector("#number");
    const crv = document.querySelector("#crv");

    crv.addEventListener("mouseenter", function(){
        let price = document.querySelector("#milions").innerHTML
        document.getElementById("number").value = price;
    })
}

amountHonda();


function amountMazda(params) {
    const demio = document.querySelector("#demio");
    const mazda = document.querySelector("#thousands");
    const number = document.querySelector("#number");
    const crv = document.querySelector("#mazda");

    demio.addEventListener("mouseenter", function(){
        let price1 = document.querySelector("#thousands").innerHTML
        document.getElementById("number").value = price1;
    })
}

amountMazda();





