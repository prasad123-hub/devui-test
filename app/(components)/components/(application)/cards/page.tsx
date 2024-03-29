import { HeroBlock } from '@/components/hero-block'
import componentsArray from '@/app/api/application-components.json'
import { CardOne, CardTwo, CardThree, CardFour } from '@/components/examples/application-ui/Cards'
import { ExampleProps } from '@/types'

const cardsArray = componentsArray.filter((e) => e.category === 'application/cards')

const Examples: ExampleProps[] = [
  {
    name: 'Card Example 1',
    htmlCode: <CardOne />,
    reactCode: `${cardsArray[0].files[0].content}`,
    component: <CardOne />,
    playLink: 'https://play.tailwindcss.com/gPLErQkhuc',
  },
  {
    name: 'Card Example 2',
    htmlCode: <CardTwo />,
    reactCode: `${cardsArray[0].files[1].content}`,
    component: <CardTwo />,
    playLink: 'https://play.tailwindcss.com/ZCZswRyA25',
  },
  {
    name: 'Card Example 3',
    htmlCode: <CardThree />,
    reactCode: `${cardsArray[0].files[2].content}`,
    component: <CardThree />,
    playLink: 'https://play.tailwindcss.com/eoCNpP2qts',
  },
  {
    name: 'Card Example 4',
    htmlCode: <CardFour />,
    reactCode: `${cardsArray[0].files[3].content}`,
    component: <CardFour />,
    playLink: 'https://play.tailwindcss.com/RQdwwcqgLy',
  },
]

export default async function Cards() {
  return (
    <div className="mx-auto max-w-7xl px-3 py-8 md:py-12 lg:px-0 lg:py-14">
      <h3 className="pb-4 font-heading text-2xl font-bold">Application UI/Cards</h3>
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
