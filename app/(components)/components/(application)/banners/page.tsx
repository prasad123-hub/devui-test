import { HeroBlock } from '@/components/hero-block'
import componentsArray from '@/app/api/application-components.json'
import {
  InfoBanner,
  SuccessBanner,
  AlertBanner,
  WarningBanner,
} from '@/components/examples/application-ui/Banners'
import { ExampleProps } from '@/types'

const bannersArray = componentsArray.filter((e) => e.category === 'application/banners')

const Examples: ExampleProps[] = [
  {
    name: 'Info Banner',
    htmlCode: <InfoBanner />,
    reactCode: `${bannersArray[0].files[0].content}`,
    component: <InfoBanner />,
    playLink: 'https://play.tailwindcss.com/RfKnqFFOtB',
  },
  {
    name: 'Success Banner',
    htmlCode: <SuccessBanner />,
    reactCode: `${bannersArray[0].files[1].content}`,
    component: <SuccessBanner />,
    playLink: 'https://play.tailwindcss.com/KyvGkD1U7l',
  },
  {
    name: 'Alert Banner',
    htmlCode: <AlertBanner />,
    reactCode: `${bannersArray[0].files[2].content}`,
    component: <AlertBanner />,
    playLink: 'https://play.tailwindcss.com/XCnpFqv0oX',
  },
  {
    name: 'Warning Banner',
    htmlCode: <WarningBanner />,
    reactCode: `${bannersArray[0].files[3].content}`,
    component: <WarningBanner />,
    playLink: 'https://play.tailwindcss.com/hEhqYmzzip',
  },
]

export default async function Banners() {
  return (
    <div className="mx-auto max-w-7xl px-3 py-8 md:py-12 lg:px-0 lg:py-14">
      <h3 className="pb-4 font-heading text-2xl font-bold">Application UI/Banners</h3>
      <hr />
      <div className="py-8 lg:px-0">
        {Examples.map((e) => (
          <div key={e.name}>
            <HeroBlock
              className="py-10"
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
