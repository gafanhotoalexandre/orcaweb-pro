import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return <SignIn fallbackRedirectUrl="/dashboard" path="/sign-in" />
}
