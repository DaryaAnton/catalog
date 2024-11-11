export const productsData = () => {

	return fetch('./products.json')
		.then(response => response.json())
}

export const brandsData = () => {

	return fetch('./brands.json')
		.then(response => response.json())
}
