function About() {
    return (
      <div className="container mx-auto px-4 py-10">
        <div className="bg-gray-900 rounded-lg shadow-lg p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-purple-400 mb-6 text-center underline">
            About Us
          </h1>
          
          <p className="text-gray-300 mb-4 leading-relaxed text-justify">
            Welcome to our store! We are passionate about delivering the best products 
            with top-tier quality and a seamless shopping experience. Our journey began 
            with a simple idea: to combine style, convenience, and trust in one place.
          </p>
  
          <p className="text-gray-300 mb-4 leading-relaxed text-justify">
            Over the years, we’ve grown into a dedicated team committed to excellence. 
            Whether it’s clothing, accessories, or home essentials — we handpick each item 
            to ensure it meets our high standards.
          </p>
  
          <p className="text-gray-300 mb-4 leading-relaxed text-justify">
            Customer satisfaction is at the core of everything we do. With fast shipping, 
            secure checkout, and friendly support, we’re here to make your shopping easy 
            and enjoyable.
          </p>
  
          <div className="mt-8 text-center">
            <h2 className="text-xl font-semibold text-white mb-2">
              Thank you for being part of our story.
            </h2>
            <p className="text-purple-300">— The DreamStore Team 💜</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default About;
  