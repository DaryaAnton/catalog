const renderProducts = (products) => {
	const cardWrapper = document.querySelector('.card__wrapper');

	localStorage.setItem('products', JSON.stringify(products));

	cardWrapper.innerHTML = '';

	products.forEach((item) => {
		cardWrapper.insertAdjacentHTML('beforeend', `
				<div class="col-4 mb-4">
					<div class="card" data-key="${item.id}">
						<img src="${item.image}" class="card-img-top" alt="products">
						<div class="card-body">
							<div class="d-flex justify-content-between align-items-center mb-4">
								<h5 class="card-title fw-bold fs-6">${item.title}</h5>
							</div>

							<div class="d-flex justify-content-between align-items-center">
								<p class="fw-bold fs-5">${item.regular_price.value} ₽</p>

								<div class="d-flex align-items-center card__count">
									<button class="btn_count pt-2 ps-2 pb-2 pe-3 dec" data-value="dec">
										<img src="images/icon/minus.svg" alt="minus">
									</button>
									<span data-value="count" class="fw-medium text-center count">1</span>
									<button class="btn_count pt-2 ps-3 pb-2 pe-2 inc" data-value="inc">
										<img src="images/icon/plus.svg" alt="plus">
									</button>
								</div>

								<button type="button" class="btn btn-primary btn_card flex-inline align-items-center justify-content-center">
									<img src="images/icon/shopping-cart.svg" alt="shopping-cart">
								</button>
							</div>

						</div>
					</div>
				</div>
			`)

	})
}

export default renderProducts;