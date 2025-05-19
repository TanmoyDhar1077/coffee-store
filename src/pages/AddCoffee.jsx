import React from "react";
import useTitle from "../hooks/useTitle";
import { IoMdArrowBack } from "react-icons/io";
import bg from "../assets/images/more/11.png";
import { Link } from "react-router";
import Swal from "sweetalert2";

const AddCoffee = () => {
  useTitle("Add Coffee");
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData.entries());
    console.log(newCoffee);
    fetch("http://localhost:3000/coffees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Coffee Added Successfully",
            icon: "success",
            draggable: true,
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      });
  };
  return (
    <section
      className="bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <Link
          to="/"
          className="flex items-center text-[#374151] gap-2 py-8 md:py-12"
        >
          <IoMdArrowBack size={24} className="md:size-6" />
          <span className="text-xl md:text-2xl lg:text-3xl text-shadow-lg">
            Back To Home
          </span>
        </Link>

        <div className="py-8 md:py-12 px-4 md:px-8 lg:px-20 bg-[#F4F3F0] rounded-md shadow-md">
          <h2 className="text-2xl md:text-4xl lg:text-[45px] text-center font-bold text-[#374151] text-shadow-lg mb-4 md:mb-8">
            Add New Coffee
          </h2>
          <p className="raleway text-center text-[#1B1A1AB2]/70 text-base md:text-lg leading-relaxed">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
          {/* Form Starts Here */}
          <form onSubmit={handleAddCoffee} className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Column 1 */}
              <fieldset className="space-y-4">
                <div>
                  <label className="text-lg font-semibold raleway text-[#1B1A1A]/80">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="input raleway w-full"
                    placeholder="Enter coffee name"
                  />
                </div>
                <div>
                  <label className="text-lg font-semibold raleway text-[#1B1A1A]/80">
                    Price
                  </label>
                  <input
                    type="number"
                    name="price"
                    className="input raleway w-full"
                    placeholder="Enter coffee price"
                  />
                </div>
                <div>
                  <label className="text-lg font-semibold raleway text-[#1B1A1A]/80">
                    Supplier
                  </label>
                  <input
                    type="text"
                    name="supplier"
                    className="input raleway w-full"
                    placeholder="Enter coffee supplier"
                  />
                </div>
              </fieldset>

              {/* Column 2 */}
              <fieldset className="space-y-4">
                <div>
                  <label className="text-lg font-semibold raleway text-[#1B1A1A]/80">
                    Quantity
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    className="input raleway w-full"
                    placeholder="Enter coffee quantity"
                  />
                </div>
                <div>
                  <label className="text-lg font-semibold raleway text-[#1B1A1A]/80">
                    Taste
                  </label>
                  <input
                    type="text"
                    name="taste"
                    className="input raleway w-full"
                    placeholder="Enter coffee taste"
                  />
                </div>
                <div>
                  <label className="text-lg font-semibold raleway text-[#1B1A1A]/80">
                    Details
                  </label>
                  <input
                    type="text"
                    name="details"
                    className="input raleway w-full"
                    placeholder="Enter coffee details"
                  />
                </div>
              </fieldset>

              {/* Full width field */}
              <fieldset className="md:col-span-2">
                <label className="text-lg font-semibold raleway text-[#1B1A1A]/80">
                  Photo URL
                </label>
                <input
                  type="text"
                  name="photo"
                  className="input raleway w-full mt-2"
                  placeholder="Enter photo URL"
                />
              </fieldset>
            </div>
            {/* Button */}
            <div className="text-center mt-8">
              <button
                type="submit"
                className="w-full bg-[#D2B48C] hover:bg-[#c8a877] transition duration-200 text-xl md:text-2xl font-semibold rounded-md border-2 border-black p-2"
              >
                Add Coffee
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddCoffee;
