import React from 'react'
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "./../images/logo.png";
import { Link } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import {useScrollPosition} from "../hooks/useScrollPosition";
import { Popover } from '@headlessui/react' 

const navigation = [
  { name: "Home", href: "/" },
  { name: "Kiosk", href: "/kiosk" },
  { name: "About us", href: "/about" },
  { name: "Help", href: "/help" },
];

export const Kiosk = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollPosition = useScrollPosition();
  console.log(scrollPosition);
  return (
    
    <div className="sticky top-0 z-20">
       <Popover
      className={classNames(
        scrollPosition > 0 ? 'shadow' : 'shadow-none',
        'sticky top-0 z-20 bg-opacity-90 bg-[#d7dad1] transition-shadow',
      )} >
 
    <nav
          className="flex items-center justify-between py-4 mx-8 drop-shadow-xl "
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
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
          <div className="hidden lg:flex lg:gap-x-12 font-semibold text-gray-900">
            {navigation.map((item) => (
              <Link to={item.href} className="hover:text-[#51482c]">
                {item.name}{" "}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end rounded-lg">
            <a href="#" className="text-sm font-semibold leading-6 text-[#51482c]">
              <span aria-hidden="true">
                <select className="rounded-lg border-transparent bg-neutral-300 bg-opacity-25">
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
        </Popover>
    </div>
  )
}

export default Kiosk
