import { productsData, brandsData } from './getData';
import renderProducts from './renderProducts';
import renderBrands from './renderBrands';
import checkedProducts from './checkedProducts';
import count from './count';

const load = () => {

  productsData().then((data) => {
    renderProducts(data);
    count()
});


brandsData().then((data) => {

  renderBrands(data);
  const checkboxes = document.querySelectorAll('.btn__checkbox');
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', checkedProducts);
  });
  
});

}

export default load;