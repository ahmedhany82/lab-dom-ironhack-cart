// ITERATION 1

function updateSubtotal(product) {

  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  const subTotal = price * quantity;
  product.querySelector('.subtotal span').innerText = subTotal;
  return subTotal;

}

function calculateAll() {

  const products = document.querySelectorAll('.product');
  let totalPrice = 0;

  products.forEach(function(product) { 
    totalPrice += updateSubtotal(product);
  })

  document.getElementById('total-value').querySelector('span').innerText = totalPrice;
}

// ITERATION 4

function removeProduct(event) {

  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  const productToRemove = event.target.parentNode.parentNode;

  console.log(productToRemove);

  const productList = productToRemove.parentNode;
  
  productList.removeChild(productToRemove);
  
  calculateAll();

}

// ITERATION 5

function createProduct() {

  console.log("createProduct button is pressed");
  const inputValuess = document.querySelector('.create-product').querySelectorAll('input');
 
  let newProductName = inputValuess[0].value;
  let newProductPrice = inputValuess[1].value;

  const table = document.getElementsByTagName('tbody')[0];
  let newRow = table.insertRow();

  newRow.innerHTML = `<tr class="product">
  <td class="name">
    <span>${newProductName}</span>
  </td>
  <td class="price">$<span>${newProductPrice}</span></td>
  <td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
  <button class="btn btn-remove">Remove</button>
  </td>`

  newRow.className = 'product';

  const addedBtn = newRow.querySelector('.btn-remove');
  addedBtn.addEventListener('click', removeProduct);

  calculateAll();
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.querySelectorAll('.btn-remove');
  removeBtns.forEach(function(button) {
    button.addEventListener('click', removeProduct);
  });

  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
  });
