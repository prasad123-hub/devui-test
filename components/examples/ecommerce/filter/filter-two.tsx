import React from 'react'
import { ChevronDown, Filter, LayoutGrid, Plus } from 'lucide-react'

export function FilterTwo() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-2 py-10 lg:px-10">
        {/* Top */}
        <div className="md:flex md:flex-row md:items-start md:justify-between">
          <h1 className="text-xl font-bold">Products</h1>
          <div className="mt-6 flex items-center  pt-2 md:mt-0 md:space-x-4  md:pt-0">
            <button
              type="button"
              className="hidden items-center rounded-md px-3 py-2 text-sm font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:inline-flex"
            >
              Sort <ChevronDown className="ml-2 h-4 w-4" />
            </button>
            <button
              type="button"
              className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:hidden"
            >
              Category <ChevronDown className="ml-2 h-4 w-4" />
            </button>
            <button
              type="button"
              className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:hidden"
            >
              Color <ChevronDown className="ml-2 h-4 w-4" />
            </button>
            <button
              type="button"
              className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:hidden"
            >
              Size <ChevronDown className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
        <hr className="my-8" />
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-6">
          <div className="hidden space-y-6 divide-y lg:col-span-3 lg:block">
            <div>
              <ul className="space-y-2">
                <li className="cursor-pointer font-medium">Sneakers</li>
                <li className="cursor-pointer font-medium">Running Shoes</li>
                <li className="cursor-pointer font-medium">Mens shoes</li>
                <li className="cursor-pointer font-medium">Women shoes</li>
                <li className="cursor-pointer font-medium">Sandals</li>
              </ul>
            </div>
            <div className="flex items-center justify-between pt-4">
              <h6 className="font-semibold">Color</h6>
              <span className="block cursor-pointer">
                <Plus className="h-4 w-4" />
              </span>
            </div>
            <div className="flex items-center justify-between pt-4">
              <h6 className="font-semibold">Size</h6>
              <span className="block  cursor-pointer">
                <Plus className="h-4 w-4" />
              </span>
            </div>
          </div>
          <div className="h-[300px] w-full rounded-lg border-2 border-dashed px-2 lg:col-span-9 lg:min-h-min"></div>
        </div>
      </div>
    </section>
  )
}
