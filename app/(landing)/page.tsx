import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/icons'
import { Feature } from '@/types'
import Link from 'next/link'

export default async function IndexPage() {
  return (
    <>
      <section aria-labelledby="hero-banner">
        <div className="mx-auto flex flex-col items-start gap-4 px-6 pb-8 md:pb-12 lg:w-[52rem] lg:px-0 lg:pb-24">
          <Image
            src="/hero.svg"
            alt="Hero"
            width={250}
            height={100}
            className="rounded-lg md:mt-10"
          />
          <h1 className="font-heading text-3xl font-bold leading-[1.1] md:text-5xl lg:text-7xl">
            Ship websites faster with DevUI component library
          </h1>
          <p className="max-w-[42rem] leading-normal text-slate-700 sm:text-xl sm:leading-8">
            DevUI is a comprehensive and easy-to-use open-source UI component library ( powered by{' '}
            <strong>TailwindCSS</strong>) designed to enhance your productivity as a developer{' '}
          </p>
          <div className="mt-2 flex space-x-2">
            <Link href="/components">
              <Button variant={'default'} className="bg-black text-white">
                View Components
              </Button>
            </Link>
            {/* <Button variant={'outline'}>Github</Button> */}
          </div>
        </div>
      </section>
      {/* FEATURES */}
      <hr className="w-full bg-black" />
      <section aria-label="features">
        <div className="mx-auto flex flex-col items-start gap-4 px-6 py-8 md:py-12 lg:w-[62rem] lg:px-0 lg:py-24">
          <h2 className="font-heading text-3xl font-bold leading-[1.1] md:text-5xl">Features</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-md border bg-gray-100 p-3">
                <div className="flex h-full flex-col gap-4 rounded-md bg-black p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-gray-200">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-100">{feature.title}</h3>
                  <p className="font-sans text-sm font-medium text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <hr className="w-full bg-black" />
      {/* OPENSOURCE */}
      <section aria-labelledby="open-source">
        <div className="mx-auto flex flex-col items-start gap-4 px-6 py-8 md:py-12 lg:w-[52rem] lg:px-0">
          <Image
            src="/communication.svg"
            alt="Developers"
            width={250}
            height={100}
            className="rounded-lg md:mt-10"
          />
          <h1 className="font-heading text-2xl font-bold leading-[1.1] md:text-4xl lg:text-6xl">
            Made by Developers for the Community
          </h1>
          <p className="max-w-[42rem] leading-normal text-slate-700 sm:text-xl sm:leading-8">
            Our library offers meticulously designed components, curated by developers, to
            accelerate the creation of visually stunning and fully functional interfaces.
          </p>
          <div className="mt-2 flex space-x-2">
            <Link href="/components">
              <Button variant={'outline'}>Start Building</Button>
            </Link>
          </div>
        </div>
      </section>
      <hr className="w-full bg-black" />
    </>
  )
}

const features: Feature[] = [
  {
    title: 'Customizable',
    description:
      'DevUI components are designed to be highly customizable and extendable. You can easily change the styles of the components to match your brand or product.',
    icon: <Icons.customisable />,
  },
  {
    title: 'Responsive design',
    description:
      'All of the components are designed with responsiveness in mind, so you can be confident that your interfaces will look great on any device.',
    icon: <Icons.responsive />,
  },
  {
    title: 'Easy integration',
    description:
      'DevUI is designed to integrate seamlessly with your existing projects, allowing you to get up and running quickly.',
    icon: <Icons.integrations />,
  },
  {
    title: 'Copy to clipboard',
    description:
      'With DevUI, you can easily copy the code for any component directly to your clipboard, saving you time and effort.',
    icon: <Icons.copy />,
  },
  {
    title: 'Constantly updated',
    description:
      'DevUI is constantly updated by a community of developers, meaning that you can rely on the library to stay up-to-date with the latest design trends and best practices.',
    icon: <Icons.update />,
  },
  {
    title: 'Free and open-source',
    description:
      'DevUI is free to use, and its open-source nature means that you can contribute to the library and help make it even better.',
    icon: <Icons.free />,
  },
]
