function randomNumber(count: number): number {
    return Math.floor(Math.random() * count);
}


export default async function reviewDetail({params}: {params: {reviewId: string}}) {
    const {reviewId} = await params;
    const random = randomNumber(2);
    if(random === 1) throw new Error("Error loading review")
    return <h1>Review Detali page {reviewId} </h1>
}