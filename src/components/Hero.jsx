import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "./../images/logo.png";
import { Link } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Kiosk", href: "/kiosk" },
  { name: "About us", href: "/about" },
  { name: "Help", href: "/help" },
];

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative isolate overflow-hidden bg-black">
      <img
        src="https://images.unsplash.com/photo-1534801425708-1c57ee8a2fc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-70 "
      />

      <div className="px-6 lg:px-8">
        <nav
          className="flex items-center justify-between pt-6"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">skeosk</span>
              <img className="h-8" src={logo} alt="" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12 font-semibold text-[#d7dad1]">
            {navigation.map((item) => (
              <Link to={item.href} className="hover:text-yellow-100">
                {item.name}{" "}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end rounded-lg ">
            <a href="#" className="text-sm font-semibold leading-6 text-black">
              <span aria-hidden="true">
                <select className="rounded-lg border-transparent bg-neutral-300 max-h-10 pt-1 pb-1 bg-opacity-95">
                  <option>English</option>
                  <option>Kannada</option>
                  <option>Hindi</option>
                </select>
              </span>
            </a>
          </div>
        </nav>
        <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <Dialog.Panel
            focus="true"
            className="fixed inset-0 z-10 overflow-y-auto bg-[#042f2e] bg-opacity-90 px-6 py-6 lg:hidden"
          >
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">skeosk</span>
                <img className="h-8" src={logo} alt="" />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/25">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      to={item.href}
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-300 hover:bg-gray-400/10"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6"></div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              <h1 class="font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-[#9d9d7e] to-[#c6d0d0]">
                DISCOVER YOUR SCHEME
              </h1>
            </h1>
            <p className="mt-6 text-lg leading-10 text-[#d7dad1]  font-normal  bg-opacity-40 text-shadow-lg  rounded-lg">
              Dedicated to providing villagers in India with detailed
              information about the various government schemes and programs that
              can help empower your village.
            </p>
            <div className="mt-7 flex lg:flex-row flex-col items-center justify-center gap-x-6 ">
              <div className="hover:scale-110 mt-3 ">
                <label htmlFor="search" className="sr-only ">
                  Search
                </label>
                <div className="relative rounded-md shadow-sm">
                  <div
                    className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 "
                    aria-hidden="true"
                  >
                    <MagnifyingGlassIcon
                      className="mr-3 h-4 w-4 text-gray-500 "
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    type="text"
                    name="search"
                    id="search"
                    className="block w-full rounded-md  bg-neutral-300 bg-opacity-80   pl-11 focus:border-neutral-300 focus:ring-[#51482c] sm:text-sm"
                    placeholder="Search"
                  />
                </div>
              </div>
              <a
                href="/kiosk"
                className="rounded-md mt-3 bg-lime-950 px-3.5  py-1.5 text-base font-semibold leading-7 text-neutral-300 shadow-sm hover:bg-[#9d9d7e]  hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 "
              >
                <button className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-white rounded hover:bg-white group"></button>
                Browse government schemes
              </a>

              <a
                href="/about"
                className="text-base mt-3 font-semibold leading-7 text-[#d7dad1] hover:text-[#b1a8a3]"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <svg
          className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
            fillOpacity=".2"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
