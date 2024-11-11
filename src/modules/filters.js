export const filterBrands = (products) => {
  const checkedCheckboxes = Array.from(document.querySelectorAll('.btn__checkbox:checked'));
  const selectedBrandIds = checkedCheckboxes.map(checkbox => {
    return parseInt(checkbox.id.split('_')[1]);
  });

  return products.filter(product => {
    return selectedBrandIds.length === 0 || selectedBrandIds.includes(product.brand);
  });
}