import { NextResponse } from "next/server";
import { jwtVerify } from "jose";


export async function middleware(request) {
//   const jwt = request.cookies.get("mytokenName");

//   if (jwt === undefined) {
//     return NextResponse.redirect(new URL("/", request.url));
//   }
//   if (process.env.ID !== undefined) {
//     try {
//       const { payload } = await jwtVerify(
//         jwt,
//         new TextEncoder().encode(process.env.ID)
//       );
//       return NextResponse.next();
//     } catch (error) {
//       console.log(error);
//       return NextResponse.redirect(new URL("/", request.url));
//     }
//   }
}


