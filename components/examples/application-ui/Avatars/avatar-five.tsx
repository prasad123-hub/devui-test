import React from 'react'

export function AvatarWithText() {
  return (
    <div className="flex items-center space-x-2">
      <img
        className="inline-block h-12 w-12 rounded-full"
        src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
        alt="Dan_Abromov"
      />
      <span className="flex flex-col">
        <span className="text-sm font-medium text-gray-900">Dan Abromov</span>
        <span className="text-sm font-medium text-gray-500">@dan_abromov</span>
      </span>
    </div>
  )
}
