import { HeroBlock } from '@/components/hero-block'
import componentsArray from '@/app/api/marketing-components.json'
import { ErrorOne, ErrorTwo, ErrorThree, ErrorFour } from '@/components/examples/marketing/error'
import { ExampleProps } from '@/types'

const errorArray = componentsArray.filter((e) => e.category === 'marketing/error')

const Examples: ExampleProps[] = [
  {
    name: 'Error Example 1',
    htmlCode: <ErrorOne />,
    reactCode: `${errorArray[0].files[0].content}`,
    component: <ErrorOne />,
    playLink: 'https://play.tailwindcss.com/gPhlGcncYG',
  },
  {
    name: 'Error Example 2',
    htmlCode: <ErrorTwo />,
    reactCode: `${errorArray[0].files[1].content}`,
    component: <ErrorTwo />,
    playLink: 'https://play.tailwindcss.com/PRTuKfKTsC',
  },
  {
    name: 'Error Example 3',
    htmlCode: <ErrorThree />,
    reactCode: `${errorArray[0].files[2].content}`,
    component: <ErrorThree />,
    playLink: 'https://play.tailwindcss.com/imLqOja37u',
  },
  {
    name: 'Error Example 4',
    htmlCode: <ErrorFour />,
    reactCode: `${errorArray[0].files[3].content}`,
    component: <ErrorFour />,
    playLink: 'https://play.tailwindcss.com/7Pj8qGL0lg',
  },
]

export default async function Error() {
  return (
    <div className="mx-auto max-w-7xl px-3 py-8 md:py-12 lg:px-0 lg:py-14">
      <h3 className="pb-4 font-heading text-2xl font-bold">Marketing/404-Error</h3>
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
