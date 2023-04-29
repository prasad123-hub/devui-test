import React from 'react'

export function CircularAvatarWithNotification() {
  return (
    <div className="space-x-6">
      <span className="relative inline-block">
        <img
          className="h-6 w-6 rounded-full"
          src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
          alt="Dan_Abromov"
        />
        <span className="absolute bottom-0 right-0 block h-1.5 w-1.5 rounded-full bg-green-600 ring-2 ring-white"></span>
      </span>
      <span className="relative inline-block">
        <img
          className="h-8 w-8 rounded-full"
          src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
          alt="Dan_Abromov"
        />
        <span className="absolute bottom-0 right-0 block h-2 w-2 rounded-full bg-green-600 ring-2 ring-white"></span>
      </span>
      <span className="relative inline-block">
        <img
          className="h-10 w-10 rounded-full"
          src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
          alt="Dan_Abromov"
        />
        <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-600 ring-2 ring-white"></span>
      </span>
      <span className="relative inline-block">
        <img
          className="h-12 w-12 rounded-full"
          src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
          alt="Dan_Abromov"
        />
        <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-600 ring-2 ring-white"></span>
      </span>
      <span className="relative inline-block">
        <img
          className="h-14 w-14 rounded-full"
          src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
          alt="Dan_Abromov"
        />
        <span className="absolute bottom-0 right-0 block h-3.5 w-3.5 rounded-full bg-green-600 ring-2 ring-white"></span>
      </span>
    </div>
  )
}
