import { HeroBlock } from '@/components/hero-block'
import componentsArray from '@/app/api/application-components.json'
import { ExampleNavbarOne } from '@/components/examples/application-ui/Navbars/navbar-one'
import { ExampleNavbarTwo } from '@/components/examples/application-ui/Navbars/navbar-two'
import { ExampleNavbarThree } from '@/components/examples/application-ui/Navbars/navbar-three'
import { ExampleNavbarFour } from '@/components/examples/application-ui/Navbars/navbar-four'
import { ExampleProps } from '@/types'

const navbarsArray = componentsArray.filter((e) => e.category === 'application/navbars')

const Examples: ExampleProps[] = [
  {
    name: 'Navbar Example One',
    htmlCode: <ExampleNavbarOne />,
    reactCode: `${navbarsArray[0].files[0].content}`,
    component: <ExampleNavbarOne />,
    playLink: 'https://play.tailwindcss.com/ruCoEfHPXv',
  },
  {
    name: 'Navbar Example Two',
    htmlCode: <ExampleNavbarTwo />,
    reactCode: `${navbarsArray[0].files[1].content}`,
    component: <ExampleNavbarTwo />,
    playLink: 'https://play.tailwindcss.com/uRScYHSlid',
  },
  {
    name: 'Navbar Example Three',
    htmlCode: <ExampleNavbarThree />,
    reactCode: `${navbarsArray[0].files[2].content}`,
    component: <ExampleNavbarThree />,
    playLink: 'https://play.tailwindcss.com/Re9dymPmaM',
  },
  {
    name: 'Navbar Example Four',
    htmlCode: <ExampleNavbarFour />,
    reactCode: `${navbarsArray[0].files[3].content}`,
    component: <ExampleNavbarFour />,
    playLink: 'https://play.tailwindcss.com/CGlQi04Vu3',
  },
]

export default async function Navbars() {
  return (
    <div className="mx-auto max-w-7xl px-3 py-8 md:py-12 lg:px-0 lg:py-14">
      <h3 className="pb-4 font-heading text-2xl font-bold">Application UI/Navbars</h3>
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
