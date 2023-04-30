import { HeroBlock } from '@/components/hero-block'
import componentsArray from '@/app/api/application-components.json'
import {
  SidebarOne,
  SidebarTwo,
  SidebarThree,
  SidebarFour,
} from '@/components/examples/application-ui/Sidebars'
import { ExampleProps } from '@/types'

const sidebarsArray = componentsArray.filter((e) => e.category === 'application/sidebars')

const Examples: ExampleProps[] = [
  {
    name: 'Sidebar Example One',
    htmlCode: <SidebarOne />,
    reactCode: `${sidebarsArray[0].files[0].content}`,
    component: <SidebarOne />,
    playLink: 'https://play.tailwindcss.com/Z8QU1dZIei',
  },
  {
    name: 'Sidebar Example Two',
    htmlCode: <SidebarTwo />,
    reactCode: `${sidebarsArray[0].files[1].content}`,
    component: <SidebarTwo />,
    playLink: 'https://play.tailwindcss.com/NekMDWiovO',
  },
  {
    name: 'Sidebar Example Three',
    htmlCode: <SidebarThree />,
    reactCode: `${sidebarsArray[0].files[2].content}`,
    component: <SidebarThree />,
    playLink: 'https://play.tailwindcss.com/qOquGY4bui',
  },
  {
    name: 'Sidebar Example Four',
    htmlCode: <SidebarFour />,
    reactCode: `${sidebarsArray[0].files[3].content}`,
    component: <SidebarFour />,
    playLink: 'https://play.tailwindcss.com/osG3YyHRpK',
  },
]

export default async function Sidebars() {
  return (
    <div className="mx-auto max-w-7xl px-3 py-8 md:py-12 lg:px-0 lg:py-14">
      <h3 className="pb-4 font-heading text-2xl font-bold">Application UI/Sidebars</h3>
      <hr />
      <div className="py-8 lg:px-0">
        {Examples.map((e) => (
          <div key={e.name}>
            <HeroBlock
              className=""
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
