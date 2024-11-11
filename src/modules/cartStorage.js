import {updateCartCount} from './calculations'

const cartStorage = () => {

  const cardWrapper = document.querySelector('.card__wrapper');

  cardWrapper.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn_card')) {
      const card = event.target.closest('.card');
      const key = card.dataset.key;
      const products = JSON.parse(localStorage.getItem('products'));
      const cart = localStorage.getItem('cart') ? 
                  JSON.parse(localStorage.getItem('cart')) : 
                  [];
      const productsItem = products.find((i) => {
        return i.id === +key;
      });

      const countDisplay = card.querySelector('[data-value="count"]');
      const valueAdd = parseInt(countDisplay.textContent) || 0;

      if (valueAdd > 0) {
        const existence = cart.findIndex(item => item.id === productsItem.id);
        
        if (existence > -1) {

          cart[existence].value += valueAdd;
        } else {
          productsItem.value = valueAdd;
          cart.push(productsItem);
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount(cart);
      }
    }
  });
}
export default cartStorage;