import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import {
  applicationComponentData,
  marketingComponentData,
  ecommerceComponentData,
} from '@/config/data'

export default async function IndexPage() {
  return (
    <>
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="flex flex-col pb-10">
          <div className="">
            <Image src="/paper-documents.svg" height={100} width={250} alt="PaperDocuments" />
            <h1 className="mt-8 font-heading text-2xl font-bold md:text-3xl">Page Examples</h1>
            <p className="mt-4 font-sans text-lg font-medium text-gray-600">
              Explore our Page Examples, designed for crafting dynamic web applications with
              versatile interface elements.
            </p>
          </div>
          <hr className="my-10" />
          <div className="w-full">
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
      </div>
    </>
  )
}
