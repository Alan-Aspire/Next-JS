export default function RootLayout({children}: {children: React.ReactNode}) {
    return (<html>
      <body>
        <p>custom layout</p>
        {children}
      </body>
    </html>);
  }