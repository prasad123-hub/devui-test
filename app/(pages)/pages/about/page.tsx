import { HeroBlock } from '@/components/hero-block'
import componentsArray from '@/app/api/page-examples.json'
import { AboutPageOne } from '@/components/examples/pages/about'
import { ExampleProps } from '@/types'

const aboutPagesArray = componentsArray.filter((e) => e.category === 'pages/about')

const Examples: ExampleProps[] = [
  {
    name: 'About PageOne',
    htmlCode: <AboutPageOne />,
    reactCode: `${aboutPagesArray[0].files[0].content}`,
    component: <AboutPageOne />,
    playLink: 'https://play.tailwindcss.com/Feh1m0wzNu?layout=horizontal',
  },
]

export default async function AboutPages() {
  return (
    <div className="mx-auto max-w-7xl px-3 py-8 md:py-12 lg:px-0 lg:py-14">
      <h3 className="pb-4 font-heading text-2xl font-bold">About Pages</h3>
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
