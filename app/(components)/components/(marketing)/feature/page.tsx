import { HeroBlock } from '@/components/hero-block'
import componentsArray from '@/app/api/marketing-components.json'
import {
  FeatureOne,
  FeatureTwo,
  FeatureThree,
  FeatureFour,
} from '@/components/examples/marketing/feature'
import { ExampleProps } from '@/types'

const featureArray = componentsArray.filter((e) => e.category === 'marketing/feature')

const Examples: ExampleProps[] = [
  {
    name: 'Feature Example 1',
    htmlCode: <FeatureOne />,
    reactCode: `${featureArray[0].files[0].content}`,
    component: <FeatureOne />,
    playLink: 'https://play.tailwindcss.com/ghiBlBAZd7',
  },
  {
    name: 'Feature Example 2',
    htmlCode: <FeatureTwo />,
    reactCode: `${featureArray[0].files[1].content}`,
    component: <FeatureTwo />,
    playLink: 'https://play.tailwindcss.com/gyT5zoDKf9',
  },
  {
    name: 'Feature Example 3',
    htmlCode: <FeatureThree />,
    reactCode: `${featureArray[0].files[2].content}`,
    component: <FeatureThree />,
    playLink: 'https://play.tailwindcss.com/zeNLo5DppM',
  },
  {
    name: 'Feature Example 4',
    htmlCode: <FeatureFour />,
    reactCode: `${featureArray[0].files[3].content}`,
    component: <FeatureFour />,
    playLink: 'https://play.tailwindcss.com/Y2gULN4oJ0',
  },
]

export default async function Features() {
  return (
    <div className="mx-auto max-w-7xl px-3 py-8 md:py-12 lg:px-0 lg:py-14">
      <h3 className="pb-4 font-heading text-2xl font-bold">Marketing/Features</h3>
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
