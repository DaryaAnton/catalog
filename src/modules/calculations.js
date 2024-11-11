export const updateTotalPrice = (cart) => {
  const cartPrice = document.querySelector('.price__total > span');
  const totalPrice = cart.reduce((sum, product) => {
    return sum + (product.regular_price.value * product.value);
  }, 0);
  cartPrice.textContent = totalPrice.toFixed(2); 
}

export const updateCartCount = (cart) => {
  const cartCountDisplay = document.querySelector('.btn_cart-count > span');
  const totalCount = cart.reduce((acc, item) => acc + (item.value || 1), 0);
  cartCountDisplay.textContent = totalCount;
}
