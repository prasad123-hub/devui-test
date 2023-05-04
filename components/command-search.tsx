'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import { DialogProps } from '@radix-ui/react-alert-dialog'

import { Circle, File, Laptop, Moon, SunMedium } from 'lucide-react'

import {
  applicationComponentData,
  marketingComponentData,
  ecommerceComponentData,
} from '@/config/data'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command'

export function CommandMenu({ ...props }: DialogProps) {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false)
    command()
  }, [])

  return (
    <>
      <Button
        variant="outline"
        className={cn(
          'relative h-9 w-full justify-start rounded-[0.5rem] text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64'
        )}
        onClick={() => setOpen(true)}
        {...props}
      >
        <span className="hidden lg:inline-flex">Search Components...</span>
        <span className="inline-flex lg:hidden">Search...</span>
        <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Application UI Components">
            {applicationComponentData.map((component) => (
              <CommandItem
                key={component.href}
                onSelect={() => {
                  runCommand(() => router.push(`/components/${component.href}` as string))
                }}
              >
                <File className="mr-2 h-4 w-4" />
                {component.title}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Marketing Components">
            {marketingComponentData.map((component) => (
              <CommandItem
                key={component.href}
                onSelect={() => {
                  runCommand(() => router.push(`/components/${component.href}` as string))
                }}
              >
                <File className="mr-2 h-4 w-4" />
                {component.title}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Ecommerce Components">
            {ecommerceComponentData.map((component) => (
              <CommandItem
                key={component.href}
                onSelect={() => {
                  runCommand(() => router.push(`/components/${component.href}` as string))
                }}
              >
                <File className="mr-2 h-4 w-4" />
                {component.title}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
