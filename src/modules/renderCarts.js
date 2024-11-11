const renderCarts = (products) => {
	const cartWrapper = document.querySelector('.cart__wrapper');

	cartWrapper.innerHTML = '';

  if(products.length === 0) {
    cartWrapper.insertAdjacentHTML('beforeend', `
        <div class="col-12 mb-5">
          <div class="text-center fw-medium fs-4">Корзина пуста</div>
        </div>
      `)
  }else {
    products.forEach((item) => {
      
      const price = item.regular_price.value * item.value;
      const totalPriceSpan = price.toFixed(2);

      cartWrapper.insertAdjacentHTML('beforeend', `
        <div class="col-12">
          <div class="card mb-3" data-key="${item.id}">
            <div class="row g-0">
              <div class="col-2">
                <img src="${item.image}" class="img-fluid rounded-start" alt="products">
              </div>
  
              <div class="col-10">
                <div class="card-body d-flex h-100">
                  <div class="col-9 d-flex align-items-start justify-content-end flex-column">
                    <h5 class="card-title fw-bold fs-4 mb-5">${item.title}</h5>
                    <button type="button" class="btn d-flex align-items-center">
                      <img class="card__trash-img" src="./images/icon/trash.svg" alt="trash">
                      <span class="card__trash-text fw-medium">Удалить</span>
                    </button>
                  </div>
                  <div class="col-3 d-flex align-items-start justify-content-end flex-column">
                      <div class="d-flex flex-column align-items-end justify-content-end">
                        <p class="fw-bold fs-2 mb-4">${totalPriceSpan} ₽</p>
  
                        <div class="d-flex align-items-center card__count card__count_cart">
                          <button class="btn_count pt-2 ps-2 pb-2 pe-3 dec" data-value="dec">
                            <img src="images/icon/minus.svg" alt="minus">
                          </button>
                          <span data-value="count" class="fw-medium text-center fs-6 count">${item.value}</span>
                          <button class="btn_count pt-2 ps-3 pb-2 pe-2 inc" data-value="inc">
                            <img src="images/icon/plus.svg" alt="plus">
                          </button>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
  
            </div>
          </div>
        </div>
      `)
    })
  }

}

export default renderCarts;