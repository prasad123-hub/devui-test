import { HeroBlock } from '@/components/hero-block'
import componentsArray from '@/app/api/page-examples.json'
import { ContactPageOne } from '@/components/examples/pages/contact/contact-page-1'
import { ContactPageTwo } from '@/components/examples/pages/contact/contact-page-2'
import { ExampleProps } from '@/types'

const pricingPagesArray = componentsArray.filter((e) => e.category === 'pages/pricing')

const Examples: ExampleProps[] = [
  {
    name: 'Contact Page One',
    htmlCode: <ContactPageOne />,
    reactCode: `${pricingPagesArray[0].files[0].content}`,
    component: <ContactPageOne />,
    playLink: 'https://play.tailwindcss.com/gfYzC3bq7V?layout=horizontal',
  },
  {
    name: 'Contact Page Two',
    htmlCode: <ContactPageTwo />,
    reactCode: `${pricingPagesArray[0].files[0].content}`,
    component: <ContactPageTwo />,
    playLink: 'https://play.tailwindcss.com/5s1yC9DEQF?layout=horizontal',
  },
]

export default async function ContactPages() {
  return (
    <div className="mx-auto max-w-7xl px-3 py-8 md:py-12 lg:px-0 lg:py-14">
      <h3 className="pb-4 font-heading text-2xl font-bold">Contact Pages</h3>
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
