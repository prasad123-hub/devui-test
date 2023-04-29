import { HeroBlock } from '@/components/hero-block'
import componentsArray from '@/app/api/application-components.json'
import {
  InfoBanner,
  SuccessBanner,
  AlertBanner,
  WarningBanner,
} from '@/components/examples/application-ui/Banners'

const bannersArray = componentsArray.filter((e) => e.category === 'application/banners')

const Examples = [
  {
    name: 'Info Banner',
    htmlCode: <InfoBanner />,
    reactCode: `${bannersArray[0].files[0].content}`,
    component: <InfoBanner />,
  },
  {
    name: 'Success Banner',
    htmlCode: <SuccessBanner />,
    reactCode: `${bannersArray[0].files[1].content}`,
    component: <SuccessBanner />,
  },
  {
    name: 'Alert Banner',
    htmlCode: <AlertBanner />,
    reactCode: `${bannersArray[0].files[2].content}`,
    component: <AlertBanner />,
  },
  {
    name: 'Warning Banner',
    htmlCode: <WarningBanner />,
    reactCode: `${bannersArray[0].files[3].content}`,
    component: <WarningBanner />,
  },
]

export default async function Buttons() {
  return (
    <div className="mx-auto max-w-7xl px-10 py-8 md:py-12 lg:px-0 lg:py-14">
      <h3 className="pb-4 font-heading text-2xl font-bold">Application UI/Banners</h3>
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
