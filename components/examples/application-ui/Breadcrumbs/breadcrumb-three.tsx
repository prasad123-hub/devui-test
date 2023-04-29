import React from 'react'
import { Home, Users, User } from 'lucide-react'

export function BreadcrumbThree() {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <a
            href="#"
            className="ml-1 inline-flex text-sm font-medium text-gray-800 hover:underline md:ml-2"
          >
            <Home className="mr-4 h-4 w-4" />
            Documentation
          </a>
        </li>
        <li>
          <div className="flex items-center">
            <span className="mx-2.5 text-gray-800">/</span>
            <span className="mx-2.5 text-gray-800">
              <Users className="h-4 w-4" />
            </span>
            <a href="#" className="ml-1 text-sm font-medium text-gray-800 hover:underline">
              Users
            </a>
          </div>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <span className="mx-2.5 text-gray-800">/</span>
            <span className="mx-2.5 text-gray-800">
              <User className="h-4 w-4" />
            </span>
            <span className="ml-1 text-sm font-medium text-gray-800 hover:underline">John Doe</span>
          </div>
        </li>
      </ol>
    </nav>
  )
}
