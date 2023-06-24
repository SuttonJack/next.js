import Registry from './registry'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Registry>{children}</Registry>
      </body>
    </html>
  )
}
