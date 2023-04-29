import { HeroBlock } from '@/components/hero-block'
import componentsArray from '@/app/api/application-components.json'
import {
  NavbarOne,
  NavbarTwo,
  NavbarThree,
  NavbarFour,
} from '@/components/examples/application-ui/Navbars'

const navbarsArray = componentsArray.filter((e) => e.category === 'application/navbars')

const Examples = [
  {
    name: 'Navbar Example One',
    htmlCode: <NavbarOne />,
    reactCode: `${navbarsArray[0].files[0].content}`,
    component: <NavbarOne />,
  },
  {
    name: 'Navbar Example Two',
    htmlCode: <NavbarTwo />,
    reactCode: `${navbarsArray[0].files[1].content}`,
    component: <NavbarTwo />,
  },
  {
    name: 'Navbar Example Three',
    htmlCode: <NavbarThree />,
    reactCode: `${navbarsArray[0].files[2].content}`,
    component: <NavbarThree />,
  },
  {
    name: 'Navbar Example Four',
    htmlCode: <NavbarFour />,
    reactCode: `${navbarsArray[0].files[3].content}`,
    component: <NavbarFour />,
  },
]

export default async function Avatars() {
  return (
    <div className="mx-auto max-w-7xl px-10 py-8 md:py-12 lg:px-0 lg:py-14">
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
            >
              {e.component}
            </HeroBlock>
          </div>
        ))}
      </div>
    </div>
  )
}
