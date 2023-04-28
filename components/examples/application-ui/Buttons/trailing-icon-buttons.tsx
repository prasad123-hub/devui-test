import * as React from 'react'
import { ArrowRight } from 'lucide-react'

export function TrailingIconButtons() {
  return (
    <button
      type="button"
      className="inline-flex items-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white hover:bg-black/80"
    >
      Button Text
      <ArrowRight className="ml-2 h-4 w-4" />
    </button>
  )
}
