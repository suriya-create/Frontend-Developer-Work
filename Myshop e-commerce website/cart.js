let cart=JSON.parse(localStorage.getItem("cart"))||[];
const cartItems=document.getElementById("cart-items");
const totalPrice=document.getElementById("total-price");

function displayCart(){
  cartItems.innerHTML="";
  let total=0;
  cart.forEach((item,i)=>{
    total+=item.price*item.qty;
    cartItems.innerHTML+=`
    <div class="cart-item">
      <div>
        <strong>${item.name}</strong><br>
        ₹${item.price} x ${item.qty}<br>
        <small>${item.orderNo}</small>
      </div>
      <div>
        <button onclick="changeQty(${i},-1)">-</button>
        <button onclick="changeQty(${i},1)">+</button>
        <button onclick="removeItem(${i})">x</button>
      </div>
    </div>`;
  });
  totalPrice.textContent=`Total: ₹${total}`;
}

function changeQty(i,d){
  cart[i].qty+=d;
  if(cart[i].qty<=0)cart.splice(i,1);
  localStorage.setItem("cart",JSON.stringify(cart));
  displayCart();
}
function removeItem(i){
  cart.splice(i,1);
  localStorage.setItem("cart",JSON.stringify(cart));
  displayCart();
}
displayCart();
function addToCart(id) {
  alert("Product " + id + " added to cart!");
}
