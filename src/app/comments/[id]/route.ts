import { comments } from "../data";

export async function GET(request: Request, {params}: {params: Promise<{id: string}>}) {
    const {id} = await params;
    const findComment = comments.find((comment) => comment.id === parseInt(id));
    console.log(findComment);
    return Response.json(findComment);
}

export async function PATCH(request: Request, {params}: {params: Promise<{id: string}>}) {
    const {id} = await params;
    const bodyData = await request.json();
    const {text} = bodyData;
    const comment = comments.find((comment) => comment.id === parseInt(id));
    if(!comment) return new Response(JSON.stringify({error: "comment not found"}))
    comment.text = text;
    return Response.json(comment);
}


export async function DELETE(request: Request, {params}: {params: Promise<{id: string}>}) {
    const {id} = await params;
    const commentIndex = comments.findIndex((comment) => comment.id === parseInt(id));
    const deletedComment = comments[commentIndex];
    comments.splice(commentIndex, 1);
    return Response.json(deletedComment);
}