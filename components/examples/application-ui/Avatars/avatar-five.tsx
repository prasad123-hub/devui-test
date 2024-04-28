import React from 'react'

export function AvatarWithText() {
  return (
    <div className="flex items-center space-x-2">
      <img
        className="inline-block h-12 w-12 rounded-full"
        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
        alt="Dan_Abromov"
      />
      <span className="flex flex-col">
        <span className="text-sm font-medium text-gray-900">Dan Abromov</span>
        <span className="text-sm font-medium text-gray-500">@dan_abromov</span>
      </span>
    </div>
  )
}
