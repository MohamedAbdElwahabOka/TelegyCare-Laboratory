import { sessionStatus } from "./app/_Utils/session";
import { NextRequest, NextResponse } from "next/server";

// const protectedRoutes = ["/PatientID/123456", "/PatientID/654321", "/PatientID/6555555"];
const protectedRoutes = ["/PatientID/:path"];

export default function middleware(req) {
    if (!sessionStatus && protectedRoutes.includes(req.nextUrl.pathname)) {
        const absoluteURL = new URL("/", req.nextUrl.origin);
        return NextResponse.redirect(absoluteURL.toString());
    }
}