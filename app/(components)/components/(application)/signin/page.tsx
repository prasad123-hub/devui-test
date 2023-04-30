import { HeroBlock } from '@/components/hero-block'
import componentsArray from '@/app/api/application-components.json'
import {
  SignInOne,
  SignInTwo,
  SignInThree,
  SignInFour,
} from '@/components/examples/application-ui/SignIn'

const signinArray = componentsArray.filter((e) => e.category === 'application/signin')

const Examples = [
  {
    name: 'Sign In Example One',
    htmlCode: <SignInOne />,
    reactCode: `${signinArray[0].files[0].content}`,
    component: <SignInOne />,
  },
  {
    name: 'Sign In Example Two',
    htmlCode: <SignInTwo />,
    reactCode: `${signinArray[0].files[1].content}`,
    component: <SignInTwo />,
  },
  {
    name: 'Sign In Example Three',
    htmlCode: <SignInThree />,
    reactCode: `${signinArray[0].files[2].content}`,
    component: <SignInThree />,
  },
  {
    name: 'Sign In Example Four',
    htmlCode: <SignInFour />,
    reactCode: `${signinArray[0].files[3].content}`,
    component: <SignInFour />,
  },
]

export default async function SignIn() {
  return (
    <div className="mx-auto max-w-7xl px-10 py-8 md:py-12 lg:px-0 lg:py-14">
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
            >
              {e.component}
            </HeroBlock>
          </div>
        ))}
      </div>
    </div>
  )
}
