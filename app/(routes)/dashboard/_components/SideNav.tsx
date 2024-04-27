import Image from 'next/image'
import Link from 'next/link'
import { UserButton } from '@clerk/nextjs'

import { navLinks } from '@/constants'

export default function SideNav() {
  return (
    <div className="h-screen p-5 shadow-md">
      <Image src="/logo.svg" alt="logo" width={160} height={100} />

      <nav>
        <ul className="mt-5">
          {navLinks.map((link) => (
            <li className="mt-2" key={link.id}>
              <Link
                className="flex gap-2 items-center text-gray-500 font-medium p-5 rounded-md hover:text-primary hover:bg-blue-100 hover:shadow-sm transition"
                href=""
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
