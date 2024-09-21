import type { Metadata } from 'next'
import { Tajawal } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"

const tajawal = Tajawal({ subsets: ['arabic'] })

export const metadata: Metadata = {
  title: 'منصة المساعدة في الواجبات المنزلية',
  description: 'احصل على المساعدة في واجباتك الدراسية بسهولة وسرعة',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={tajawal.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}