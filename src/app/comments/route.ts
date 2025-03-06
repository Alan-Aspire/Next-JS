import { type NextRequest } from "next/server";
import {comments} from "./data";

// export async function GET() {
//     return Response.json(comments);
// }

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;

    // http://localhost:3000/comments?query=first
    
    const query = searchParams.get("query");
    const filteredComments = query 
      ? comments.filter((comment) => comment.text.includes(query))
      : comments;
    return Response.json(filteredComments);
}


export async function POST(request: Request) {
    const comment = await request.json();
    const newComment = {
        id: comments.length + 1,
        text: comment.text
    }
    comments.push(newComment);
    return new Response(JSON.stringify(newComment), {
        headers: {"content-type": "application/json"},
        status: 201
    })
}

