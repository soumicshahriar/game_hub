const Newsletter = () => {
  return (
    <section className="bg-[#004953] text-white py-12 pb-5 mt-10 rounded-lg shadow-lg text-center shadow-[#0eb7cd]">
      <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
      <p className="mb-6 text-gray-200">
        Stay updated with the latest indie game releases, updates, and special
        offers.
      </p>
      <form className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-lg mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          required
          className="px-4 py-2 w-full rounded-md text-gray-100 focus:outline-2 outline-amber-300"
        />
        <button
          type="submit"
          className="bg-[#075b66] hover:bg-[#087d8c] px-6 py-2 rounded-md font-semibold"
        >
          Subscribe
        </button>
      </form>
      <p className="mt-4 text-sm text-gray-300">
        We respect your privacy — unsubscribe anytime.
      </p>
    </section>
  );
};

export default Newsletter;
