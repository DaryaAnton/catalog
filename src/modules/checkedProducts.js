import { productsData } from './getData';
import renderProducts from './renderProducts';
import { filterBrands } from './filters';

const checkedProducts = () => {

  productsData().then((data) => {
    const filteredProducts = filterBrands(data);
    renderProducts(filteredProducts);
  });

}
export default checkedProducts