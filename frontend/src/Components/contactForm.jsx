// ContactForm.js
const ContactForm = () => {
  return (
    <div className="bg-white text-center py-12 -mt-10 ">
      <h2 className="text-xl md:text-2xl font-bold mb-4">
        Schedule a call with <span className="font-semibold">management team</span> for more information
      </h2>

      {/* Form */}
      <form className="flex flex-col justify-center items-center gap-4 mt-6">
        
        {/* Input Fields Container */}
        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto justify-center">
          <input
            type="text"
            placeholder="Name"
            className="border border-gray-300 p-3 rounded w-full md:w-auto md:flex-1"
          />
          <input
            type="text"
            placeholder="Contact"
            className="border border-gray-300 p-3 rounded w-full md:w-auto md:flex-1"
          />
          <input
            type="email"
            placeholder="Email ID"
            className="border border-gray-300 p-3 rounded w-full md:w-auto md:flex-1"
          />
        </div>

        {/* Submit Button on New Line */}
        <div className="mt-4">
          <button className="bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 transition w-full md:w-auto">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
