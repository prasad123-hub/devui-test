import { HeroBlock } from '@/components/hero-block'
import componentsArray from '@/app/api/ecommerce-components.json'
import { OrderOne, OrderTwo } from '@/components/examples/ecommerce/order'
import { ExampleProps } from '@/types'

const orderArray = componentsArray.filter((e) => e.category === 'ecommerce/order')

const Examples: ExampleProps[] = [
  {
    name: 'Order Example One',
    htmlCode: <OrderOne />,
    reactCode: `${orderArray[0].files[0].content}`,
    component: <OrderOne />,
    playLink: 'https://play.tailwindcss.com/jWoSpu9Uwn?layout=horizontal',
  },
  {
    name: 'Order Example Two',
    htmlCode: <OrderTwo />,
    reactCode: `${orderArray[0].files[1].content}`,
    component: <OrderTwo />,
    playLink: 'https://play.tailwindcss.com/DjpdijtQqw?layout=horizontal',
  },
]

export default async function Orders() {
  return (
    <div className="mx-auto max-w-7xl px-3 py-8 md:py-12 lg:px-0 lg:py-14">
      <h3 className="pb-4 font-heading text-2xl font-bold">Ecommerce/Orders</h3>
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
