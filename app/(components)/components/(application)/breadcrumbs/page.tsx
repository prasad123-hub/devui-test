import { HeroBlock } from '@/components/hero-block'
import componentsArray from '@/app/api/application-components.json'
import {
  BreadcrumbOne,
  BreadcrumbTwo,
  BreadcrumbThree,
  BreadcrumbFour,
} from '@/components/examples/application-ui/Breadcrumbs'

const breadcrumbsArray = componentsArray.filter((e) => e.category === 'application/breadcrumbs')

const Examples = [
  {
    name: 'Simple',
    htmlCode: <BreadcrumbOne />,
    reactCode: `${breadcrumbsArray[0].files[0].content}`,
    component: <BreadcrumbOne />,
  },
  {
    name: 'With Arrow Icon',
    htmlCode: <BreadcrumbTwo />,
    reactCode: `${breadcrumbsArray[0].files[1].content}`,
    component: <BreadcrumbTwo />,
  },
  {
    name: 'With Icons',
    htmlCode: <BreadcrumbThree />,
    reactCode: `${breadcrumbsArray[0].files[2].content}`,
    component: <BreadcrumbThree />,
  },
  {
    name: 'Full Width',
    htmlCode: <BreadcrumbFour />,
    reactCode: `${breadcrumbsArray[0].files[3].content}`,
    component: <BreadcrumbFour />,
  },
]

export default async function Breadcrumbs() {
  return (
    <div className="mx-auto max-w-7xl px-3 py-8 md:py-12 lg:px-0 lg:py-14">
      <h3 className="pb-4 font-heading text-2xl font-bold">Application UI/Breadcrumbs</h3>
      <hr />
      <div className="py-8 lg:px-0">
        {Examples.map((e) => (
          <div key={e.name}>
            <HeroBlock
              className="flex items-center justify-center py-10"
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
