import * as React from 'react'
import { Plus } from 'lucide-react'

export function IconButtons() {
  return (
    <button
      type="button"
      className="rounded-full bg-black px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
      <Plus className="h-4 w-4" />
    </button>
  )
}
