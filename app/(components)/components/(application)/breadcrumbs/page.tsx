import { HeroBlock } from '@/components/hero-block'
import componentsArray from '@/app/api/application-components.json'
import {
  BreadcrumbOne,
  BreadcrumbTwo,
  BreadcrumbThree,
  BreadcrumbFour,
} from '@/components/examples/application-ui/Breadcrumbs'
import { ExampleProps } from '@/types'

const breadcrumbsArray = componentsArray.filter((e) => e.category === 'application/breadcrumbs')

const Examples: ExampleProps[] = [
  {
    name: 'Simple',
    htmlCode: <BreadcrumbOne />,
    reactCode: `${breadcrumbsArray[0].files[0].content}`,
    component: <BreadcrumbOne />,
    playLink: 'https://play.tailwindcss.com/B6l40bnoOe',
  },
  {
    name: 'With Arrow Icon',
    htmlCode: <BreadcrumbTwo />,
    reactCode: `${breadcrumbsArray[0].files[1].content}`,
    component: <BreadcrumbTwo />,
    playLink: 'https://play.tailwindcss.com/ksD1AoT5J9',
  },
  {
    name: 'With Icons',
    htmlCode: <BreadcrumbThree />,
    reactCode: `${breadcrumbsArray[0].files[2].content}`,
    component: <BreadcrumbThree />,
    playLink: 'https://play.tailwindcss.com/FfnLqZBrl1',
  },
  {
    name: 'Full Width',
    htmlCode: <BreadcrumbFour />,
    reactCode: `${breadcrumbsArray[0].files[3].content}`,
    component: <BreadcrumbFour />,
    playLink: 'https://play.tailwindcss.com/D9mnCdeedg',
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
