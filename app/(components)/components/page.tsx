import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { applicationComponentData } from '@/config/data'

export default async function IndexPage() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-4">
        {/* Application UI Components */}
        <div className="flex flex-col pb-10 lg:flex-row lg:space-x-10">
          <div className="lg:w-[30%]">
            <Image src="/woman-with-a-laptop.svg" height={100} width={250} alt="WomenWithLaptop" />
            <h1 className="mt-4 font-heading text-2xl font-bold md:text-3xl">
              Application UI components
            </h1>
            <p className="mt-4 font-sans text-sm font-semibold text-gray-600">
              Explore our Application UI components, designed for crafting dynamic web applications
              with versatile interface elements.
            </p>
          </div>
          {/* <div className="hidden min-h-max w-[.5px] bg-black/20 lg:block"></div> */}
          <div className="mt-10 w-full lg:mt-0 lg:w-[70%]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-4 lg:gap-y-4">
              {applicationComponentData.map((component) => (
                <div key={component.title} className="rounded-md p-2 hover:bg-gray-100/50">
                  <Link href={`/components/${component.href}`}>
                    <div className="rounded-t-md border border-gray-200 bg-white">
                      <Image
                        src={component.img}
                        height={100}
                        width={200}
                        alt={component.title}
                        className="w-full rounded-md object-cover"
                      />
                      <hr />
                      <p className="mt-2 p-2 pt-0 text-sm font-semibold text-gray-600">
                        {component.title} components
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <hr className="h-[2px] w-full bg-black" />
        {/* Marketing Components */}
        <div className="flex flex-col md:py-12 lg:flex-row lg:space-x-10 lg:py-14">
          <div className="lg:w-[30%]">
            <Image src="/woman-with-a-gift.svg" height={100} width={250} alt="WomenWithLaptop" />
            <h1 className="mt-4 font-heading text-2xl font-bold md:text-3xl">
              Marketing components
            </h1>
            <p className="mt-4 font-sans text-sm font-semibold text-gray-600">
              Explore our Marketing components, designed for crafting dynamic web applications with
              versatile interface elements.
            </p>
          </div>
          <div className="hidden min-h-max w-[.5px] bg-black lg:block"></div>
          <div className=" mt-10 bg-yellow-300 lg:mt-0 lg:w-[70%]">
            <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="h-20 w-full bg-black"></div>
              <div className="h-20 w-full bg-black"></div>
              <div className="h-20 w-full bg-black"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
