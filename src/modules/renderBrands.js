const renderBrands = (brands) => {
	const buttonWrapper = document.querySelector('.button__brand');
	buttonWrapper.innerHTML = '';

	brands.forEach((item) => {
		buttonWrapper.insertAdjacentHTML('beforeend', `
        <div class="assortiment__item d-flex align-items-center">
          <input class="btn__checkbox" type="checkbox" id="brand_${item.id} autocomplete="off">
          <label class="btn btn__checkbox-lable fw-medium" for="brand_${item.id}">${item.title}</label>
        </div>
			`)

	})
}

export default renderBrands;