// import { useContext } from "react";
import Button from "../components/Button";
import CartItem from "../components/CartItem";
import {  useCartContext } from "../context/CartContext";

function Cart() {
  //6-2 greftan value from custom hoook
  const {cartItems } = useCartContext()

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="bg-gray-900 rounded-2xl shadow-lg p-6 sm:p-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-purple-400 text-center mb-8">
          Your Shopping Cart
        </h1>

        <div className="space-y-6">
          {
            cartItems.map((item) => (
              <CartItem {...item}/>

            ))
          }
        </div>

        <div className="bg-gray-800 mt-10 rounded-xl p-6 text-white space-y-3 text-lg sm:text-xl">
          <div className="flex justify-between">
            <span>Total Price:</span>
            <span>$4000</span>
          </div>
          <div className="flex justify-between">
            <span>Discount:</span>
            <span>$0</span>
          </div>
          <div className="flex justify-between font-bold text-purple-300 text-xl">
            <span>Final Price:</span>
            <span>$4000</span>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Button
            className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 text-lg rounded-xl 
              transition duration-300 focus:outline-none focus:ring-4 focus:ring-purple-500/50"
          >
            Check Out
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Cart;
