import {type NextRequest} from "next/server"
import {headers, cookies} from "next/headers"


export async function GET(request: NextRequest) {
    // const requestHeaders = new Headers(request.headers);
    // console.log(requestHeaders.get("Authorization"));

    const headerList = await headers();
    console.log(headerList.get("Authorization"));

    // const theme = request.cookies.get("theme");
    // console.log(theme);

    const cookieStore = await cookies();
    cookieStore.set("resultPage", "20");

    console.log(cookieStore.get("resultPage"))

    return new Response("<h1>profile api data</h1>",{
        headers: {
            "content-type": "text/html",
            "Set-Cookie": "theme=dark"
        }
    }
  );
}