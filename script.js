let currentPlan={};

function openPlan(title, price, desc, img) {
    currentPlan = {title, price, desc, img};
    document.getElementById("detailTitle").innerText = title + " - " + price;
    document.getElementById("detailDesc").innerText = desc;
    document.getElementById("detailImg").src = img;
    document.getElementById("planDetails").classList.remove("hidden");
}

function showForm(){
document.getElementById("formSection").classList.remove("hidden");
}

function submitOrder(){

let name=document.getElementById("name").value;
let phone=document.getElementById("phone").value;
let whatsapp=document.getElementById("whatsapp").value;
let email=document.getElementById("email").value;

let message=`New Booking - Relentro
Plan: ${currentPlan.title}
Price: ${currentPlan.price}
Details: ${currentPlan.desc}

Customer Name: ${name}
Phone: ${phone}
WhatsApp: ${whatsapp}
Email: ${email}

Location: Kashmir`;

window.open(`https://wa.me/917051932522?text=${encodeURIComponent(message)}`,"_blank");
}