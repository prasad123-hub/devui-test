'use client'

import * as React from 'react'
import { Icons } from '@/components/icons'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from './ui/button'
import { cn, format } from '@/lib/utils'
import { CodeEditor } from './code-editor'
import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard'
import { renderToStaticMarkup } from 'react-dom/server'

interface HeroBlockProps {
  className?: string
  children?: React.ReactNode
  htmlCode: JSX.Element
  reactCode: string
  title: string
}

export function HeroBlock({ className, children, htmlCode, reactCode, title }: HeroBlockProps) {
  const [value, copy] = useCopyToClipboard()
  const [variant, setVariant] = React.useState('html')
  const [previewMode, setPreviewMode] = React.useState(true)
  const [hasCopied, setHasCopied] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false)
    }, 2000)
  }, [hasCopied])

  const copyToClipboard = React.useCallback(
    (value: string) => {
      copy(value)
      setHasCopied(true)
    },
    [copy]
  )

  return (
    <div className="my-8 md:my-12 lg:my-14">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-heading text-lg">{title}</h3>
        </div>
        <div className="flex items-center space-x-4">
          {/* Buttons */}
          <div className="">
            <span className="isolate inline-flex rounded-md shadow-sm">
              <button
                onClick={() => setPreviewMode(true)}
                type="button"
                className="relative inline-flex items-center rounded-l-md bg-white px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
              >
                <span className="sr-only">Previous</span>
                <span className="flex items-center space-x-2 text-sm font-semibold text-black">
                  <Icons.eye className="h-4 w-4" />
                  <span>Preview</span>
                </span>
              </button>
              <button
                onClick={() => setPreviewMode(false)}
                type="button"
                className="relative -ml-px inline-flex items-center rounded-r-md bg-white px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
              >
                <span className="sr-only">Next</span>
                <span className="flex items-center space-x-2 text-sm font-semibold text-black">
                  <Icons.update className="h-4 w-4" />
                  <span>Code</span>
                </span>
              </button>
            </span>
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  {variant.toUpperCase()} <Icons.chevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-10" align="end">
                <DropdownMenuRadioGroup value={variant} onValueChange={setVariant}>
                  <DropdownMenuRadioItem value="html">Html</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="react">React</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="ml-2 rounded-md p-2 hover:bg-gray-200">
            {hasCopied ? (
              <Icons.check className="h-4 w-4" />
            ) : (
              <Icons.copy
                onClick={() =>
                  copyToClipboard(
                    variant === 'html' ? format(renderToStaticMarkup(htmlCode)) : reactCode
                  )
                }
                className="h-4 w-4"
              />
            )}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl">
        {previewMode && <PreviewCard className={className}>{children}</PreviewCard>}
        {!previewMode && (
          <CodeEditor
            selectedFile={variant}
            htmlCode={format(renderToStaticMarkup(htmlCode))}
            reactCode={reactCode}
          />
        )}
      </div>
    </div>
  )
}

interface PreviewCardProps {
  className?: string
  children: React.ReactNode
}

const PreviewCard = ({ children, className }: PreviewCardProps) => {
  return <div className={cn('mt-4 min-h-min w-full rounded-md border', className)}>{children}</div>
}
