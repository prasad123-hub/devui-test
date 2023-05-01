import { HeroBlock } from '@/components/hero-block'
import componentsArray from '@/app/api/marketing-components.json'
import { CtaOne, CtaTwo, CtaThree, CtaFour } from '@/components/examples/marketing/cta'
import { ExampleProps } from '@/types'

const ctaArray = componentsArray.filter((e) => e.category === 'marketing/cta')

const Examples: ExampleProps[] = [
  {
    name: 'CTA Example 1',
    htmlCode: <CtaOne />,
    reactCode: `${ctaArray[0].files[0].content}`,
    component: <CtaOne />,
    playLink: 'https://play.tailwindcss.com/PNYkTm6nHn',
  },
  {
    name: 'CTA Example 2',
    htmlCode: <CtaTwo />,
    reactCode: `${ctaArray[0].files[1].content}`,
    component: <CtaTwo />,
    playLink: 'https://play.tailwindcss.com/K41ZhvQPLQ',
  },
  {
    name: 'CTA Example 3',
    htmlCode: <CtaThree />,
    reactCode: `${ctaArray[0].files[2].content}`,
    component: <CtaThree />,
    playLink: 'https://play.tailwindcss.com/H7NYicSvpW',
  },
  {
    name: 'CTA Example 4',
    htmlCode: <CtaFour />,
    reactCode: `${ctaArray[0].files[3].content}`,
    component: <CtaFour />,
    playLink: 'https://play.tailwindcss.com/GPVY2gZout',
  },
]

export default async function Cta() {
  return (
    <div className="mx-auto max-w-7xl px-3 py-8 md:py-12 lg:px-0 lg:py-14">
      <h3 className="pb-4 font-heading text-2xl font-bold">Marketing/CTA</h3>
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
