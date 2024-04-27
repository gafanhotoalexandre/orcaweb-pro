import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { ptBR } from '@clerk/localizations'

import './globals.css'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OrçaWeb',
  description: 'Controle seus gastos com facilidade e eficiência!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          formButtonPrimary:
            'bg-primary text-primary-foreground hover:bg-primary/90',
        },
      }}
      localization={ptBR}
    >
      <html lang="pt-br">
        <body className={outfit.className}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
