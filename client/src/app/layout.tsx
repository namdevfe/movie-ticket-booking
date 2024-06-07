// import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { ToastContainer } from 'react-toastify'
import './globals.scss'
import 'react-toastify/dist/ReactToastify.css'

const roboto = Roboto({
  subsets: ['vietnamese', 'latin'],
  weight: ['400', '500', '700', '900'],
  display: 'fallback'
})

// export const metadata: Metadata = {
//   title: 'Movie Ticket Booking',
//   description: 'Movie Ticket Booking built by Quốc Nam'
// }

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={roboto.className} suppressHydrationWarning>
        <ToastContainer position='bottom-right' theme='colored' />
        {children}
      </body>
    </html>
  )
}
