import type { conditionsSource } from "@/lib/source"

export type PageTreeRoot = typeof conditionsSource.pageTree;
export type PageTreeNode = PageTreeRoot["children"][number];
export type PageTreeFolder = Extract<PageTreeNode, { type: "folder" }>;
export type PageTreePage = Extract<PageTreeNode, { type: "page" }>;

// Recursively find all pages in a folder tree.
export function getAllPagesFromFolder(folder: PageTreeFolder): PageTreePage[] {
  const pages: PageTreePage[] = []

  for (const child of folder.children) {
    if (child.type === "page") {
      pages.push(child)
    } else if (child.type === "folder") {
      pages.push(...getAllPagesFromFolder(child))
    }
  }

  return pages
}

export function getPagesFromFolder(folder: PageTreeFolder): PageTreePage[] {
  return getAllPagesFromFolder(folder).filter(
    (page) => !page.url.endsWith("/conditions")
  );
}

// Get current base (radix or base) from pathname.
export function getCurrentBase(pathname: string): string {
  const baseMatch = pathname.match(/\/conditions\/conditions\/(radix|base)\//)
  return baseMatch ? baseMatch[1] : "base" // Default to base.
}