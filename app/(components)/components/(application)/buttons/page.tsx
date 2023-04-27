import { HeroBlock } from '@/components/hero-block'
import { Button } from '@/components/ui/button'

export default async function Buttons() {
  return (
    <div className="mx-auto max-w-7xl px-10 py-8 md:py-12 lg:px-0 lg:py-14">
      <h3 className="pb-4 font-heading text-2xl font-bold">Marketing/Buttons</h3>
      <hr />

      <div className="py-8 lg:px-0">
        <div>
          <HeroBlock
            className="flex items-center justify-center space-x-2 py-10"
            htmlCode={`this is html5 code`}
            reactCode={`this is jsx code`}
            title="Primary Buttons"
          >
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
          </HeroBlock>
        </div>
      </div>
    </div>
  )
}
