import { products } from "../constants";
import { PopularProductCard } from "../components";

const PopularProducts = () => {
  return (
    <section id='featured-products' className='max-container max-sm:mt-12 py-16 bg-gradient-to-b from-gray-200 to-gray-300'>
      <div className='flex flex-col justify-center items-center gap-5'>
        <h2 className='text-4xl font-palanquin font-bold text-indigo-800 text-center'>
          Explore Our <span className='text-purple-700'>Handpicked</span> Selection
        </h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-gray-700 text-center'>
          Immerse yourself in a world of exceptional craftsmanship and style.
          Our carefully curated collection brings you timeless pieces where
          luxury meets everyday life, creating a perfect blend of form and
          function.
        </p>
      </div>

      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-10'>
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
