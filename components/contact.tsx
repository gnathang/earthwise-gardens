// contact block
// import the fucntion that gets the info
import { getContactInfo } from "@/lib/api"

// make this async
export default async function Contact() {
  // grab the contact info from the api.ts
  const contactInfo = await getContactInfo();
  // return the block
  return <div className="bg-slate-200">
    <div className="container m-auto p-5">
      <div className="p-5">
        <p>{contactInfo.data.Email}</p>
        <p>{ contactInfo.data.Phone}</p>
      </div>
    </div>
  </div>
}