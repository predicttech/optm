import Link from "next/link";
import { notFound } from "next/navigation";
import { findNeighbour } from "fumadocs-core/page-tree";

import { mdxComponents } from "@/mdx-components";
import { biomarkersSource } from "@/lib/source";
import { DocsTableOfContents } from "@/components/docs/docs-toc";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const revalidate = false;
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return biomarkersSource.generateParams();
}

interface DocPageProps {
  params: Promise<{
    slug: string[];
  }>;
}

async function getDocFromParams({ params }: DocPageProps) {
  const { slug } = await params;

  const page = biomarkersSource.getPage(slug);

  if (!page) notFound();

  const doc = page.data;

  if (!doc.title || !doc.description) {
    notFound();
  }

  return { doc, page };
}

export default async function DocPage({ params }: DocPageProps) {
  const { doc, page } = await getDocFromParams({ params });

  const MDX = doc.body;

  const neighbours = findNeighbour(
    biomarkersSource.pageTree,
    page.url
  );

  return (
    <div
      data-slot="docs"
      className="flex items-stretch text-[1.05rem] sm:text-[15px] xl:w-full"
    >
      {/* Content */}
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex ml-auto gap-2 mt-8 items-center">
          {neighbours.previous && (
            <Button className={"shadow-none"} variant="outline"  >
              <Link className="flex items-center" href={neighbours.previous.url}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                {neighbours.previous.name}
              </Link>
            </Button>
          )}

          {neighbours.next && (
            <Button
              variant="outline"
              className="shadow-none"

            >
              <Link className="flex items-center" href={neighbours.next.url}>
                {neighbours.next.name}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          )}
        </div>
        <div className="mx-auto flex w-full max-w-3xl min-w-0 flex-1 flex-col gap-8 px-4 py-6 text-neutral-800 md:px-0 lg:py-8 dark:text-neutral-300">
          <div className="w-full flex-1 *:data-[slot=alert]:first:mt-0">
            <MDX components={mdxComponents} />
          </div>

          {/* Previous / Next */}
          <div className="mt-12 flex items-center border-t pt-6">
            {neighbours.previous && (
              <Button className={"shadow-none"} variant="outline"  >
                <Link className="flex items-center" href={neighbours.previous.url}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  {neighbours.previous.name}
                </Link>
              </Button>
            )}

            {neighbours.next && (
              <Button
                variant="outline"
                className="ml-auto shadow-none"

              >
                <Link className="flex items-center" href={neighbours.next.url}>
                  {neighbours.next.name}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>


      <aside className="sticky hidden top-20 overflow-auto h-[800px] w-72 shrink-0 xl:block">
        {doc.toc?.length ? (
          <div className="overflow-y-auto px-6 py-8">
            <DocsTableOfContents toc={doc.toc} />
          </div>
        ) : null}
      </aside>
    </div>
  );
}