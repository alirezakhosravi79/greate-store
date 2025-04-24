import { Link } from "react-router-dom";
import Button from "../components/Button";

function HomePage() {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[70vh] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/featured/?shopping')",
        }}
      >
        <div className="bg-black bg-opacity-60 p-6 sm:p-10 rounded-xl text-center max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-bold text-purple-400 mb-4">
            Welcome to Your Dream Store
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl mb-6">
            Find the best products at unbeatable prices. Shop smart. Live
            better.
          </p>
          <Link to="/store">
            <Button className="bg-purple-700 hover:bg-purple-800 transition px-6 py-3 rounded-lg text-white text-lg">
              Start Shopping
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 max-w-5xl mx-auto text-center space-y-12">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-purple-300 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-gray-400">
            We offer high-quality products from trusted brands. Our platform is
            fast, secure, and customer-friendly. Enjoy 24/7 support, fast
            shipping, and easy returns.
          </p>
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-purple-300 mb-4">
            Exclusive Offers
          </h2>
          <p className="text-gray-400">
            Don’t miss our seasonal discounts and special bundles. Save more
            while buying more!
          </p>
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-purple-300 mb-4">
            Your Satisfaction, Our Mission
          </h2>
          <p className="text-gray-400">
            Our customer-first policy ensures that you get the best experience
            possible with every purchase.
          </p>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="bg-purple-800 py-12 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">
          🔥 Flash Sale This Week!
        </h2>
        <p className="text-white mb-6">
          Up to 70% off on selected items. Limited time only!
        </p>
        <button className="bg-black hover:bg-gray-800 transition px-6 py-2 rounded-lg text-white text-lg">
          Explore Deals
        </button>
      </section>
    </div>
  );
}

export default HomePage;
