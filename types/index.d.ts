declare module 'prettier-format'

export type NavItem = {
  title: string
  href: string
  disabled?: boolean
}

export type MainNavItem = NavItem

export type LandingPageConfig = {
  mainNav: MainNavItem[]
}

export type SiteConfig = {
  name: string
  description: string
  url: string
  ogImage?: string
}

export type Feature = {
  title: string
  description: string
  icon: JSX.Element
}

export type ComponentData = {
  title: string
  img: string
  href: string
}

export type ExampleProps = {
  name: string
  htmlCode: JSX.Element
  reactCode: string
  component: JSX.Element
  playLink: string
}
