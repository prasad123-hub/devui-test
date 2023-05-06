import { HeroBlock } from '@/components/hero-block'
import componentsArray from '@/app/api/page-examples.json'
import { BlogPageOne } from '@/components/examples/pages/blog/blog-page-1'
import { BlogPageTwo } from '@/components/examples/pages/blog/blog-page-2'
import { ExampleProps } from '@/types'

const blogPagesArray = componentsArray.filter((e) => e.category === 'pages/blog')

const Examples: ExampleProps[] = [
  {
    name: 'Blog Page One',
    htmlCode: <BlogPageOne />,
    reactCode: `${blogPagesArray[0].files[0].content}`,
    component: <BlogPageOne />,
    playLink: 'https://play.tailwindcss.com/gfYzC3bq7V?layout=horizontal',
  },
  {
    name: 'Blog Page Two',
    htmlCode: <BlogPageTwo />,
    reactCode: `${blogPagesArray[0].files[1].content}`,
    component: <BlogPageTwo />,
    playLink: 'https://play.tailwindcss.com/gfYzC3bq7V?layout=horizontal',
  },
]

export default async function BlogPages() {
  return (
    <div className="mx-auto max-w-7xl px-3 py-8 md:py-12 lg:px-0 lg:py-14">
      <h3 className="pb-4 font-heading text-2xl font-bold">Blog Pages</h3>
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
