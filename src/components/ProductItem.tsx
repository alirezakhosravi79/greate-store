import { Productstype } from "../types/service";

type TProductItem = Productstype

function ProductItem({ title, image, price, description }: TProductItem) {
  return (
    <div
      className="text-black px-6 py-4 container shadow-md border-2 border-dotted
    mt-5 border-white rounded-md bg-purple-600"
    >
      <img className="rounded-t h-34 w-30 mx-auto" src={image} alt="" />
      <div className="  text-center p-4">
        <h2 className="text-black font-bold">{title}</h2>
      </div>
      <div className="flex justify-between">
        <span className="text-black text-center font-bold">Price: </span>
        <span className="text-black text-center font-bold"> {price}$</span>
      </div>

      <div>
        <p className="mx-4 text-center my-4 line-clamp-2">{description}</p>
      </div>
      <div className="ml-18 mt-4">
        <button className="px-2 py-2 rounded-md bg-white text-black hover:bg-black hover:text-purple-300 transition-all">
          ADD TO CART
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
