import { HeroBlock } from '@/components/hero-block'
import componentsArray from '@/app/api/marketing-components.json'
import { HeroOne, HeroTwo, HeroThree } from '@/components/examples/marketing/hero'
import { ExampleProps } from '@/types'

const heroArray = componentsArray.filter((e) => e.category === 'marketing/hero')

const Examples: ExampleProps[] = [
  {
    name: 'Hero Example 1',
    htmlCode: <HeroOne />,
    reactCode: `${heroArray[0].files[0].content}`,
    component: <HeroOne />,
    playLink: 'https://play.tailwindcss.com/KnAO827wqP',
  },
  {
    name: 'Hero Example 2',
    htmlCode: <HeroTwo />,
    reactCode: `${heroArray[0].files[1].content}`,
    component: <HeroTwo />,
    playLink: 'https://play.tailwindcss.com/ArzZ3tZmrB',
  },
  {
    name: 'Hero Example 3',
    htmlCode: <HeroThree />,
    reactCode: `${heroArray[0].files[2].content}`,
    component: <HeroThree />,
    playLink: 'https://play.tailwindcss.com/XefF6qVeJO',
  },
]

export default async function Heros() {
  return (
    <div className="mx-auto max-w-7xl px-3 py-8 md:py-12 lg:px-0 lg:py-14">
      <h3 className="pb-4 font-heading text-2xl font-bold">Marketing/Hero</h3>
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
