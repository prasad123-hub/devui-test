import { HeroBlock } from '@/components/hero-block'
import componentsArray from '@/app/api/marketing-components.json'
import { PrincingOne, PricingTwo, PricingThree } from '@/components/examples/marketing/pricing'
import { ExampleProps } from '@/types'

const pricingArray = componentsArray.filter((e) => e.category === 'marketing/pricing')

const Examples: ExampleProps[] = [
  {
    name: 'Pricing Example 1',
    htmlCode: <PrincingOne />,
    reactCode: `${pricingArray[0].files[0].content}`,
    component: <PrincingOne />,
    playLink: 'https://play.tailwindcss.com/XJ7DHjGmnA',
  },
  {
    name: 'Pricing Example 2',
    htmlCode: <PricingTwo />,
    reactCode: `${pricingArray[0].files[1].content}`,
    component: <PricingTwo />,
    playLink: 'https://play.tailwindcss.com/pjmg1gUtu8',
  },
  {
    name: 'Pricing Example 3',
    htmlCode: <PricingThree />,
    reactCode: `${pricingArray[0].files[2].content}`,
    component: <PricingThree />,
    playLink: 'https://play.tailwindcss.com/PMipqm3sk3',
  },
]

export default async function Pricing() {
  return (
    <div className="mx-auto max-w-7xl px-3 py-8 md:py-12 lg:px-0 lg:py-14">
      <h3 className="pb-4 font-heading text-2xl font-bold">Marketing/Pricing</h3>
      <hr />
      <div className="py-8 lg:px-0">
        {Examples.map((e) => (
          <div key={e.name}>
            <HeroBlock
              className="flex items-center justify-center space-x-2 py-10"
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
