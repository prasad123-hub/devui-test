import { HeroBlock } from '@/components/hero-block'
import componentsArray from '@/app/api/application-components.json'
import { CircularAvatar } from '@/components/examples/application-ui/Avatars'

const avatarsArray = componentsArray.filter((e) => e.category === 'application/avatars')

const Examples = [
  {
    name: 'Circular Avatar',
    htmlCode: <CircularAvatar />,
    reactCode: `${avatarsArray[0].files[0].content}`,
    component: <CircularAvatar />,
  },
]

export default async function Buttons() {
  return (
    <div className="mx-auto max-w-7xl px-10 py-8 md:py-12 lg:px-0 lg:py-14">
      <h3 className="pb-4 font-heading text-2xl font-bold">Application UI/Avatars</h3>
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
