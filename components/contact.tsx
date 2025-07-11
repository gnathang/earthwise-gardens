// contact block
// import the fucntion that gets the info
import { getContactInfo } from "@/lib/api"

// grab our basic animation
import FoldInText from '@/components/FoldInText'

// make this async
export default async function Contact() {
  // grab the contact info from the api.ts
  const contactInfo = await getContactInfo();
  // return the block
  return <div className="container m-auto py-12 md:py-24">
    <FoldInText className="md:w-120">
      <h1 className="body-font uppercase text-xs mb-3 text-stone-500">Contact</h1>
      <p className="body-text text-s">{ contactInfo.data.Email}</p>
      <p className="body-text text-s">{ contactInfo.data.Phone}</p>
    </FoldInText>
  </div>
}