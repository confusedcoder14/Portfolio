import "/app/globals.css" /* absolute path so Next.js loads CSS, not JS */

export const metadata = {
  title: "Sumit Kumar | Portfolio",
  description: "Frontend Developer & UI Engineer Portfolio",
  generator: "v0.dev",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
