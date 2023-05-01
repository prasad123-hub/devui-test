import { HeroBlock } from '@/components/hero-block'
import componentsArray from '@/app/api/marketing-components.json'
import { FaqOne, FaqTwo, FaqThree, FaqFour } from '@/components/examples/marketing/faq'
import { ExampleProps } from '@/types'

const faqArray = componentsArray.filter((e) => e.category === 'marketing/faq')

const Examples: ExampleProps[] = [
  {
    name: 'FAQ Example 1',
    htmlCode: <FaqOne />,
    reactCode: `${faqArray[0].files[0].content}`,
    component: <FaqOne />,
    playLink: 'https://play.tailwindcss.com/rbtWayXGtS',
  },
  {
    name: 'FAQ Example 2',
    htmlCode: <FaqTwo />,
    reactCode: `${faqArray[0].files[1].content}`,
    component: <FaqTwo />,
    playLink: 'https://play.tailwindcss.com/CZurUpEGFY',
  },
  {
    name: 'FAQ Example 3',
    htmlCode: <FaqThree />,
    reactCode: `${faqArray[0].files[2].content}`,
    component: <FaqThree />,
    playLink: 'https://play.tailwindcss.com/v0qlwkWjd0',
  },
  {
    name: 'FAQ Example 4',
    htmlCode: <FaqFour />,
    reactCode: `${faqArray[0].files[3].content}`,
    component: <FaqFour />,
    playLink: 'https://play.tailwindcss.com/BRDlF0GAEn',
  },
]

export default async function Faqs() {
  return (
    <div className="mx-auto max-w-7xl px-3 py-8 md:py-12 lg:px-0 lg:py-14">
      <h3 className="pb-4 font-heading text-2xl font-bold">Marketing/FAQs</h3>
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
