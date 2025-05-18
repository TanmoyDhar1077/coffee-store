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
      <div className="w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center text-shadow-lg/20 text-[#374151] gap-2 py-12"
        >
          <IoMdArrowBack size={30} />
          <span className="text-3xl"> Back To Home</span>
        </Link>
        <div className="py-[70px] px-[112px] bg-[#F4F3F0]">
          <h2 className="text-[45px] text-center font-bold text-[#374151] text-shadow-lg/20 mb-8">
            Add New Coffee
          </h2>
          <p className="raleway text-center text-[#1B1A1AB2]/70 text-lg">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
          <form onSubmit={handleAddCoffee} className="mt-8">
            <div className="grid">
              <fieldset className="fieldset col-span-1 border-base-300 rounded-box w-full px-4">
                <label className="text-xl raleway text-[#1B1A1A]/80">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="input raleway w-full"
                  placeholder="Enter coffee supplier"
                />

                <label className="text-xl raleway text-[#1B1A1A]/80">
                  Category
                </label>
                <input
                  type="text"
                  name="category"
                  className="input raleway w-full"
                  placeholder="Enter coffee category "
                />

                <label className="text-xl raleway text-[#1B1A1A]/80">
                  Supplier
                </label>
                <input
                  type="text"
                  name="supplier"
                  className="input raleway w-full"
                  placeholder="Enter coffee supplier"
                />
              </fieldset>
              <fieldset className="fieldset border-base-300 rounded-box col-span-1 px-4">
                <label className="text-xl raleway text-[#1B1A1A]/80">
                  Quantity
                </label>
                <input
                  type="number"
                  name="quantity"
                  className="input raleway w-full"
                  placeholder="Enter coffee chef"
                />

                <label className="text-xl raleway text-[#1B1A1A]/80">
                  Taste
                </label>
                <input
                  type="text"
                  name="taste"
                  className="input raleway w-full"
                  placeholder="Enter coffee taste"
                />

                <label className="text-xl raleway text-[#1B1A1A]/80">
                  Details
                </label>
                <input
                  type="text"
                  name="details"
                  className="input raleway w-full"
                  placeholder="Enter coffee details"
                />
              </fieldset>
              <fieldset className="fieldset border-base-300 rounded-box w-full col-span-2 px-4">
                <label className="text-xl raleway text-[#1B1A1A]/80">
                  Photo URL
                </label>
                <input
                  type="text"
                  name="photo"
                  className="input raleway w-full"
                  placeholder="Photo URL"
                />
              </fieldset>
              <button className="bg-[#D2B48C] text-2xl rounded-sm border-2 border-black cursor-pointer col-span-2 py-3.25 mt-6 mx-4">
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
