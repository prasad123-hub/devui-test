import Link from 'next/link'

export function SiteFooter() {
  return (
    <div className="mx-auto max-w-7xl px-10 py-6 text-start md:px-0">
      <h6>
        Build With{' '}
        <Link href="https://nextjs.org">
          <strong>NextJs 13</strong>
        </Link>
        ,
        <Link href="https://tailwindcss.com/">
          <strong>TailwindCSS</strong>
        </Link>
        . Illustrations by{' '}
        <Link href="https://popsy.co">
          <strong>Popsy</strong>
        </Link>
      </h6>
    </div>
  )
}
