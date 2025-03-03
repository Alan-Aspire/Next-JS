export default async function reviewDetail({params}: {params: {reviewId: string}}) {
    const {reviewId} = await params;
    return <h1>Review Detali page {reviewId} </h1>
}