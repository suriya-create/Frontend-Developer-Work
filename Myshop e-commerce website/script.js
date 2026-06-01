const products=[
{id:1,name:"Running Shoes",price:2499,image:"product image.jpeg"},
{id:2,name:"Smart Watch",price:5999,image:"product image.jpeg"},
{id:3,name:"Headphones",price:3999,image:"product image.jpeg"},
{id:4,name:"Backpack",price:1999,image:"product image.jpeg"},
{id:5,name:"Sunglasses",price:1299,image:"product image.jpeg"},
{id:6,name:"T-Shirt",price:799,image:"product image.jpeg"},
{id:7,name:"Laptop Bag",price:2999,image:"product image.jpeg"},
{id:8,name:"Bluetooth Speaker",price:3499,image:"product image.jpeg"}

];

let cart=JSON.parse(localStorage.getItem("cart"))||[];
const productList=document.getElementById("product-list");
const cartCount=document.getElementById("cart-count");

function renderList(list){
  productList.innerHTML="";
  list.forEach(p=>{
    productList.innerHTML+=`
    <div class="card">
      <img src="${p.image}">
      <h3>${p.name}</h3>
      <p class="price">₹${p.price}</p>
      <div class="rating">
        <i class="fa fa-star"></i><i class="fa fa-star"></i>
        <i class="fa fa-star"></i><i class="fa fa-star"></i>
        <i class="fa fa-star-half-stroke"></i>
      </div>
      <button onclick="addToCart(${p.id})">
        <i class="fa fa-cart-plus"></i> Add to Cart
      </button>
    </div>`;
  });
}

function addToCart(id){
  const item=products.find(p=>p.id===id);
  const orderNo="ORD"+Date.now();
  cart.push({...item,qty:1,orderNo});
  localStorage.setItem("cart",JSON.stringify(cart));
  updateCount();
  showToast("Added to cart!");
}

function updateCount(){
  if(cartCount)
    cartCount.textContent=cart.reduce((s,i)=>s+i.qty,0);
}

function searchProducts(){
  const q=document.getElementById("searchInput").value.toLowerCase();
  renderList(products.filter(p=>p.name.toLowerCase().includes(q)));
}

function toggleMenu(){
  document.getElementById("nav-links").classList.toggle("show");
}

function showToast(msg){
  const t=document.createElement("div");
  t.className="toast";
  t.textContent=msg;
  document.body.appendChild(t);
  setTimeout(()=>t.remove(),3000);
}

updateCount();
renderList(products);
