import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../Context/AuthContext/UserContext';
import Navbar from './shared/Navbar';
import Footer from './shared/Footer';
import { useLoaderData, NavLink, useNavigation } from 'react-router-dom';
import { Loader } from 'lucide-react';
import { AddCartContext } from '../Context/CartContext/CartContext';
import { ShoppingCart } from 'lucide-react';
import pro

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
  const products = useLoaderData();
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  const { addTocart } = useContext(AddCartContext);

  useEffect(() => {
    ifNotLoggedIn();
  }, [ifNotLoggedIn]);

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
              addTocart={addTocart}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

function ProductCard({ product, addTocart }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex flex-col w-[300px] bg-white p-3 rounded-lg  duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-6 transition"
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
        <div className="mt-1 text-gray-900 font-semibold">
          <ProductRating rating={product.rating} />
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <NavLink
          onClick={() => addTocart(product)}
          className="w-full text-center cursor-pointer block bg-black border text-white py-2 px-4 text-sm font-bold uppercase rounded transition-colors duration-300 ease-in-out hover:bg-gray-400 hover:text-black hover:border-zinc-500"
        >
          Add to Cart <ShoppingCart className='inline  w-[20px]' />
        </NavLink>
        <NavLink
          to={`product/${product.id}`}
          className="w-full  text-center cursor-pointer block bg-white text-black border border-black py-2 px-4 text-sm font-bold uppercase rounded transition-colors duration-300 ease-in-out hover:bg-gray-600 hover:text-white hover:border-red-400"
        >
          View Product 
        </NavLink>
      </div>
    </div>
  );
}

export default Products;