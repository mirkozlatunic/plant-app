import { Category, Product } from '@/sanity.types';

interface ProductViewProps {
  products: Product[];
  categories: Category[];
}

const ProductView = ({ products, categories }: ProductViewProps) => {
  return <div>ProductView</div>;
};

export default ProductView;
