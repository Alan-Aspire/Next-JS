export default function ProductLayout({children}: {children: React.ReactNode}) {
    return (
      <>
        {children}
        <p>custom layout of specific page</p>
      </>
    );
  }