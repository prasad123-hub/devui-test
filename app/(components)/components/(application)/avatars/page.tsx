import { HeroBlock } from '@/components/hero-block'
import componentsArray from '@/app/api/application-components.json'
import {
  CircularAvatar,
  CircularAvatarStack,
  RoundedAvatar,
  AvatarWithText,
  CircularAvatarWithNotification,
} from '@/components/examples/application-ui/Avatars'
import { ExampleProps } from '@/types'

const avatarsArray = componentsArray.filter((e) => e.category === 'application/avatars')

const Examples: ExampleProps[] = [
  {
    name: 'Circular Avatar',
    htmlCode: <CircularAvatar />,
    reactCode: `${avatarsArray[0].files[0].content}`,
    component: <CircularAvatar />,
    playLink: 'https://play.tailwindcss.com/5T5l7UQstb',
  },
  {
    name: 'Rounded Avatar',
    htmlCode: <RoundedAvatar />,
    reactCode: `${avatarsArray[0].files[1].content}`,
    component: <RoundedAvatar />,
    playLink: 'https://play.tailwindcss.com/F61TyoeDNW',
  },
  {
    name: 'Circular Avatar with Notification',
    htmlCode: <CircularAvatarWithNotification />,
    reactCode: `${avatarsArray[0].files[2].content}`,
    component: <CircularAvatarWithNotification />,
    playLink: 'https://play.tailwindcss.com/ce2GGfi19W',
  },
  {
    name: 'Circular Avatar Stack',
    htmlCode: <CircularAvatarStack />,
    reactCode: `${avatarsArray[0].files[3].content}`,
    component: <CircularAvatarStack />,
    playLink: 'https://play.tailwindcss.com/1PjWw1JEcl',
  },
  {
    name: 'Avatar With Text',
    htmlCode: <AvatarWithText />,
    reactCode: `${avatarsArray[0].files[4].content}`,
    component: <AvatarWithText />,
    playLink: 'https://play.tailwindcss.com/whHHzVpS1v',
  },
]

export default async function Avatars() {
  return (
    <div className="mx-auto max-w-7xl px-3 py-8 md:py-12 lg:px-0 lg:py-14">
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
