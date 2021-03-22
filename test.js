// Modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("cart");
var close = document.getElementsByClassName("close")[0];
// tại sao lại có [0] như  thế này bởi vì mỗi close là một html colection nên khi mình muốn lấy giá trị html thì phải thêm [0]. 
var close_footer = document.getElementsByClassName("close-footer")[0];
var order = document.getElementsByClassName("order")[0];
btn.onclick = function () {
  modal.style.display = "block";
}
close.onclick = function () {
  modal.style.display = "none";
}
close_footer.onclick = function () {
  modal.style.display = "none";
}
order.onclick = function () {
  alert("Cảm ơn bạn đã thanh toán đơn hàng")
}
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// xóa cart
var remove_cart = document.getElementsByClassName("btn-danger");
for (var i = 0; i < remove_cart.length; i++) {
  var button = remove_cart[i]
  button.addEventListener("click", function () {
    var button_remove = event.target
    button_remove.parentElement.parentElement.remove()
    updatecart();

  } )
}
// update cart 
function updatecart() {
  var cart_item = document.getElementsByClassName("cart-items")[0];
  var cart_rows = document.getElementsByClassName("cart-row");
  console.log(cart_rows);
  var total = 0;

    var price_item = document.getElementsByClassName("cart-price ");
    var quantity_item = document.getElementsByClassName("cart-quantity-input");
    for(let a =0; a<quantity_item.length;a++)
    {
      var price = parseFloat(price_item[a].innerText)// chuyển một chuổi string sang number để tính tổng tiền.
      var quantity = quantity_item[a].value // lấy giá trị trong thẻ input
      // total += (price*quantity);
      total += (price*quantity);

      
      // console.log("tong tien lan dau " +total);
    }
    
    console.log(quantity_item);
    console.log(price);
    console.log("tong tien " + total);


 

  var cart_modal_body = document.getElementsByClassName("modal-body")[0];

  cart_modal_body.getElementsByClassName("cart-total-price")[0].innerText = total + 'VNĐ'
  // Thay đổi text = total trong .cart-total-price. Chỉ có một .cart-total-price nên mình sử dụng [0].
}
// thay đổi số lượng sản phẩm
var quantity_input = document.getElementsByClassName("cart-quantity-input");
console.log(quantity_input);
for (var i = 0; i < quantity_input.length; i++) {
  var input = quantity_input[i];
  input.addEventListener("change", function (event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
    updatecart()
  })
}
// Thêm vào giỏ
var add_cart = document.getElementsByClassName("btn-cart");
for (var i = 0; i < add_cart.length; i++) {
  console.log(add_cart[i]);
  // var add = add_cart[i];
  add_cart[i].addEventListener("click", function () {
    console.log(add_cart[0]);
    
    var product = this.parentElement.parentElement;
    console.log(product);
    var img = product.parentElement.getElementsByClassName("img-prd")[0].src
    var title = product.getElementsByClassName("content-product-h3")[0].innerText
    console.log(title);
    var price = product.getElementsByClassName("price")[0].innerText
    addItemToCart(title, price, img)
    // Khi thêm sản phẩm vào giỏ hàng thì sẽ hiển thị modal
    modal.style.display = "block";
    
    updatecart()
    

  })
}

function addItemToCart(title, price, img) {
  var cartRow = document.createElement('div')
  cartRow.classList.add('cart-row')
  var cartItems = document.querySelector(".cart-items")
  var cart_title = cartItems.getElementsByClassName('cart-item-title')
  for (var i = 0; i < cart_title.length; i++) {
    if (cart_title[i].innerText == title) {
      alert('Sản Phẩm Đã Có Trong Giỏ Hàng')
      return
    }
  }

  var cartRowContents = `
  <div class="cart-item cart-column">
      <img class="cart-item-image" src="${img}" width="100" height="100">
      <span class="cart-item-title">${title}</span>
  </div>
  <span class="cart-price cart-column">${price}</span>
  <div class="cart-quantity cart-column">
      <input class="cart-quantity-input" type="number" value="1">
      <button class="btn btn-danger" type="button">Xóa</button>
  </div>`
  cartRow.innerHTML  = cartRowContents;
  console.log(cartRow)
  cartItems.append(cartRow)
  document.getElementsByClassName('btn-danger')[0].addEventListener('click', function () {
    var button_remove = event.target
    button_remove.parentElement.parentElement.remove()
    updatecart()
  })
  document.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', function (event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
    updatecart()
  })
}



var a = function fn1(){  
  console.log(x);
      var x = "abc"
  }
 // Kết quả là gì?
 var user ={

    "students" : {
     name: "Anonystick blog's javascript",
     website: "https://anonystick.com",
    
    },
    test : function (){
      console.log(this.name)
     }
  }

function Register(course, fees){
var studentName = this.name;
console.log("Registered student: " + studentName);
console.log("Course Name: " + course);
console.log("Course Fees: " + fees);
}
window.onclick = ()=>{
//  Register('javadsad',21) 
}