import { HeroBlock } from '@/components/hero-block'
import componentsArray from '@/app/api/ecommerce-components.json'
import { FilterOne, FilterTwo, FilterThree } from '@/components/examples/ecommerce/filter'
import { ExampleProps } from '@/types'

const filterArray = componentsArray.filter((e) => e.category === 'ecommerce/filter')

const Examples: ExampleProps[] = [
  {
    name: 'Filter Example One',
    htmlCode: <FilterOne />,
    reactCode: `${filterArray[0].files[0].content}`,
    component: <FilterOne />,
    playLink: 'https://play.tailwindcss.com/TX2tSzYEvm?layout=horizontal',
  },
  {
    name: 'Filter Example Two',
    htmlCode: <FilterTwo />,
    reactCode: `${filterArray[0].files[1].content}`,
    component: <FilterTwo />,
    playLink: 'https://play.tailwindcss.com/d1qJx2ejF8?layout=horizontal',
  },
  {
    name: 'Filter Example Three',
    htmlCode: <FilterThree />,
    reactCode: `${filterArray[0].files[2].content}`,
    component: <FilterThree />,
    playLink: 'https://play.tailwindcss.com/t81avKCyIZ?layout=horizontal',
  },
]

export default async function Filters() {
  return (
    <div className="mx-auto max-w-7xl px-3 py-8 md:py-12 lg:px-0 lg:py-14">
      <h3 className="pb-4 font-heading text-2xl font-bold">Ecommerce/Filters</h3>
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
