import Button from "./Button";

function CartItem() {
  return (
    <div className="border-b pb-2">
      <div className="flex mt-4">
        <img
          className="rounded w-30"
          src="https://images.hdqwalls.com/wallpapers/daredevil-fear-is-not-an-option-y5.jpg"
          alt=""
        />
        <div className="ml-4 flex justify-center items-center gap-4">
          <h3 className="text-white">product</h3>
          <Button className="text-center bg-gray-600 text-white px-2 text-xl rounded-md cursor-pointer">
            +
          </Button>
          <span className="text-white">0</span>
          <Button className="text-center bg-gray-600 text-white px-2 text-xl rounded-md cursor-pointer">
            -
          </Button>
          <Button className="text-center bg-red-600 text-white px-2 py-1 text-md rounded-md cursor-pointer">
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
