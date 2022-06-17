import { navbar } from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();


//Import Footer

import {footer} from "../components/footer.js"
document.getElementById('footer').innerHTML = footer()

// console.log(navbar())

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}





$('.slider_div').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    // dots: true,
    prevArrow: '<i class="fa-solid fa-arrow-left    left_arrow">',
    nextArrow: '<i class="fa-solid fa-arrow-right   right_arrow">'
});

var filtered = false;

$('.js-filter').on('click', function () {
    if (filtered === false) {
        $('.slider_div').slick('slickFilter', ':even');
        $(this).text('Unfilter Slides');
        filtered = true;
    } else {
        $('.slider_div').slick('slickUnfilter');
        $(this).text('Filter Slides');
        filtered = false;
    }
});


let cartData = JSON.parse(localStorage.getItem("cartitems")) || [];

var length = cartData.length
console.log(length)

// document.getElementById('addingcart').innerHTML = `${length}`


let make_obj = [

   

    {
        id: 4,
        image_url: 'https://img.tttcdn.com/product/xy/220/220/p/gu1/I/8/I2438/I2438-1-0f3b-LVFR.jpg',
        name: 'Akon S35 Guitar',
        strikedOffPrice: 'Rs2133.65',
        price: '712.01'
    },

    {
        id: 5,
        image_url: 'https://img.tttcdn.com/product/xy/220/220/p/gu1/L/1/L2416-1/L2416-1-1-4f99-CEPJ.jpg',
        name: 'Mobile Phone Heat Dissipation Fan ',
        strikedOffPrice: '1899',
        price: '1040.69'
    },

    {
        id: 6,
        image_url: 'https://img.tttcdn.com/product/xy/220/220/p/gu1/C/6/C12516/C12516-1-ffdc-gOUh.jpg',
        name: 'Mosquito Killer USB Hanging ',
        strikedOffPrice: '1899',
        price: '949.61'
    },

    {
        id: 7,
        image_url: 'https://img.tttcdn.com/product/xy/220/220/p/gu1/V/1/V8852-1/V8852-1-1-4904-gGE9.jpg',
        name: 'Outdoor Night Vision Device ',
        strikedOffPrice: 'Rs4899',
        price: '3167.21'
    },

    {
        id: 8,
        image_url: 'https://img.tttcdn.com/product/xy/220/220/p/gu1/E/7/E19837/E19837-1-c110-pOCb.jpg',
        name: '10X-300X Monocular Telescope ',
        strikedOffPrice: 'Rs1899',
        price: '1468.37'
    }


]



make_obj.map((elem) => {


    let box1 = document.createElement("div");
    // console.log(box1);

    var img = document.createElement("img");
    img.src = elem.image_url;

    var name = document.createElement("p");
    name.innerText = elem.name;

    var priceDiv = document.createElement("div");
    priceDiv.setAttribute("class", "price");

    var strikedOffPrice = document.createElement("p");
    strikedOffPrice.innerText = elem.strikedOffPrice;
    strikedOffPrice.style.textDecoration = "Line-through";

    var price = document.createElement('p');
    price.innerText = 'RS.' + elem.price;
    price.setAttribute("id", "rs");


    var button = document.createElement("button");
    button.innerText = "Add to cart";
    button.style.height = '30px';
    button.style.width = '120px';
    button.setAttribute("class", "cart");
    button.addEventListener("click", function () {
        addToCart(elem);
    })

    priceDiv.append(strikedOffPrice, price);

    box1.append(img, name, priceDiv, button);

    let s = document.querySelector("#slider2").append(box1);
    console.log(s);


})




let make_obj_again = [

   

    {
        id: 4,
        image_url: 'https://img.tttcdn.com/product/xy/220/220/p/gu1/V/R/V9873GR/V9873GR-1-d1f6-2vJH.jpg',
        name: 'RG315 Game 3.5 inch Video Game',
        strikedOffPrice: 'Rs17903',
        price: '10453'
    },

    {
        id: 5,
        image_url: ' https://img.tttcdn.com/product/xy/220/220/p/gu1/H/B/H45305B/H45305B-1-2558-wvMN.jpg',
        name: 'Lixacada Ceiling Fan with Light ',
        strikedOffPrice: 'Rs28511',
        price: '33000'
    },

    {
        id: 6,
        image_url: 'https://img.tttcdn.com/product/xy/220/220/p/gu1/P/L/PAA4789BL/PAA4789BL-1-3e57-eEc6.jpg',
        name: 'Konka Smart Tablet ',
        strikedOffPrice: 'Rs19000',
        price: '15839'
    },

    {
        id: 7,
        image_url: 'https://img.tttcdn.com/product/xy/220/220/p/gu1/L/W/L5526W/L5526W-1-fab0-jWPk.jpg',
        name: 'RGB Sunset Atmosphere Lamp ',
        strikedOffPrice: 'Rs949',
        price: '712'
    },

    {
        id: 8,
        image_url: ' https://img.tttcdn.com/product/xy/220/220/p/gu1/E/S/E11809US/E11809US-1-f1da-cIGf.jpg',
        name: '75Garden Hose Upgrade ',
        strikedOffPrice: 'Rs1899',
        price: '1668.37'
    }


]

// let arr = JSON.parse(localStorage.getItem('products')) || [];

make_obj_again.map((elem) => {


    let box1 = document.createElement("div");
    // console.log(box1);

    var img = document.createElement("img");
    img.src = elem.image_url;

    var name = document.createElement("p");
    name.innerText = elem.name;

    var priceDiv = document.createElement("div");
    priceDiv.setAttribute("class", "price");

    var strikedOffPrice = document.createElement("p");
    strikedOffPrice.innerText = elem.strikedOffPrice;
    strikedOffPrice.style.textDecoration = "Line-through";

    var price = document.createElement('p');
    price.innerText ='RS.' + elem.price;;
    price.setAttribute("id", "rs");


    var button = document.createElement("button");
    button.innerText = "Add to cart";
    button.style.height = '30px';
    button.style.width = '120px';
    button.setAttribute("class", "cart");
    button.addEventListener("click", function () {
        addToCart(elem);
    })

    priceDiv.append(strikedOffPrice, price);

    box1.append(img, name, priceDiv, button);

    let s = document.querySelector("#slider3").append(box1);
    // arr.push(s)
    // localStorage.setItem('products',JSON.stringify(arr));
    // alert('item added to cart')


})




let prod = [


    {
        id: 10,
        image_url: 'https://img.tttcdn.com/product/xy/220/220/p/gu1/D/L/D7212BL/D7212BL-1-f731-DC7a.jpg',
        name: 'Mini Cute Cartoon Children Video  ',
        strikedOffPrice: 'Rs8899',
        price: '5668.37'
    },

    {
        id: 11,
        image_url: ' https://img.tttcdn.com/product/xy/220/220/p/gu1/H/9/H24229/H24229-1-dfd0-39yz.jpg',
        name: 'Aqara Cube Smart Home Controller Z ',
        strikedOffPrice: 'Rs1899',
        price: '1468.37'
    },

    {
        id: 12,
        image_url: 'https://img.tttcdn.com/product/xy/220/220/p/tt/h/1/h10155-7-506e.jpg',
        name: 'Outdoor Hunting Tactical Puttee ',
        strikedOffPrice: 'Rs3899',
        price: '2668.37'
    },

    {
        id: 13,
        image_url: ' https://img.tttcdn.com/product/xy/220/220/p/gu1/K/0/K20270/K20270-1-0096-8qYb.jpg',
        name: '75Garden Hose Upgrade ',
        strikedOffPrice: 'Rs1899',
        price: '1348.67'
    },

    {
        id: 14,
        image_url: 'https://img.tttcdn.com/product/xy/220/220/p/gu1/P/B/PB0300B/PB0300B-1-dd99-grZw.jpg',
        name: '116plus 1.44-inch TFT Single-touch ',
        strikedOffPrice: 'Rs1899',
        price: '768.37'
    },

    {
        id: 15,
        image_url: ' https://img.tttcdn.com/product/xy/220/220/p/gu1/K/L/K15751LBL/K15751LBL-1-2d26-HSfu.jpg',
        name: 'Childrens Scooter With Four Wheeler ',
        strikedOffPrice: 'Rs18999',
        price: '16899'
    },

    {
        id: 16,
        image_url: ' https://img.tttcdn.com/product/xy/220/220/p/gu1/E/S/E11809US/E11809US-1-f1da-cIGf.jpg',
        name: '75Garden Hose Upgrade ',
        strikedOffPrice: 'Rs1899',
        price: '1668.37'
    },

    {
        id: 17,
        image_url: 'https://img.tttcdn.com/product/xy/220/220/p/gu1/I/7/I4057/I4057-1-3ab3-QtFw.jpg',
        name: 'YONGNUO YN8-75 75cm/30in Octa ',
        strikedOffPrice: 'Rs9899',
        price: '8966'
    },

    {
        id: 18,
        image_url: ' https://img.tttcdn.com/product/xy/220/220/p/gu1/D/9/D11759/D11759-1-e0e4-44Ql.jpg',
        name: 'Andoer Portable Digital Camera ',
        strikedOffPrice: 'Rs3699',
        price: '4668.37'
    },

    {
        id: 19,
        image_url: ' https://img.tttcdn.com/product/xy/220/220/p/gu1/E/4/E9104/E9104-1-70d6-e4UH.jpg',
        name: 'Electron Digital Microscope Portable  ',
        strikedOffPrice: 'Rs3899',
        price: '2668.37'
    },

    {
        id: 20,
        image_url: 'https://img.tttcdn.com/product/xy/220/220/p/gu1/E/U/E16527EU/E16527EU-1-649a-zIhn.jpg',
        name: 'KKmoon PIR Motion Sensor Motio ',
        strikedOffPrice: 'Rs1899',
        price: '1368.7'
    },

    {
        id: 21,
        image_url: ' https://img.tttcdn.com/product/xy/220/220/p/gu1/K/9/K6239/K6239-1-1b9d-vWOT.jpg',
        name: 'Car Radar Detector 360 Degree 16 ',
        strikedOffPrice: 'Rs1499',
        price: '1268.30'
    },

    {
        id: 22,
        image_url: ' https://img.tttcdn.com/product/xy/220/220/p/tt/i/m/image_356_1_218_1_81_1_394_1_17_1_18_1_21_1_202_1_97_1_100_1_290_1_177_1_610_1_265_1_193_1_361_1_1045_1_1079_1_113.jpg',
        name: 'Joyo JF-03 Crunch Distortion Electric ',
        strikedOffPrice: 'Rs3899',
        price: '2668.38'
    },

    {
        id: 23,
        image_url: 'https://img.tttcdn.com/product/xy/220/220/p/gu1/L/9/L2349/L2349-1-147f-RXhi.jpg',
        name: '5L 7 Colors LED Light Ice Bucket  ',
        strikedOffPrice: 'Rs7899',
        price: '5668.39'
    },

    {
        id: 24,
        image_url: 'https://img.tttcdn.com/product/xy/220/220/p/gu1/L/1/L2830-1/L2830-1-1-7d6f-5vRO.jpg',
        name: 'https://img.tttcdn.com/product/xy/220/220/p/gu1/L/1/L2830-1/L2830-1-1-7d6f-5vRO.jpg ',
        strikedOffPrice: 'Rs1899',
        price: '12368.37'
    },

    {
        id: 25,
        image_url: ' https://img.tttcdn.com/product/xy/220/220/p/gu1/E/S/E11809US/E11809US-1-f1da-cIGf.jpg',
        name: '75Garden Hose Upgrade ',
        strikedOffPrice: 'Rs18999',
        price: '12668'
    },

    {
        id: 26,
        image_url: ' https://img.tttcdn.com/product/xy/220/220/p/gu1/E/S/E11809US/E11809US-1-f1da-cIGf.jpg',
        name: '75Garden Hose Upgrade ',
        strikedOffPrice: 'Rs1899',
        price: '1668.37'
    },

   
    {
        id: 27,
        image_url: 'https://img.tttcdn.com/product/xy/220/220/p/gu1/B/4/B2B00524/B2B00524-1-224c-mJQo.jpg',
        name: 'Mini Portable BBQ + Panini ',
        strikedOffPrice: 'Rs1999',
        price: '1268.37'
    }

]


// let cartData = JSON.parse(localStorage.getItem("cartitems")) || []

prod.map((elem) => {


    let box2 = document.createElement("div");
    // console.log(box1);

    var img = document.createElement("img");
    img.src = elem.image_url;

    var name = document.createElement("p");
    name.innerText = elem.name;

    var priceDiv = document.createElement("div");
    priceDiv.setAttribute("class", "price");

    var strikedOffPrice = document.createElement("p");
    strikedOffPrice.innerText = elem.strikedOffPrice;
    strikedOffPrice.style.textDecoration = "Line-through";

    var price = document.createElement('p');
    price.innerText = 'RS.' + elem.price;
    price.setAttribute("id", "rps");


    var button = document.createElement("button");
    button.innerText = "Add to cart";
    button.style.height = '30px';
    button.style.width = '120px';
    button.setAttribute("class", "cart");
    button.addEventListener("click", function () {
        addToCart(elem);
    })

    priceDiv.append(strikedOffPrice, price);

    box2.append(img, name, priceDiv, button);

    let p = document.querySelector("#container").append(box2)
    console.log(p);;
    // arr.push(s)
    // localStorage.setItem('products',JSON.stringify(arr));
    // alert('item added to cart')


})


function addToCart(elem) {
    console.log(elem)
   cartData.push(elem);
    localStorage.setItem("cartitems", JSON.stringify(cartData));
    alert("item added to cart")
} 