import { HeroBlock } from '@/components/hero-block'
import componentsArray from '@/app/api/page-examples.json'

import { ExampleProps } from '@/types'
import { ErrorPageOne } from '@/components/examples/pages/error/error-page-1'
import { ErrorPageTwo } from '@/components/examples/pages/error/error-page-2'

const errorPagesArray = componentsArray.filter((e) => e.category === 'pages/error')

const Examples: ExampleProps[] = [
  {
    name: 'Error Page One',
    htmlCode: <ErrorPageOne />,
    reactCode: `${errorPagesArray[0].files[0].content}`,
    component: <ErrorPageOne />,
    playLink: 'https://play.tailwindcss.com/naNuopdSnd?layout=horizontal',
  },
  {
    name: 'Error Page Two',
    htmlCode: <ErrorPageTwo />,
    reactCode: `${errorPagesArray[0].files[1].content}`,
    component: <ErrorPageTwo />,
    playLink: 'https://play.tailwindcss.com/NxBQQ1DL7d?layout=horizontal',
  },
]

export default async function ErrorPages() {
  return (
    <div className="mx-auto max-w-7xl px-3 py-8 md:py-12 lg:px-0 lg:py-14">
      <h3 className="pb-4 font-heading text-2xl font-bold">Error Pages</h3>
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
