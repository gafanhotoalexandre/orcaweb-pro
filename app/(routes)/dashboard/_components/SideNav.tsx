'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { UserButton } from '@clerk/nextjs'

import { navLinks } from '@/constants'

export default function SideNav() {
  const path = usePathname()
  return (
    <div className="h-screen p-5 shadow-md">
      <Image src="/logo.svg" alt="logo" width={160} height={100} />

      <nav>
        <ul className="mt-5 space-y-2">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                className={`flex gap-2 items-center text-gray-500 font-medium p-5 rounded-md hover:text-primary hover:bg-blue-100 hover:shadow-sm transition ${
                  path === link.path && 'text-primary bg-blue-100'
                }`}
                href={link.path}
              >
                <link.icon />
                <h2>{link.name}</h2>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="fixed bottom-10 left-5 p-5 flex gap-2 items-center">
        <UserButton />
        Perfil
      </div>
    </div>
  )
}
