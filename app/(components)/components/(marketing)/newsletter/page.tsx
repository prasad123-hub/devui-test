import { HeroBlock } from '@/components/hero-block'
import componentsArray from '@/app/api/marketing-components.json'
import {
  NewsLetterOne,
  NewsLetterTwo,
  NewsLetterThree,
  NewsLetterFour,
} from '@/components/examples/marketing/newsletter'
import { ExampleProps } from '@/types'

const newsLetterArray = componentsArray.filter((e) => e.category === 'marketing/newsletter')

const Examples: ExampleProps[] = [
  {
    name: 'Newsletter 1',
    htmlCode: <NewsLetterOne />,
    reactCode: `${newsLetterArray[0].files[0].content}`,
    component: <NewsLetterOne />,
    playLink: 'https://play.tailwindcss.com/popLSrq5GU',
  },
  {
    name: 'Newsletter 2',
    htmlCode: <NewsLetterTwo />,
    reactCode: `${newsLetterArray[0].files[1].content}`,
    component: <NewsLetterTwo />,
    playLink: 'https://play.tailwindcss.com/LBIZD1kDpL',
  },
  {
    name: 'Newsletter 3',
    htmlCode: <NewsLetterThree />,
    reactCode: `${newsLetterArray[0].files[2].content}`,
    component: <NewsLetterThree />,
    playLink: 'https://play.tailwindcss.com/t33mRPp7gS',
  },
  {
    name: 'Newsletter 4',
    htmlCode: <NewsLetterFour />,
    reactCode: `${newsLetterArray[0].files[3].content}`,
    component: <NewsLetterFour />,
    playLink: 'https://play.tailwindcss.com/32iNkwL8cX',
  },
]

export default async function Newsletter() {
  return (
    <div className="mx-auto max-w-7xl px-3 py-8 md:py-12 lg:px-0 lg:py-14">
      <h3 className="pb-4 font-heading text-2xl font-bold">Marketing/Newsletters</h3>
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
