import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// export function middleware(request: NextRequest) {
    // return NextResponse.redirect(new URL("/", request.url))

    // if request url = https://staging.example.com/api/login - https://staging.example.com/
// }

// config object to tell next js to only apply middleware for /profile route
// export const config = {
//     matcher: "/profile",
// }

export function middleware(request: NextRequest) {
    if(request.nextUrl.pathname === "/profile") {
        return NextResponse.redirect(new URL("/hello", request.url))
    }
}