import renderCarts from "./renderCarts"
import {updateTotalPrice} from './calculations'

const loadCards = () => {
	const cart_Wrapper = document.querySelector('.cart__wrapper');

	const cart = localStorage.getItem('cart') ?
		JSON.parse(localStorage.getItem('cart')) :
		[];

	renderCarts(cart);

	cart_Wrapper.addEventListener('click', (event) => {
		if (event.target.classList.contains('card__trash-text')) {
			const cart = localStorage.getItem('cart') ? 
			JSON.parse(localStorage.getItem('cart')) : 
			[];
			const card = event.target.closest('.card');
			const key = card.dataset.key;
			const index = cart.findIndex((item) => item.id === +key);
			cart.splice(index, 1);
			localStorage.setItem('cart', JSON.stringify(cart));

			renderCarts(cart);
		}

		if (event.target.closest('.btn_count')) {
			const card = event.target.closest('.card');
			const key = card.dataset.key;
			const countDisplay = card.querySelector('[data-value="count"]');
			let counter = parseInt(countDisplay.textContent) || 0;

			if (event.target.closest('.dec')) {
				if (counter > 0) {
					counter--;
				}
			}
			if (event.target.closest('.inc')) {
				counter++;
			}

			countDisplay.textContent = counter;

			const cart = localStorage.getItem('cart') ? 
			JSON.parse(localStorage.getItem('cart')) : 
			[];

			const index = cart.findIndex((item) => item.id === +key);
			if (index !== -1) {
				cart[index].value = counter;
				localStorage.setItem('cart', JSON.stringify(cart));

				renderCarts(cart);
				updateTotalPrice(cart);
			}
		}
	});
};
export default loadCards