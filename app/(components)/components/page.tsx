import Image from 'next/image'

export default async function IndexPage() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-10 py-10 md:px-0">
        {/* Application UI Components */}
        <div className="flex flex-col md:py-12 lg:flex-row lg:space-x-10 lg:py-14">
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
          <div className="hidden min-h-max w-[.5px] bg-black lg:block"></div>
          <div className=" mt-10 bg-yellow-300 lg:mt-0 lg:w-[70%]">
            <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="h-20 w-full bg-black"></div>
              <div className="h-20 w-full bg-black"></div>
              <div className="h-20 w-full bg-black"></div>
              <div className="h-20 w-full bg-black"></div>
              <div className="h-20 w-full bg-black"></div>
              <div className="h-20 w-full bg-black"></div>
              <div className="h-20 w-full bg-black"></div>
              <div className="h-20 w-full bg-black"></div>
              <div className="h-20 w-full bg-black"></div>
              <div className="h-20 w-full bg-black"></div>
              <div className="h-20 w-full bg-black"></div>
              <div className="h-20 w-full bg-black"></div>
              <div className="h-20 w-full bg-black"></div>
              <div className="h-20 w-full bg-black"></div>
              <div className="h-20 w-full bg-black"></div>
              <div className="h-20 w-full bg-black"></div>
              <div className="h-20 w-full bg-black"></div>
              <div className="h-20 w-full bg-black"></div>
              <div className="h-20 w-full bg-black"></div>
              <div className="h-20 w-full bg-black"></div>
              <div className="h-20 w-full bg-black"></div>
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
