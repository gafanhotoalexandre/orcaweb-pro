'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import Link from 'next/link'
import { navLinks } from '@/constants'

export function MobileMenu() {
  const path = usePathname()
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            size={'icon'}
            variant="outline"
            className="border-[#7985AC] border-none"
          >
            <Image
              className="block md:hidden"
              src="/icons/menu.svg"
              width={32}
              height={32}
              alt="menu mobile"
            />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <Image src="/logo.svg" alt="logo" width={160} height={100} />
          </SheetHeader>
          {/* <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader> */}

          <nav>
            <ul className="mt-5 space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <SheetClose asChild>
                    <Link
                      className={`flex gap-2 items-center text-gray-500 font-medium p-5 rounded-md hover:text-primary hover:bg-blue-100 hover:shadow-sm transition ${
                        path === link.path && 'text-primary bg-blue-100'
                      }`}
                      href={link.path}
                    >
                      <link.icon />
                      <h2>{link.name}</h2>
                    </Link>
                  </SheetClose>
                </li>
              ))}
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}
