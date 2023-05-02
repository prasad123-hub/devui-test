import { HeroBlock } from '@/components/hero-block'
import componentsArray from '@/app/api/marketing-components.json'
import { TeamsOne, TeamsTwo, TeamsThree } from '@/components/examples/marketing/team'
import { ExampleProps } from '@/types'

const teamArray = componentsArray.filter((e) => e.category === 'marketing/team')

const Examples: ExampleProps[] = [
  {
    name: 'Team Example 1',
    htmlCode: <TeamsOne />,
    reactCode: `${teamArray[0].files[0].content}`,
    component: <TeamsOne />,
    playLink: 'https://play.tailwindcss.com/luVUSpR7lF',
  },
  {
    name: 'Team Example 2',
    htmlCode: <TeamsTwo />,
    reactCode: `${teamArray[0].files[1].content}`,
    component: <TeamsTwo />,
    playLink: 'https://play.tailwindcss.com/gtcfxVWASX',
  },
  {
    name: 'Team Example 3',
    htmlCode: <TeamsThree />,
    reactCode: `${teamArray[0].files[2].content}`,
    component: <TeamsThree />,
    playLink: 'https://play.tailwindcss.com/YHIxteTIOh',
  },
]

export default async function Team() {
  return (
    <div className="mx-auto max-w-7xl px-3 py-8 md:py-12 lg:px-0 lg:py-14">
      <h3 className="pb-4 font-heading text-2xl font-bold">Marketing/Teams</h3>
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
