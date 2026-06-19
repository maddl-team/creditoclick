import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  return handleRevalidate(request);
}

export async function POST(request: NextRequest) {
  return handleRevalidate(request);
}

async function handleRevalidate(request: NextRequest) {
  const url = new URL(request.url);
  const secret = url.searchParams.get("secret") || request.headers.get("x-revalidate-secret");

  if (!secret || secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  let slug: string | null = url.searchParams.get("slug");
  let categorySlug: string | null = url.searchParams.get("categorySlug");

  if (request.method === "POST") {
    try {
      const body = (await request.json()) as { slug?: string; categorySlug?: string };
      if (body.slug) slug = body.slug;
      if (body.categorySlug) categorySlug = body.categorySlug;
    } catch {
      // Ignore body parse error: query params may already contain payload.
    }
  }

  const paths = ["/blog"];
  revalidatePath("/blog");

  if (slug) {
    const postPath = `/blog/${slug}`;
    revalidatePath(postPath);
    paths.push(postPath);
  }

  if (categorySlug) {
    const categoryPath = `/blog/categoria/${categorySlug}`;
    revalidatePath(categoryPath);
    paths.push(categoryPath);
  }

  return NextResponse.json({
    revalidated: true,
    now: Date.now(),
    paths,
  });
}
