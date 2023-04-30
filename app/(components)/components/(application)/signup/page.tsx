import { HeroBlock } from '@/components/hero-block'
import componentsArray from '@/app/api/application-components.json'
import {
  SignUpOne,
  SignUpTwo,
  SignUpThree,
  SignUpFour,
} from '@/components/examples/application-ui/SignUp'
import { ExampleProps } from '@/types'

const signupArray = componentsArray.filter((e) => e.category === 'application/signup')

const Examples: ExampleProps[] = [
  {
    name: 'Sign Up Example One',
    htmlCode: <SignUpOne />,
    reactCode: `${signupArray[0].files[0].content}`,
    component: <SignUpOne />,
    playLink: 'https://play.tailwindcss.com/yyQuNTtYOz',
  },
  {
    name: 'Sign Up Example Two',
    htmlCode: <SignUpTwo />,
    reactCode: `${signupArray[0].files[1].content}`,
    component: <SignUpTwo />,
    playLink: 'https://play.tailwindcss.com/lF9EeJwURJ',
  },
  {
    name: 'Sign Up Example Three',
    htmlCode: <SignUpThree />,
    reactCode: `${signupArray[0].files[2].content}`,
    component: <SignUpThree />,
    playLink: 'https://play.tailwindcss.com/xz3wKj61MG',
  },
  {
    name: 'Sign Up Example Four',
    htmlCode: <SignUpFour />,
    reactCode: `${signupArray[0].files[3].content}`,
    component: <SignUpFour />,
    playLink: 'https://play.tailwindcss.com/VUP4g4sUq0',
  },
]

export default async function SignUp() {
  return (
    <div className="mx-auto max-w-7xl px-3 py-8 md:py-12 lg:px-0 lg:py-14">
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
