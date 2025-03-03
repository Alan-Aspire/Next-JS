export default function RootLayout({children}: {children: React.ReactNode}) {
    return (<html>
      <body>
        {children}
        <p>custom layout of specific page</p>
      </body>
    </html>);
  }