import WelcomeBanner from '@/components/WelcomeBanner';
import ProductView from '@/components/ProductView';
import { getAllCategories } from '@/sanity/lib/products/getAllCategories';
import { getAllProducts } from '@/sanity/lib/products/getAllProducts';

export default async function Home() {
  const products = await getAllProducts();
  const categories = await getAllCategories();

  console.log(
    crypto.randomUUID().slice(0, 5) +
      `>>>Rendered the home page cache with ${products.length} products and ${categories.length} categories`
  );

  return (
    <div>
      <WelcomeBanner />
      <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100 p-4 z-20">
        <ProductView products={products} categories={categories} />
      </div>
    </div>
  );
}
