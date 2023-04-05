import React from "react";
import faqboy from "../images/faqboy.png";
import Footer from "../components/Footer";
import Navbar from '../components/Navbar';

export default function Help() {
  return (
    <div >
      <Navbar/>
    <form className="space-y-6" action="#" method="POST">
      <div className="bg-gradient-to-r from-[#565637] to-[#213124] px-4 py-20 shadow min-h-screen  ">
        <div className="md:grid md:grid-cols-3 md:gap-6 mr-10">
          <div className="md:col-span-1 relative px-20">
            <img className=" object-cover w-72" src={faqboy} alt="" />
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0 ">
            <h3 className="text-lg font-medium  leading-6 text-[#d7dad1] font-sans">
              CONTACT US
            </h3>
            <p className="mt-1 text-sm text-neutral-300 pt-3 font-semibold ">
              we'll be reaching back to you via mail.
            </p>

            <div className="grid grid-cols-6 gap-6 pt-7">
              <div className="col-span-6 sm:col-span-3  ">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-300 py-2"
                >
                  First name
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-neutral-200"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-gray-300 py-2"
                >
                  Last name
                </label>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-neutral-200"
                />
              </div>

              <div className="col-span-6 sm:col-span-4">
                <label
                  htmlFor="email-address"
                  className="block text-sm font-medium text-gray-300 py-2"
                >
                  Email address
                </label>
                <input
                  type="text"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-neutral-200"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-300 py-2"
                >
                  State
                </label>
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-neutral-200 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm text-gray-600 font-semibold"
                >
                  <option>Karnataka</option>
                  <option>Outside Karnataka</option>
                </select>
              </div>

              <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-300 py-2"
                >
                  Phone number
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="address-level2"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-neutral-200"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="about"
                className="block text-sm font-medium col-span-6 pt-5 text-gray-300 py-2"
              >
                Description
              </label>
              <div className="mt-1">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-neutral-200"
                  placeholder="Brief description of your concern"
                  defaultValue={""}
                />
              </div>
              <p className="mt-2 text-sm text-gray-300">0-50 words</p>
            </div>
            <div className="flex justify-end  px-4 ">
              <button
                type="button"
                className="rounded-md border border-gray-300 bg-neutral-200 py-2 px-4 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-[#9d9d7e] py-2 px-10 text-sm font-medium text-gray-800 shadow-sm hover:bg-[#d7dad1] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2  "
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </form><Footer />
    </div>
  );
}
