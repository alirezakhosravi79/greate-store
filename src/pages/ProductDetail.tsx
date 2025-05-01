import { useParams } from "react-router-dom";
import Button from "../components/Button";
import { useEffect, useState } from "react";
import { getSingleProduct } from "../services/api";
import { Productstype } from "../types/service";
import { useCartContext } from "../context/CartContext";

function ProductDetail() {
  const params = useParams<{ id: string }>();

  const [oneProduct, getOneProduct] = useState<Productstype>();

  const { addToCart, cartItems, handleDecrese, getProductQty, handleRemove } =
    useCartContext();

  console.log(cartItems);

  useEffect(() => {
    getSingleProduct(params.id as string).then((data) => {
      getOneProduct(data);
    });
  }, []);

  return (
    <div className="container mx-auto my-6 px-4">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Product Image Section */}
        <div className="md:col-span-4 lg:col-span-3 bg-purple-300 rounded-lg shadow-lg overflow-hidden">
          <div className="p-4">
            <img
              className="w-55 mx-auto md:w-full h-auto rounded-md object-cover"
              src={oneProduct?.image}
              alt="Product"
            />
          </div>
          <div className="p-4 ">
            {getProductQty(parseInt(params.id as string)) === 0 ? (
              <Button
                onClick={() => addToCart(parseInt(params.id as string))}
                className="bg-purple-700 text-white w-full py-3 rounded-lg
               hover:bg-black hover:text-white transition-all duration-300
              focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                Add to Cart
              </Button>
            ) : (
              <>
              
              <div className="grid grid-cols-3 items-center ">
                              <Button
                onClick={() => addToCart(parseInt(params.id as string))}
                className="bg-purple-700 mt-3 text-white w-full py-3 rounded-lg
               hover:bg-black hover:text-white transition-all duration-300
              focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                +
              </Button>

                <span className="flex items-center justify-center bg-white text-black rounded-full p-2 mx-3"> {getProductQty(parseInt(params.id as string))}</span>

                <Button
                  onClick={() => handleDecrese(parseInt(params.id as string))}
                  className="bg-purple-700 mt-3 text-white w-full py-3 rounded-lg
               hover:bg-black hover:text-white transition-all duration-300
              focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  -
                </Button>
              </div>
              <Button
                onClick={() => handleRemove(parseInt(params.id as string))}
                className="bg-red-500 text-white w-full py-3 rounded-lg
               hover:bg-red-700 hover:text-white transition-all duration-300
              focus:outline-none focus:ring-2 focus:ring-white my-2"
              >
                Remove
              </Button>

              </>
            )}

          </div>
        </div>

        {/* Product Info Section */}
        <div className="md:col-span-8 lg:col-span-9 p-6 bg-gray-800 rounded-lg">
          <h1 className="text-2xl font-bold text-white mb-4">
            {oneProduct?.title}
          </h1>
          <h2 className="text-xl text-purple-300 mb-4">
            Price: ${oneProduct?.price}
          </h2>
          <p className="text-gray-300 mb-4"> {oneProduct?.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
