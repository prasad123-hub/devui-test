import { HeroBlock } from '@/components/hero-block'
import componentsArray from '@/app/api/page-examples.json'
import { LandinngPageOne } from '@/components/examples/pages/landing/landing-page-1'
import { LandinngPageTwo } from '@/components/examples/pages/landing/landing-page-2'
import { ExampleProps } from '@/types'

const landingPagesArray = componentsArray.filter((e) => e.category === 'pages/landing')

const Examples: ExampleProps[] = [
  {
    name: 'Landing Page One',
    htmlCode: <LandinngPageOne />,
    reactCode: `${landingPagesArray[0].files[0].content}`,
    component: <LandinngPageOne />,
    playLink: 'https://play.tailwindcss.com/vZG0uFhLO6?layout=horizontal',
  },
  {
    name: 'Landing Page Two',
    htmlCode: <LandinngPageTwo />,
    reactCode: `${landingPagesArray[0].files[1].content}`,
    component: <LandinngPageTwo />,
    playLink: 'https://play.tailwindcss.com/aapc0HwUFg?layout=horizontal',
  },
]

export default async function LandingPages() {
  return (
    <div className="mx-auto max-w-7xl px-3 py-8 md:py-12 lg:px-0 lg:py-14">
      <h3 className="pb-4 font-heading text-2xl font-bold">Landing Pages</h3>
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
