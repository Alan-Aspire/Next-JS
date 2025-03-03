export default async function productDetail({ params }: {params: {productId: string}}) {
    const {productId} = await params;
    return <h1>Product Details Page {productId}</h1>
}