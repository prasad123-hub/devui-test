import { HeroBlock } from '@/components/hero-block'
import componentsArray from '@/app/api/application-components.json'
import {
  SignUpOne,
  SignUpTwo,
  SignUpThree,
  SignUpFour,
} from '@/components/examples/application-ui/SignUp'

const signupArray = componentsArray.filter((e) => e.category === 'application/signup')

const Examples = [
  {
    name: 'Sign Up Example One',
    htmlCode: <SignUpOne />,
    reactCode: `${signupArray[0].files[0].content}`,
    component: <SignUpOne />,
  },
  {
    name: 'Sign Up Example Two',
    htmlCode: <SignUpTwo />,
    reactCode: `${signupArray[0].files[1].content}`,
    component: <SignUpTwo />,
  },
  {
    name: 'Sign Up Example Three',
    htmlCode: <SignUpThree />,
    reactCode: `${signupArray[0].files[2].content}`,
    component: <SignUpThree />,
  },
  {
    name: 'Sign Up Example Four',
    htmlCode: <SignUpFour />,
    reactCode: `${signupArray[0].files[3].content}`,
    component: <SignUpFour />,
  },
]

export default async function SignUp() {
  return (
    <div className="mx-auto max-w-7xl px-10 py-8 md:py-12 lg:px-0 lg:py-14">
      <h3 className="pb-4 font-heading text-2xl font-bold">Application UI/Sign Up</h3>
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
