import React from 'react'

export function CircularAvatarStack() {
  return (
    <>
      <div className="isolate flex -space-x-2">
        <img
          className="relative z-30 inline-block h-10 w-10 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
          alt="Dan_Abromov"
        />
        <img
          className="relative z-20 inline-block h-10 w-10 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
          alt="Guillermo_Rauch"
        />
        <img
          className="relative z-10 inline-block h-10 w-10 rounded-full ring-2 ring-white"
          src="https://leerob.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.b1d1472f.jpg&w=256&q=75"
          alt="Lee_Robinson"
        />
        <img
          className="relative z-0 inline-block h-10 w-10 rounded-full ring-2 ring-white"
          src="https://nextjs.org/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F35255%2F1665059775-delba.jpg&w=640&q=75"
          alt="Delba"
        />
      </div>
    </>
  )
}
