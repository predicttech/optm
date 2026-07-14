 
import { notFound } from "next/navigation"
import { mdxComponents } from "@/mdx-components"  
  
import { biomarkersSource } from "@/lib/source"  

export const revalidate = false
export const dynamic = "force-static"
export const dynamicParams = false

export function generateStaticParams() {
  return biomarkersSource.generateParams()
}

interface DocPageProps {
  params: Promise<{
    slug: string[]
  }>
}

async function getDocFromParams({ params }: DocPageProps) {
  const { slug } = await params
  const page = biomarkersSource.getPage(slug)
  if (!page) notFound()
  const doc = page.data
  if (!doc.title || !doc.description) {
    notFound()
  }

  return { doc, page }
}

 
export default async function DocPage({ params }: DocPageProps) {
  const { doc, page } = await getDocFromParams({ params })
  const MDX = doc.body
   
   
  return (
    <>
      
      <div
        data-slot="docs"
        className="flex items-stretch text-[1.05rem] sm:text-[15px] xl:w-full"
      >
        <div className="flex min-w-0 flex-1 flex-col">
          <div className="mx-auto flex w-full max-w-3xl min-w-0 flex-1 flex-col gap-8 px-4 py-6 text-neutral-800 md:px-0 lg:py-8 dark:text-neutral-300">
             
            <div className="w-full flex-1 *:data-[slot=alert]:first:mt-0">
              <MDX components={mdxComponents} />
            </div>
          </div>
           
        </div>
         
      </div>
    </>
  )
}