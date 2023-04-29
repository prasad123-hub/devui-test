import { HeroBlock } from '@/components/hero-block'
import componentsArray from '@/app/api/application-components.json'
import {
  DefaultInput,
  DisabledInput,
  LabelInput,
  BottomTextInput,
  WithButtonInput,
} from '@/components/examples/application-ui/Inputs'

const inputsArray = componentsArray.filter((e) => e.category === 'application/inputs')

const Examples = [
  {
    name: 'Default Input',
    htmlCode: <DefaultInput />,
    reactCode: `${inputsArray[0].files[0].content}`,
    component: <DefaultInput />,
  },
  {
    name: 'Disabled Input',
    htmlCode: <DisabledInput />,
    reactCode: `${inputsArray[0].files[1].content}`,
    component: <DisabledInput />,
  },
  {
    name: 'With Label Input',
    htmlCode: <LabelInput />,
    reactCode: `${inputsArray[0].files[2].content}`,
    component: <LabelInput />,
  },
  {
    name: 'With Bottom text Input',
    htmlCode: <BottomTextInput />,
    reactCode: `${inputsArray[0].files[3].content}`,
    component: <BottomTextInput />,
  },
  {
    name: 'With Button',
    htmlCode: <WithButtonInput />,
    reactCode: `${inputsArray[0].files[4].content}`,
    component: <WithButtonInput />,
  },
]

export default async function Inputs() {
  return (
    <div className="mx-auto max-w-7xl px-10 py-8 md:py-12 lg:px-0 lg:py-14">
      <h3 className="pb-4 font-heading text-2xl font-bold">Application UI/Inputs</h3>
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
