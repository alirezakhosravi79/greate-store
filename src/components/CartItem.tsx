import { useEffect, useState } from "react";
import Button from "./Button";
import { getSingleProduct } from "../services/api";
import { Productstype } from "../types/service";
import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

interface ICartItem {
  id: number;
  qty: number;
}

function CartItem({ id, qty }: ICartItem) {
  const { addToCart, handleRemove, handleDecrese } = useCartContext();

  const [product, setProduct] = useState<Productstype>();

  useEffect(() => {
    getSingleProduct(id).then((data) => {
      setProduct(data);
    });
  }, []);

  return (
    <div className="border-b pb-2">
      <div className="flex mt-4">
        <Link to={`/product/${id}`}>
          <img className="rounded w-30" src={product?.image} alt="" />
        </Link>
        <div className="ml-4 flex justify-center items-center gap-4">
          <h3 className="text-white">{product?.title}</h3>
          <Button
            onClick={() => addToCart(id)}
            className="text-center bg-gray-600 text-white px-2 text-xl rounded-md cursor-pointer"
          >
            +
          </Button>
          <span className="text-white">{qty}</span>
          <Button
            onClick={() => handleDecrese(id)}
            className="text-center bg-gray-600 text-white px-2 text-xl rounded-md cursor-pointer"
          >
            -
          </Button>
          <Button
            onClick={() => handleRemove(id)}
            className="text-center bg-red-600 text-white px-2 py-1 text-md rounded-md cursor-pointer"
          >
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
