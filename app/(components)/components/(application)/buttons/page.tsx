import { HeroBlock } from '@/components/hero-block'
import componentsArray from '@/app/api/application-components.json'
import {
  SolidButtons,
  OutlinedButtons,
  LeadingIconButtons,
  TrailingIconButtons,
  RoundedButtons,
  IconButtons,
} from '@/components/examples/application-ui/Buttons'

const buttonsArray = componentsArray.filter((e) => e.category === 'application/buttons')

const Examples = [
  {
    name: 'Solid Buttons',
    htmlCode: <SolidButtons />,
    reactCode: `${buttonsArray[0].files[0].content}`,
    component: <SolidButtons />,
  },
  {
    name: 'Outlined Buttons',
    htmlCode: <OutlinedButtons />,
    reactCode: `${buttonsArray[0].files[1].content}`,
    component: <OutlinedButtons />,
  },
  {
    name: 'Buttons with Leading Icon',
    htmlCode: <LeadingIconButtons />,
    reactCode: `${buttonsArray[0].files[2].content}`,
    component: <LeadingIconButtons />,
  },
  {
    name: 'Buttons with Trailing Icon',
    htmlCode: <TrailingIconButtons />,
    reactCode: `${buttonsArray[0].files[3].content}`,
    component: <TrailingIconButtons />,
  },
  {
    name: 'Rounded Buttons',
    htmlCode: <RoundedButtons />,
    reactCode: `${buttonsArray[0].files[4].content}`,
    component: <RoundedButtons />,
  },
  {
    name: 'Icon Buttons',
    htmlCode: <IconButtons />,
    reactCode: `${buttonsArray[0].files[5].content}`,
    component: <IconButtons />,
  },
]

export default async function Buttons() {
  return (
    <div className="mx-auto max-w-7xl px-3 py-8 md:py-12 lg:px-0 lg:py-14">
      <h3 className="pb-4 font-heading text-2xl font-bold">Application UI/Buttons</h3>
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
