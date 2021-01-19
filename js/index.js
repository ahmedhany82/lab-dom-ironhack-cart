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
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');

  //updateSubtotal(singleProduct);
  // end of test

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
  const productList = productToRemove.parentNode;
  
  productList.removeChild(productToRemove);
  
  calculateAll();

}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeBtns = document.querySelectorAll('.btn-remove');
  removeBtns.forEach(function(button) {
    button.addEventListener('click', removeProduct);
  });
});
