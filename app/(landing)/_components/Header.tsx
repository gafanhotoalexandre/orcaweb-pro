import Image from 'next/image'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { MobileMenu } from '@/app/(routes)/dashboard/_components/MobileMenu'

export function Header() {
  return (
    <div className="p-5 flex justify-between items-center border shadow-sm">
      <Image src="/logo.svg" alt="logo" width={160} height={100} />

      <SignedIn>
        <div className="flex items-center gap-3">
          <UserButton />
          <MobileMenu />
        </div>
      </SignedIn>

      <SignedOut>
        <Button asChild>
          <Link href="/sign-up">Começar</Link>
        </Button>
      </SignedOut>
    </div>
  )
}
