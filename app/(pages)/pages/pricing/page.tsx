import { HeroBlock } from '@/components/hero-block'
import componentsArray from '@/app/api/page-examples.json'
import { PricingPageOne } from '@/components/examples/pages/pricing/pricing-page-1'
import { PricingPageTwo } from '@/components/examples/pages/pricing/pricing-page-2'
import { ExampleProps } from '@/types'

const pricingPagesArray = componentsArray.filter((e) => e.category === 'pages/pricing')

const Examples: ExampleProps[] = [
  {
    name: 'Pricing Page One',
    htmlCode: <PricingPageOne />,
    reactCode: `${pricingPagesArray[0].files[0].content}`,
    component: <PricingPageOne />,
    playLink: 'https://play.tailwindcss.com/pC2VHJFyOs?layout=horizontal',
  },
  {
    name: 'Pricing Page Two',
    htmlCode: <PricingPageTwo />,
    reactCode: `${pricingPagesArray[0].files[1].content}`,
    component: <PricingPageTwo />,
    playLink: 'https://play.tailwindcss.com/fgL0IfJHF0?layout=horizontal',
  },
]

export default async function PricingPages() {
  return (
    <div className="mx-auto max-w-7xl px-3 py-8 md:py-12 lg:px-0 lg:py-14">
      <h3 className="pb-4 font-heading text-2xl font-bold">Pricing Pages</h3>
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
