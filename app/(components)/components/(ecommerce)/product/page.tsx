import { HeroBlock } from '@/components/hero-block'
import componentsArray from '@/app/api/ecommerce-components.json'
import { ProductOne, ProductTwo, ProductThree } from '@/components/examples/ecommerce/product'
import { ExampleProps } from '@/types'

const productArray = componentsArray.filter((e) => e.category === 'ecommerce/product')

const Examples: ExampleProps[] = [
  {
    name: 'Product Example One',
    htmlCode: <ProductOne />,
    reactCode: `${productArray[0].files[0].content}`,
    component: <ProductOne />,
    playLink: 'https://play.tailwindcss.com/sibYq44Qdu?layout=horizontal',
  },
  {
    name: 'Product Example Two',
    htmlCode: <ProductTwo />,
    reactCode: `${productArray[0].files[1].content}`,
    component: <ProductTwo />,
    playLink: 'https://play.tailwindcss.com/rBdpdnXtui?layout=horizontal',
  },
  {
    name: 'Product Example Three',
    htmlCode: <ProductThree />,
    reactCode: `${productArray[0].files[2].content}`,
    component: <ProductThree />,
    playLink: 'https://play.tailwindcss.com/TP8T9olLfm?layout=horizontal',
  },
]

export default async function Product() {
  return (
    <div className="mx-auto max-w-7xl px-3 py-8 md:py-12 lg:px-0 lg:py-14">
      <h3 className="pb-4 font-heading text-2xl font-bold">Ecommerce/Products</h3>
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
