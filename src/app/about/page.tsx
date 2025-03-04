import Link from "next/link"

export const metadata = {
    title: "About Page",
    description: "metadata of about page"
};
  

export default function about() {
    return (
        <>
            <Link href="/blog">Blog</Link>
            <h1>About Page</h1>
        </>
        
    )
}