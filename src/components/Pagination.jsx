import React from 'react'
import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/20/solid'

export default function Pagination()  {
  return (
    <div><nav className="flex items-center justify-between border-t border-neutral-500 px-4 sm:px-0">
    <div className="-mt-px flex w-0 flex-1 ">
      <a
        href="#"
        className="inline-flex items-center  border-t-2 text-neutral-400 border-transparent pt-4 pr-1 text-sm font-medium  hover:border-gray-300 hover:text-neutral-300"
      >
        <ArrowLongLeftIcon className="mr-3 h-5 w-5 text-neutral-400" aria-hidden="true" />
        Previous
      </a>
    </div>
    <div className="hidden md:-mt-px md:flex">
      <a
        href="#"
        className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-neutral-400 hover:border-gray-300 hover:text-neutral-300"
      >
        1
      </a>
      {/* Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-neutral-300 hover:border-gray-300" */}
      <a
        href="#"
        className="inline-flex items-center border-t-2  border-green-300 px-4 pt-4 text-sm font-medium text-green-300"
        aria-current="page"
      >
        2
      </a>
      <a
        href="#"
        className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-neutral-400 hover:border-gray-300 hover:text-neutral-300"
      >
        3
      </a>
      <span className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-neutral-400">
        ...
      </span>
      <a
        href="#"
        className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-neutral-400 hover:border-gray-300 hover:text-neutral-300"
      >
        8
      </a>
      <a
        href="#"
        className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-neutral-400 hover:border-gray-300 hover:text-neutral-300"
      >
        9
      </a>
      <a
        href="#"
        className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-neutral-400 hover:border-gray-300 hover:text-neutral-300"
      >
        10
      </a>
    </div>
    <div className="-mt-px flex w-0 flex-1 justify-end">
      <a
        href="#"
        className="inline-flex items-center border-t-2 border-transparent pt-4 pl-1 text-sm font-medium text-neutral-400 hover:border-gray-300 hover:text-neutral-300"
      >
        Next
        <ArrowLongRightIcon className="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
      </a>
    </div>
  </nav></div>
  )
}
