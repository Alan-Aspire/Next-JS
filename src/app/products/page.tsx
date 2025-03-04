import Link from "next/link"

export default function() {
    return (
        <div>
            <Link href="/">Home</Link>
            <h1>Products</h1>
            <h2><Link href="products/1">product 1</Link></h2>
            <h2><Link href="products/2">product 2</Link></h2>
            <h2><Link href="products/3" replace>product 3</Link></h2>
        </div>

    );
}