
import { getAboutContent } from "@/lib/api";
import FoldInText from '@/components/FoldInText'

export default async function About() {
  const aboutText = await getAboutContent()
  return <div className="container m-auto py-12 md:py-24">

    <FoldInText className="md:w-120">
      <h1 className="body-font uppercase text-xs mb-3 text-stone-500">{aboutText.data.Title}</h1>
      <p className="body-text text-s">{ aboutText.data.Content}</p>
    </FoldInText>

  </div>
  
}
        