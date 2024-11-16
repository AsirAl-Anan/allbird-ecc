import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../Context/AuthContext/UserContext';
import Navbar from './shared/Navbar';
import Footer from './shared/Footer';
import { useLoaderData, NavLink, useNavigation } from 'react-router-dom';
import { Star, StarHalfIcon as HalfStar, Loader } from 'lucide-react';
import { AddCartContext } from '../Context/CartContext/CartContext';
import { ShoppingCart } from 'lucide-react';

const LoadingProductCard = () => (
  <div className="flex flex-col w-[300px] bg-white p-3 rounded-lg animate-pulse">
    <div className="relative overflow-hidden bg-gray-200" style={{ paddingBottom: '100%' }} />
    <div className="mt-4 space-y-3">
      <div className="h-6 bg-gray-200 rounded w-3/4" />
      <div className="h-4 bg-gray-200 rounded w-1/4" />
      <div className="h-4 bg-gray-200 rounded w-1/2" />
      <div className="h-10 bg-gray-200 rounded" />
      <div className="h-10 bg-gray-200 rounded" />
    </div>
  </div>
);

const LoadingScreen = () => (
  <div className="min-h-screen flex flex-col">
    <div className="flex-grow">
      <div className="text-3xl font-bold text-center my-8">Products Page</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1500px] mx-auto px-4">
        {[...Array(6)].map((_, index) => (
          <LoadingProductCard key={index} />
        ))}
      </div>
    </div>
  </div>
);

export const allProducts = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();
  return data;
};

const Products = () => {
  const { ifNotLoggedIn } = useContext(AuthContext);
  const [rating, setRating] = useState('');
  const [fullStars, setfullStars] = useState('');
  const [hasHalfStar, sethasHalfStar] = useState('');
  const products = useLoaderData();
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  const { addTocart } = useContext(AddCartContext);

  useEffect(() => {
    ifNotLoggedIn();
  }, [ifNotLoggedIn]);

  const renderStarRating = () => {
    products.map((product) =>
      setRating(product.rating.rate),
      setfullStars(Math.floor(rating)),
      sethasHalfStar(rating % 1 >= 0.5)
    );

    return (
      <div className="flex items-center" aria-label={`${rating} out of 5 stars`}>
        {[...Array(5)].map((_, index) => {
          if (index < fullStars) {
            return <Star key={index} className="w-5 h-5 text-yellow-400 fill-current" />;
          } else if (index === fullStars && hasHalfStar) {
            return <HalfStar key={index} className="w-5 h-5 text-yellow-400 fill-current" />;
          } else {
            return <Star key={index} className="w-5 h-5 text-gray-300" />;
          }
        })}
      </div>
    );
  };

  if (isLoading) {
    return (
      <>
        <Navbar />
        <LoadingScreen />
        <Loader />
        <Footer />
      </>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <h1 className="text-3xl font-bold text-center my-8">Products Page</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1500px] mx-auto px-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              rating={renderStarRating}
              addTocart={addTocart}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

function ProductCard({ product, rating, addTocart }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex flex-col w-[300px] bg-white p-3 rounded-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden" style={{ paddingBottom: '100%' }}>
        <img
          src={product.image}
          alt={product.title}
          className="absolute top-0 left-0 w-full h-full object-contain"
        />
        {product.category && (
          <span className="absolute left-0 top-4 bg-black text-white px-2 py-1 text-xs font-bold uppercase">
            {product.category}
          </span>
        )}
        {isHovered && (
          <div
            className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-4 transform translate-y-full transition-transform duration-300 ease-in-out"
            style={{ transform: isHovered ? 'translateY(0)' : 'translateY(100%)' }}
          >
            <p className="text-sm text-gray-600 line-clamp-4">{product.description}</p>
          </div>
        )}
      </div>
      <div className="mt-4 flex-grow">
        <h3 className="text-lg font-bold line-clamp-2">{product.title.trim()}</h3>
        <p className="mt-1 text-gray-900 font-semibold">${product.price.toFixed(2)}</p>
        <p className="mt-1 text-gray-900 font-semibold">
          <div className="inline-block">{rating()}</div> {product.rating.rate}{' '}
          <span className="bg-black !text-white inline-block w-[40px] text-center rounded-full">
            {product.rating.count}
          </span>
        </p>
      </div>
      <div className="mt-4 space-y-2">
        <NavLink
          onClick={() => addTocart(product)}
          className="w-full text-center cursor-pointer block bg-black text-white py-2 px-4 text-sm font-bold uppercase rounded transition-colors duration-300 ease-in-out hover:bg-gray-800"
        >
          Add to Cart
        </NavLink>
        <NavLink
          to={`product/${product.id}`}
          className="w-full  text-center cursor-pointer block bg-white text-black border border-black py-2 px-4 text-sm font-bold uppercase rounded transition-colors duration-300 ease-in-out hover:bg-gray-900 hover:text-white hover:border-red-400"
        >
          View Product <ShoppingCart className='inline' />
        </NavLink>
      </div>
    </div>
  );
}

export default Products;