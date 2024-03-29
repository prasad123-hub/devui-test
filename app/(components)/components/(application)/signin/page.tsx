import { HeroBlock } from '@/components/hero-block'
import componentsArray from '@/app/api/application-components.json'
import {
  SignInOne,
  SignInTwo,
  SignInThree,
  SignInFour,
} from '@/components/examples/application-ui/SignIn'
import { ExampleProps } from '@/types'

const signinArray = componentsArray.filter((e) => e.category === 'application/signin')

const Examples: ExampleProps[] = [
  {
    name: 'Sign In Example One',
    htmlCode: <SignInOne />,
    reactCode: `${signinArray[0].files[0].content}`,
    component: <SignInOne />,
    playLink: 'https://play.tailwindcss.com/9LUHKtZnjU',
  },
  {
    name: 'Sign In Example Two',
    htmlCode: <SignInTwo />,
    reactCode: `${signinArray[0].files[1].content}`,
    component: <SignInTwo />,
    playLink: 'https://play.tailwindcss.com/zBtbPfCB2g',
  },
  {
    name: 'Sign In Example Three',
    htmlCode: <SignInThree />,
    reactCode: `${signinArray[0].files[2].content}`,
    component: <SignInThree />,
    playLink: 'https://play.tailwindcss.com/tEFMaaYi5Q',
  },
  {
    name: 'Sign In Example Four',
    htmlCode: <SignInFour />,
    reactCode: `${signinArray[0].files[3].content}`,
    component: <SignInFour />,
    playLink: 'https://play.tailwindcss.com/Wizqnk00Ht',
  },
]

export default async function SignIn() {
  return (
    <div className="mx-auto max-w-7xl px-3 py-8 md:py-12 lg:px-0 lg:py-14">
      <h3 className="pb-4 font-heading text-2xl font-bold">Application UI/Sign In</h3>
      <hr />
      <div className="py-8 lg:px-0">
        {Examples.map((e) => (
          <div key={e.name}>
            <HeroBlock
              className="flex justify-center py-2"
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
