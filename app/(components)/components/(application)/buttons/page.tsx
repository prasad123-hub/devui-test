import { HeroBlock } from '@/components/hero-block'
import componentsArray from '@/app/api/components.json'
import { SolidButtons } from '@/components/examples/application-ui/Buttons/solid-buttons'

const buttonsArray = componentsArray.filter((e) => e.category === 'application/buttons')

const Examples = [
  {
    name: 'solid buttons',
    htmlCode: <SolidButtons />,
    reactCode: `${buttonsArray[0].files[0].content}`,
    component: <SolidButtons />,
  },
]

export default async function Buttons() {
  return (
    <div className="mx-auto max-w-7xl px-10 py-8 md:py-12 lg:px-0 lg:py-14">
      <h3 className="pb-4 font-heading text-2xl font-bold">Marketing/Buttons</h3>
      <hr />

      <div className="py-8 lg:px-0">
        <div>
          {Examples.map((e) => (
            <HeroBlock
              key={e.name}
              className="flex items-center justify-center space-x-2 py-10"
              htmlCode={e.htmlCode}
              reactCode={e.reactCode}
              title="Primary Buttons"
            >
              {e.component}
            </HeroBlock>
          ))}
        </div>
      </div>
    </div>
  )
}
