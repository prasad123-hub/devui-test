import { HeroBlock } from '@/components/hero-block'
import componentsArray from '@/app/api/ecommerce-components.json'
import { ProductOverviewOne, ProductOverviewTwo } from '@/components/examples/ecommerce/overview'
import { ExampleProps } from '@/types'

const overviewArray = componentsArray.filter((e) => e.category === 'ecommerce/overview')

const Examples: ExampleProps[] = [
  {
    name: 'Overview Example One',
    htmlCode: <ProductOverviewOne />,
    reactCode: `${overviewArray[0].files[0].content}`,
    component: <ProductOverviewOne />,
    playLink: 'https://play.tailwindcss.com/PBV7k7MaIo',
  },
  {
    name: 'Overview Example Two',
    htmlCode: <ProductOverviewTwo />,
    reactCode: `${overviewArray[0].files[1].content}`,
    component: <ProductOverviewTwo />,
    playLink: 'https://play.tailwindcss.com/mqwYGdPhMz',
  },
]

export default async function Overview() {
  return (
    <div className="mx-auto max-w-7xl px-3 py-8 md:py-12 lg:px-0 lg:py-14">
      <h3 className="pb-4 font-heading text-2xl font-bold">Ecommerce/Product Overview</h3>
      <hr />
      <div className="py-8 lg:px-0">
        {Examples.map((e) => (
          <div key={e.name}>
            <HeroBlock
              className="flex justify-center py-2"
              htmlCode={e.htmlCode}
              reactCode={e.reactCode}
              title={e.name}
              playLink={e.playLink}
            >
              {e.component}
            </HeroBlock>
          </div>
        ))}
      </div>
    </div>
  )
}
