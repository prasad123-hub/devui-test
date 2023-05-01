import { HeroBlock } from '@/components/hero-block'
import componentsArray from '@/app/api/marketing-components.json'
import {
  FooterOne,
  FooterTwo,
  FooterThree,
  FooterFour,
} from '@/components/examples/marketing/footer'
import { ExampleProps } from '@/types'

const footerArray = componentsArray.filter((e) => e.category === 'marketing/footer')

const Examples: ExampleProps[] = [
  {
    name: 'Footer Example 1',
    htmlCode: <FooterOne />,
    reactCode: `${footerArray[0].files[0].content}`,
    component: <FooterOne />,
    playLink: 'https://play.tailwindcss.com/06GvEgWBa0',
  },
  {
    name: 'Footer Example 2',
    htmlCode: <FooterTwo />,
    reactCode: `${footerArray[0].files[1].content}`,
    component: <FooterTwo />,
    playLink: 'https://play.tailwindcss.com/Lv0WReUd4Y',
  },
  {
    name: 'Footer Example 3',
    htmlCode: <FooterThree />,
    reactCode: `${footerArray[0].files[2].content}`,
    component: <FooterThree />,
    playLink: 'https://play.tailwindcss.com/RxrwjundpM',
  },
  {
    name: 'Footer Example 4',
    htmlCode: <FooterFour />,
    reactCode: `${footerArray[0].files[3].content}`,
    component: <FooterFour />,
    playLink: 'https://play.tailwindcss.com/b3Zxe7zj5S',
  },
]

export default async function Footers() {
  return (
    <div className="mx-auto max-w-7xl px-3 py-8 md:py-12 lg:px-0 lg:py-14">
      <h3 className="pb-4 font-heading text-2xl font-bold">Marketing/Footers</h3>
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
