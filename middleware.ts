import { getAuthSession } from "@/lib/auth";
import { CONNECTED_URLS, NOT_CONNECTED_URLS, URLS } from "@/urls";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const NOT_CONNECTED_PAGES_URLS = Object.values(NOT_CONNECTED_URLS);
const CONNECTED_PAGES_URLS = Object.values(CONNECTED_URLS);

export async function middleware(request: NextRequest) {
  const session = await getAuthSession();
  const isLogged = !!session;

  const response = NextResponse.next();

  const isNotConnectedPage = NOT_CONNECTED_PAGES_URLS.some((page) =>
    request.nextUrl.pathname.startsWith(page)
  );

  if (isNotConnectedPage) {
    if (isLogged) {
      return NextResponse.redirect(new URL(URLS.home, request.url));
    }
    return response;
  }

  const isConnectedPage = CONNECTED_PAGES_URLS.some((page) =>
    request.nextUrl.pathname.startsWith(page)
  );

  if (isConnectedPage) {
    if (!isLogged) {
      return NextResponse.redirect(new URL(URLS.signin, request.url));
    }
    return response;
  }

  return response;
}
