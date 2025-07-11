// hero block
import FoldInText from '@/components/FoldInText'
import { getHeroText } from "@/lib/api";


export default async function Hero() {
  const heroText = await getHeroText();
  
  return <>
    <div className="container-large m-auto hero-image h-[18rem] md:h-[26rem] p-5 bg-[url(/images/hero.jpg)] bg-cover bg-center" />

    <div className="container m-auto">
      <FoldInText className="pt-8 pb-8 max-w-200">
          <p className="body-font text-xs uppercase text-stone-500 pb-2">{heroText.data.Title}</p>
          <h1 className="text-stone-600 heading-font text-2xl m:text-3xl">{heroText.data.Content}</h1>
        </FoldInText>
    </div>
  </>
}