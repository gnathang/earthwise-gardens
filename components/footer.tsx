// functional component for footer  
// grab the contact info
import { getContactInfo } from "@/lib/api"

export default async function Footer() {
   const contactInfo = await getContactInfo();
   return <footer className="bg-stone-100 fixed w-full z-[99] bottom-0">
      <div className="container-large m-auto py-3 body-font flex justify-between">
         <p className="text-xs">&copy; Earthwise Gardens {new Date().getFullYear()}</p>
         <div className="body-font flex gap-4">
            <p className="text-xs">{contactInfo.data.Email}</p>
            <p className="text-xs">{ contactInfo.data.Phone}</p>
         </div>
      </div>
   </footer>
}