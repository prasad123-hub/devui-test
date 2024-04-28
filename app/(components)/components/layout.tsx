import { MainNav } from '@/components/main-nav'
import { landingConfig } from '@/config/landing'
import { SiteFooter } from '@/components/site-footer'
import { CommandMenu } from '@/components/command-search'
import { UserButton } from '@clerk/nextjs'

interface LandingPageLayoutProps {
  children: React.ReactNode
}

export default async function LandingPageLayout({ children }: LandingPageLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container sticky top-0 z-40 border-b-2 bg-white">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav items={landingConfig.mainNav} />
          <div className="flex items-center space-x-4">
            <CommandMenu />
            <UserButton />
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  )
}
