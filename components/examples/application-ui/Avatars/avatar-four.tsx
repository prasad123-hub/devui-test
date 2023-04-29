import React from 'react'

export function CircularAvatarStack() {
  return (
    <>
      <div className="isolate flex -space-x-2">
        <img
          className="relative z-30 inline-block h-10 w-10 rounded-full ring-2 ring-white"
          src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
          alt="Dan_Abromov"
        />
        <img
          className="relative z-20 inline-block h-10 w-10 rounded-full ring-2 ring-white"
          src="https://res.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/smokhfs2uevnppc2bmwl"
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
