import React from 'react'
import { Copy, ArrowRight } from 'lucide-react'

export function FeatureOne() {
  return (
    <div className="px-2 py-2 md:px-6 md:py-10">
      <h1 className="text-2xl font-bold capitalize text-black lg:text-3xl">
        DevUI Makes Your Work Easier
      </h1>
      <p className="my-2 text-gray-600">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
      </p>
      <hr />
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-3 xl:gap-16">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="space-y-3">
            <span className="inline-block rounded-full bg-gray-100 p-3 text-black">
              <Copy size={20} />
            </span>
            <h1 className="text-xl font-semibold capitalize text-black">Copy & paste components</h1>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod
              dignissimos vel non corrupti doloribus voluptatum eveniet
            </p>
            <a
              href="#"
              className="-mx-1 inline-flex transform items-center text-sm font-semibold capitalize text-black transition-colors duration-300 hover:underline"
            >
              <span className="mx-1">read more</span>
              <ArrowRight size={16} />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
