import "styles/tailwind.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="PT-BR">
      <body>{children}</body>
    </html>
  )
}
