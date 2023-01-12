import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Header, Footer } from "../../components";
import Layout from "../../components/Layout";
import { addToCart } from "../../store/slices/cartSlice";
import { loadedProducts } from "../../store/slices/productSlice";
export default function SingleProduct() {
  const prod = useSelector(loadedProducts);
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  function isProduct(product) {
    return product.id == id;
  }
  const { title, image, price, category, description } = prod?.find(isProduct);
  const handleAddtoCart = () => {
    dispatch(addToCart({ id, title, image, price, cartQuantity: quantity }));
  };

  const handleQuantity = (dir) => {
    if (dir === "inc") {
      setQuantity(quantity + 1);
    } else {
      if (quantity === 1) {
        return;
      }
      setQuantity(quantity - 1);
    }
  };

  return (
    <Layout>
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt={title}
              class="lg:w-1/3 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={image}
            />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 class="uppercase text-sm title-font text-gray-500 tracking-widest">
                {category}
              </h2>
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1  capitalize">
                {title}
              </h1>

              <p class="leading-relaxed">{description}</p>

              <p class="title-font font-medium text-2xl text-gray-900">
                $ {price}
              </p>
              <div class="flex my-4">
                <div className="flex items-center space-x-2">
                  <AiOutlineMinus
                    onClick={() => handleQuantity("dec")}
                    className="h-6 w-6"
                  />
                  <p className="text-lg">{quantity}</p>
                  <AiOutlinePlus
                    onClick={() => handleQuantity("inc")}
                    className="h-6 w-6`"
                  />
                </div>

                <button
                  onClick={handleAddtoCart}
                  class="flex ml-auto text-white bg-primary border-0 py-2 px-6 focus:outline-none  rounded font-semibold hover:scale-95 transition-all ease-in-out duration-200"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Layout>
  );
}
