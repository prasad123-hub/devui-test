import { HeroBlock } from '@/components/hero-block'
import componentsArray from '@/app/api/application-components.json'
import {
  PaginationOne,
  PaginationTwo,
  PaginationThree,
} from '@/components/examples/application-ui/Pagination'

const paginationArray = componentsArray.filter((e) => e.category === 'application/pagination')

const Examples = [
  {
    name: 'Pagination Example One',
    htmlCode: <PaginationOne />,
    reactCode: `${paginationArray[0].files[0].content}`,
    component: <PaginationOne />,
  },
  {
    name: 'Pagination Example Two',
    htmlCode: <PaginationTwo />,
    reactCode: `${paginationArray[0].files[1].content}`,
    component: <PaginationTwo />,
  },
  {
    name: 'Pagination Example Three',
    htmlCode: <PaginationThree />,
    reactCode: `${paginationArray[0].files[2].content}`,
    component: <PaginationThree />,
  },
]

export default async function Pagination() {
  return (
    <div className="mx-auto max-w-7xl px-10 py-8 md:py-12 lg:px-0 lg:py-14">
      <h3 className="pb-4 font-heading text-2xl font-bold">Application UI/Pagination</h3>
      <hr />
      <div className="py-8 lg:px-0">
        {Examples.map((e) => (
          <div key={e.name}>
            <HeroBlock
              className="flex items-center justify-center space-x-2 py-10"
              htmlCode={e.htmlCode}
              reactCode={e.reactCode}
              title={e.name}
            >
              {e.component}
            </HeroBlock>
          </div>
        ))}
      </div>
    </div>
  )
}
