// menu click
let a = document.getElementsByClassName("fa-bars")[0];
let b = document.getElementById("menu-drop");
let close = document.getElementsByClassName("fa-times")[0];
b.style.display = "none";

//  console.log(x1);
let flag = false;
a.onclick = function () {
  // console.log(flag);
  if (flag == false) {
    // an
    b.classList.add("luotdinao");

    b.classList.remove("trove");
    b.style.width = "60%";
    flag = true;
    b.style.display = "block";
  } else {
    b.classList.remove("luotdinao");
    b.classList.add("trove");
    b.style.width = "0%";
    flag = false;
  }

  // b.style.display="block";
  // console.log(b.getAttribute('display'));
  //    if(b.style.display=="none") {
  //     b.classList.add("luotdinao");
  //     b.classList.remove("trove");
  //     b.style.width="60%";

  //     b.style.display="block";

  //    }
  //     else{
  //         b.classList.remove("luotdinao")
  //         b.classList.add("trove");
  //         b.style.display="none";
  //         b.style.width="0%";

  //     }
};

// dong cua so
let flag2 = false;

close.onclick = function () {
  //  var b =
  b.classList.remove("luotdinao");
  b.classList.add("trove");
  b.style.width = "0%";
  //  b.classList.add("trove");
  // b.style.display = "none";
};
// search icon an hien
let search = document.getElementsByClassName("fa-search")[0];

function searchInput(x) {
  let searchinput = document.getElementsByClassName("menu-input")[0];
  search.classList.toggle("fa-times");
  search.style.transform ="rotate(20deg)";
  if (flag2 == false) {
    searchinput.style.display = "block";
    flag2 = true;
  } else {
    searchinput.style.display = "none";
    flag2 = false;
  }
}
// slider show 2
// slick slider 2
// sliderbox
const sliderbox = document.querySelector(".list-slider-box");
// ul slider
const slider_list = document.querySelectorAll(".list-slider-2");
// buttton
const nextBtn = document.querySelector(".fa-arrow-right");
const prevBtn = document.querySelector(".fa-arrow-left");
// get value of width of slider_list
let size = slider_list[0].clientWidth;
// counter
counter = 1;
// flag 3
flag3 = false;
// add evenelistener for button

nextBtn.addEventListener("click", () => {
  counter++;

  if (counter == slider_list.length) {
    counter = 0;
    sliderbox.style.transform = "translateX(" + -size * (counter - 1) + "px)";
    sliderbox.style.transition = "transform 0.4s ease-in-out";
    // counter++;
  }
  if (flag3 === false) {
    counter = 1;
    sliderbox.style.transform = "translateX(" + -size * (counter - 1) + "px)";
    sliderbox.style.transition = "transform 0.4s ease-in-out";
    flag3 = true;
  }

  sliderbox.style.transform = "translateX(" + -size * counter + "px)";
  sliderbox.style.transition = "transform 0.4s ease-in-out";

  // let x = slider_list[i].getAttribute('id');
  // if(x === "lastList"){
  //     counter = slider_list.length - 1;
  //  slider_list[i].transform ="translateX("+ - size*counter +"px)";
  // }
  console.log(counter);

  // if(slider_list[i])
  // console.log(counter);
  // console.log(-size*counter);
});
prevBtn.addEventListener("click", () => {
  //     if(slider_list[0].id==="firstList")
  //    {

  //        counter = slider_list.length -1 ;
  //        sliderbox.style.transform ="translateX("+  -size*counter*3 +"px)";
  //        sliderbox.style.transition = "transform 0.4s ease-in-out"
  //   }
  counter--;
  console.log(counter);
  sliderbox.style.transform = "translateX(" + -size * counter + "px)";
  sliderbox.style.transition = "transform 0.4s ease-in-out";
  if (counter < 0) {
    //    console.log(slider_list[counter]);
    counter = slider_list.length - 1;
    sliderbox.style.transform = "translateX(" + -size * counter + "px)";
    sliderbox.style.transition = "transform 0.4s ease-in-out";
  }
  console.log(counter);
  if (flag3 == false) {
    counter = slider_list.length - 1;
    sliderbox.style.transform = "translateX(" + -size * counter + "px)";
    sliderbox.style.transition = "transform 0.4s ease-in-out";
    flag3 = true;
  }
});
// get data fashion
var data_fashion = [
  {
    name: "BELLA TOES",
    price: "300",
    src: "img/pd1.png",
  },
  {
    name: "CHIKKU LOAFERS",
    price: "200",
    src: "img/pd2.png",
  },
  {
    name: "(SRV) SNEAKERS",
    price: "400",
    src: "img/pd3.png",
  },
  {
    name: "SHUBERRY HEELS",
    price: "100",
    src: "img/pd4.png",
  },
  {
    name: "RED BELLIES",
    price: "600",
    src: "img/pd5.png",
  },
  {
    name: "CATWALK FLATS",
    price: "700",
    src: "img/pd6.png",
  },
  {
    name: "RUNNING SHOES",
    price: "800",
    src: "img/pd8.png",
  },
  {
    name: "SUKUN CASUALS",
    price: "900",
    src: "img/pd9.png",
  },
  {
    name: "BANK SNEAKERS",
    price: "300",
    src: "img/pd5.png",
  },
  {
    name: "ADIDAS",
    price: "3100",
    src: "img/pd6.png",
  },
  {
    name: "NIKE",
    price: "3200",
    src: "img/pd2.png",
  },
];
var product_container = document.getElementsByClassName("main-product-row")[0];
product_container.style.flexWrap = "wrap";
product_container.style.justifyContent = "initial";
// product_container.css({"flexWrap":"wrap","justifyContent":"initial"});

// console.log(produc_item)
// console.log(product_container)
// console.log(product_container)
function generateFashion(src, name, price) {
  const produc_item = document.createElement("div");
  produc_item.classList.add("main-product-item");
  produc_item.innerHTML = `
    <div class="main-product-item-img-box">
    <div class="main-product-item-img">
    <img src=${src} alt="" class="main-product-img">
    </div>
    <div class="main-product-item-quick-view">
    <a href="#" class="product-item-quick-view-link">
    Quick view
    </a>
    </div>
    </div>
    <div class="product-item-name">
    <span>
    ${name}
    </span>
    </div>
    <div class="main-product-item-price-box">
    <div class="product-item-price-review">
    <div class="product-item-price">
    <span>
    ${price}
    </span>
    </div>
    <div class="product-price-review">
    <ul class="product-review-list">
    <li class="product-review-item">
    <i class="fa fa-star"></i>
    </li>
    <li class="product-review-item">
    <i class="fa fa-star"></i>
    </li>
    
    <li class="product-review-item">
    <i class="fa fa-star"></i>
    </li>
    
    <li class="product-review-item">
    <i class="fa fa-star-half-o"></i>
    </li>
    <li class="product-review-item">
    <i class="fa fa-star-o"></i>
    </li>
    
    </ul>
    </div>
    </div>
    <div class="product-item-cart-box">
    <div class="product-item-cart" onclick="addItemToCart()">
    <i class="fa fa-cart-plus">
    
    </i>
    </div>
    </div>
    </div>
    <div class="main-product-item-new-box">
    <a href="#" class="product-item-new-link">
    New
    </a>
    `;
  return produc_item;
}
function generateItemShopping(name, price) {
  var product = document.createElement("li");
  product.classList.add("shopping_item");
  var productcontent = ` 
    
                        <span class="item_shop_name">${name}</span>
                        <div class="item_quality">
                            <input onclick=eventInput() type="number" value="1">
                        </div>
                        <div class="item_delete">
                            <button class="item_delete_btn" onclick="deleteItem()">X</button>
                            <span class="item_price">${price}</span>
                        </div>
                   
`;
  product.innerHTML = productcontent;
  return product;
}
function renderUI() {
  data_fashion.forEach(function (fashion) {
    product_container.append(
      generateFashion(fashion.src, fashion.name, fashion.price)
    );
    // var item = $(".main-product-item");
    // console.log(item)
    // console.log(fashion.src)
  });
}
renderUI();
// shopping_show cart
// console.log(add_cart)
// for(var i = 0 ;i<add_cart.length;i++){
// var add = add_cart[i];
// add.addEventListener("click",function(event){
//     var button = event.target;
//     var name = button.parentElement.parentElement.parentElement.previousElementSibling.innerText
//     var price= button.parentElement.parentElement.previousElementSibling.innerText
//     // console.log(price)
// })
var slUL = document.getElementsByClassName("shopping_list")[0];
var sanpham = document.getElementsByClassName("shopping_list")[0];
var slLi = slUL.getElementsByClassName("shopping_item");
var flag3 = false;
var price_item_total = document.getElementsByClassName("price_item_total")[0];
function addItemToCart() {
  // console.log(sanpham)
  // let add_cart =document.getElementsByClassName("product-item-cart")
  // console.log(event.target)
//   var a = 3;
  let button = event.target;
  console.log(button.nodeName);
  // if(button.nodeName)
  let name =
    button.parentElement.parentElement.previousElementSibling.children[0]
      .innerText;
  console.log(name);
  let price =
    button.parentElement.previousElementSibling.children[0].children[0]
      .innerText;
  console.log(price);
  var cart_title = sanpham.getElementsByClassName('item_shop_name')
  for (var i = 0; i < cart_title.length; i++) {
    if (cart_title[i].innerText == name) {
      alert('Sản Phẩm Đã Có Trong Giỏ Hàng')
      return
    }
  }
  price_item_total.style.display ="flex"

  slUL.style.display = "block";

  sanpham.append(generateItemShopping(name, price));
  
    if(flag3==false) {

      document.getElementsByClassName("shopping_cart_container")[0].style.display = "block";
      flag3=true;
      console.log(flag3)
    }
    
//   console.log(flag3)
  if(document.getElementById('hienthiloi')) {
    
      document.getElementById('hienthiloi').innerText ="";
  }
    updateCart();

}
function deleteItem() {
  let dltButton = event.target;
  console.log(dltButton);
  console.log(dltButton.parentElement.parentElement);
  dltButton.parentElement.parentElement.remove();
  updateCart();
    console.log(slUL.getElementsByTagName('li'))
    if(slUL.getElementsByTagName('li').length === 0 ){
        document.getElementsByClassName("shopping_cart_container")[0].style.display = "none";
      
          
          document.getElementById('hienthiloi').innerText="Giỏ hàng của bạn chưa có sản phẩm"
        

        flag3 = false;
    }
}
function updateCart() {
  // var cart_item =document.getElementsByClassName('')[0];
  
  console.log(slLi.length);
 let total = 0;
  for (let i = 0; i < slLi.length; i++) {
    var sl = slLi[i];
    console.log(sl);
    var quality_item = sl.querySelector(".item_quality input[type=number]").value;
    var price_item = sl.querySelector(".item_price").innerText;
    var price = parseFloat(price_item)
    console.log(quality_item);
    console.log(price)
    total += price *quality_item
    console.log(total)
  }
  document.getElementsByClassName('price_item')[0].innerHTML = `$ ${total}`
}
function eventInput(){
    var input = event.target;
    if(isNaN(input.value) || input.value <=0 ) {
        input.value = 1;
    }
    updateCart();
}

// goi ham
// close shopping cart 
let close_btn = document.querySelector('.shopping_close button[type=button]');
function closeShopping(){
    
    document.getElementsByClassName("shopping_cart_container")[0].style.display = "none";
    flag3 = false;
}

function checkInValidShop(){
    // console.log(false)
    console.log(slUL.getElementsByTagName('li'));
if( flag3 === false  ) {
    if(document.getElementById('hienthiloi')) {
        document.getElementById('hienthiloi').innerText="Giỏ hàng của bạn chưa có sản phẩm"
      slUL.style.display = "none"
      price_item_total.style.display ="none"
    }
    document.getElementsByClassName("shopping_cart_container")[0].style.display = "block";
    flag3 = true
    console.log(flag3)
} 
else {
    document.getElementsByClassName("shopping_cart_container")[0].style.display = "none";
    flag3 = false;
console.log(flag3)
}

}