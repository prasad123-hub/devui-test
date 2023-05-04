import { HeroBlock } from '@/components/hero-block'
import componentsArray from '@/app/api/ecommerce-components.json'
import { CheckoutOne, CheckoutTwo, CheckoutThree } from '@/components/examples/ecommerce/checkout'
import { ExampleProps } from '@/types'

const checkoutArray = componentsArray.filter((e) => e.category === 'ecommerce/checkout')

const Examples: ExampleProps[] = [
  {
    name: 'Checkout Example One',
    htmlCode: <CheckoutOne />,
    reactCode: `${checkoutArray[0].files[0].content}`,
    component: <CheckoutOne />,
    playLink: 'https://play.tailwindcss.com/WTrRJTAwbM',
  },
  {
    name: 'Checkout Example Two',
    htmlCode: <CheckoutTwo />,
    reactCode: `${checkoutArray[0].files[1].content}`,
    component: <CheckoutTwo />,
    playLink: 'https://play.tailwindcss.com/TtlJ1mYBrI',
  },
  {
    name: 'Checkout Example Three',
    htmlCode: <CheckoutThree />,
    reactCode: `${checkoutArray[0].files[2].content}`,
    component: <CheckoutThree />,
    playLink: 'https://play.tailwindcss.com/I1oo8GiEQe',
  },
]

export default async function Checkout() {
  return (
    <div className="mx-auto max-w-7xl px-3 py-8 md:py-12 lg:px-0 lg:py-14">
      <h3 className="pb-4 font-heading text-2xl font-bold">Ecommerce/Checkout</h3>
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
