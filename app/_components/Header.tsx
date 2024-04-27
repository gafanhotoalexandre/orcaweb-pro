import Image from 'next/image'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function Header() {
  return (
    <div className="p-5 flex justify-between items-center border shadow-sm">
      <Image src="/logo.svg" alt="logo" width={160} height={100} />

      <SignedIn>
        <UserButton />
      </SignedIn>

      <SignedOut>
        <Button asChild>
          <Link href="/sign-up">Começar</Link>
        </Button>
      </SignedOut>
    </div>
  )
}
