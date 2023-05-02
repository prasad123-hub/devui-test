import { HeroBlock } from '@/components/hero-block'
import componentsArray from '@/app/api/marketing-components.json'
import {
  TestimonialOne,
  TestimonialTwo,
  TestimonialThree,
} from '@/components/examples/marketing/testimonial'
import { ExampleProps } from '@/types'

const testmonialArray = componentsArray.filter((e) => e.category === 'marketing/testimonial')

const Examples: ExampleProps[] = [
  {
    name: 'Testimonial 1',
    htmlCode: <TestimonialOne />,
    reactCode: `${testmonialArray[0].files[0].content}`,
    component: <TestimonialOne />,
    playLink: 'https://play.tailwindcss.com/ikH6PphOUr',
  },
  {
    name: 'Testimonial 2',
    htmlCode: <TestimonialTwo />,
    reactCode: `${testmonialArray[0].files[1].content}`,
    component: <TestimonialTwo />,
    playLink: 'https://play.tailwindcss.com/6kf9jWoaBV',
  },
  {
    name: 'Testimonial 3',
    htmlCode: <TestimonialThree />,
    reactCode: `${testmonialArray[0].files[2].content}`,
    component: <TestimonialThree />,
    playLink: 'https://play.tailwindcss.com/2NACRC23KQ',
  },
]

export default async function Footers() {
  return (
    <div className="mx-auto max-w-7xl px-3 py-8 md:py-12 lg:px-0 lg:py-14">
      <h3 className="pb-4 font-heading text-2xl font-bold">Marketing/Testimonials</h3>
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
