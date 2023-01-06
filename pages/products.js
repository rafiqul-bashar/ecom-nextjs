import React from "react";
import { Footer } from "../components";
import Layout from "../components/Layout";

function limit(string = "", limit = 0) {
  return string.substring(0, limit);
}
export default function Products({ products }) {
  const categoriesNames = [...new Set(products.map((p) => p.category))];

  const [productsToShow, setProductsToShow] = React.useState("all");
  const [productsInShow, setProductsInShow] = React.useState([]);

  React.useEffect(() => {
    if (productsToShow === "all") {
      setProductsInShow(products);
    } else {
      const matchProducts = products.filter(
        (el) => el.category === productsToShow
      );
      setProductsInShow(matchProducts);
    }
  }, [productsToShow]);

  const handleOnClick = () => {
    navigate();
  };

  return (
    <Layout>
      <div className="grid grid-cols-3">
        <aside className="h-screen overflow-auto text-left col-span-1 bg-gray-100 ">
          <nav className="space-y-8 text-sm">
            <div className="space-y-2 ">
              <h2 className="text-x font-semibold tracking-wider uppercase ">
                Catagories
              </h2>
              <div className="flex flex-col space-y-1">
                <div>
                  <h2
                    onClick={() => {
                      setProductsToShow("all");
                    }}
                    className="text-sm cursor-pointer py-2 capitalize"
                  >
                    All Products
                  </h2>
                </div>
                {categoriesNames.map((categoryName) => (
                  <div key={categoryName}>
                    {products.find((p) => p.category === categoryName) && (
                      <div>
                        <h2
                          onClick={() => {
                            setProductsToShow(categoryName);
                          }}
                          className="text-sm cursor-pointer py-4 capitalize"
                        >
                          {categoryName}
                        </h2>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </nav>
        </aside>
        <div className="h-screen py-4 overflow-auto bg-gray-100 col-span-2">
          <div className="grid grid-cols-3 md:grid-cols-4 gap-6">
            {productsInShow?.map((product) => (
              // <ProductCard key={product.id} {...product} />
              <div className="py-4" key={product?.id}>
                <img
                  src={product?.image}
                  alt={product?.title}
                  className="h-12 w-12 mx-auto "
                />
                <h2 className="text-xs clip mx-auto ">
                  {limit(product?.title, 18) + "..."}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}

export async function getServerSideProps() {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (response) => response.json()
  );
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
