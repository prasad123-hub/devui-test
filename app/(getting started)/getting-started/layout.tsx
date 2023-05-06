import Link from 'next/link'

import { cn } from '@/lib/utils'
import { MainNav } from '@/components/main-nav'
import { landingConfig } from '@/config/landing'
import { buttonVariants } from '@/components/ui/button'
import { SiteFooter } from '@/components/site-footer'
import { CommandMenu } from '@/components/command-search'

interface LandingPageLayoutProps {
  children: React.ReactNode
}

export default async function LandingPageLayout({ children }: LandingPageLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container sticky top-0 z-40 border-b-2 bg-white">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav items={landingConfig.mainNav} />
          <nav>
            <CommandMenu />
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  )
}