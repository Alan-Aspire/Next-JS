import {Metadata} from "next";


type Props = {
    params: {
        productId: string
    }
}


export const generateMetadata = async({params}: Props): Promise<Metadata> => {
    const {productId} = await params;
    return {
        title: `Product ${productId}`
    }

}



export default async function productDetail({ params }: Props) {
    const {productId} = await params;
    return <h1>Product Details Page {productId}</h1>
}