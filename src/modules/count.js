const count = () => {
	const cards = document.querySelectorAll("[data-wrap=count]");

	
	cards.forEach(card => {
		card.addEventListener("click", (evt) => {

			if (evt.target.closest(".card__count")) {
				const cardCount = evt.target.closest(".card__count");
				const countDisplay = cardCount.querySelector('[data-value="count"]');
				let counter = parseInt(countDisplay.textContent) || 0;

				if (evt.target.closest(".dec")) {
					if (counter > 0) {
						counter--;
					}
					countDisplay.textContent = counter;
				}

				if (evt.target.closest(".inc")) {
					counter++;
					countDisplay.textContent = counter;
				}
			}
		});
	});
};

export default count;