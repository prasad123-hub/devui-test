import { HeroBlock } from '@/components/hero-block'
import componentsArray from '@/app/api/ecommerce-components.json'
import { CartOne, CartTwo, CartThree } from '@/components/examples/ecommerce/cart'
import { ExampleProps } from '@/types'

const cartArray = componentsArray.filter((e) => e.category === 'ecommerce/cart')

const Examples: ExampleProps[] = [
  {
    name: 'Cart Example One',
    htmlCode: <CartOne />,
    reactCode: `${cartArray[0].files[0].content}`,
    component: <CartOne />,
    playLink: 'https://play.tailwindcss.com/46eeXnZRzs',
  },
  {
    name: 'Cart Example Two',
    htmlCode: <CartTwo />,
    reactCode: `${cartArray[0].files[1].content}`,
    component: <CartTwo />,
    playLink: 'https://play.tailwindcss.com/9M2ICRGXO6',
  },
  {
    name: 'Cart Example Three',
    htmlCode: <CartThree />,
    reactCode: `${cartArray[0].files[2].content}`,
    component: <CartThree />,
    playLink: 'https://play.tailwindcss.com/pREv4fFkTS',
  },
]

export default async function ShoppingCart() {
  return (
    <div className="mx-auto max-w-7xl px-3 py-8 md:py-12 lg:px-0 lg:py-14">
      <h3 className="pb-4 font-heading text-2xl font-bold">Ecommerce/Shopping Cart</h3>
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
