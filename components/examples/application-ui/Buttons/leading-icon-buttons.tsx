import * as React from 'react'
import { ArrowLeft } from 'lucide-react'

export function LeadingIconButtons() {
  return (
    <button
      type="button"
      className="inline-flex items-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white hover:bg-black/80"
    >
      <ArrowLeft className="mr-2 h-4 w-4" />
      Button Text
    </button>
  )
}
