import { getAuthSession } from "@/lib/auth";
import { urls } from "@/urls";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const CONNECTED_PAGES = [urls.home, urls.teams.list, urls.games.list];

const NOT_CONNECTED_PAGES = [urls.signin, urls.signup];

export async function middleware(request: NextRequest) {
  const session = await getAuthSession();
  const isLogged = !!session;

  const response = NextResponse.next();

  const isNotConnectedPage = NOT_CONNECTED_PAGES.some((page) =>
    request.nextUrl.pathname.startsWith(page)
  );

  if (isNotConnectedPage) {
    if (isLogged) {
      return NextResponse.redirect(new URL(urls.home, request.url));
    }
    return response;
  }

  const isConnectedPage = CONNECTED_PAGES.some((page) =>
    request.nextUrl.pathname.startsWith(page)
  );

  if (isConnectedPage) {
    if (!isLogged) {
      return NextResponse.redirect(new URL(urls.signin, request.url));
    }
    return response;
  }

  return response;
}
