// services block
// grab the data, which has been Typed
import { getServices } from '@/lib/api'
import Link from "next/link";
import FoldInText from '@/components/FoldInText'

export default async function ServicesSection() {
  const services = await getServices()

  return (<div className="container m-auto mt-8">
    <div className="flex justify-between">
      <p className="body-font text-stone-500 text-xs uppercase">SERVICES</p>
      <Link href="/services"><p className="text-xs text-stone-500 uppercase">See all</p></Link>
    </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-5 pb-5 max-w-screen-lg m-auto">
        {/* map over the services */}
        {services.map((service) => (
          <FoldInText
            // things that are mapped need ID's. It's a formality.
            key={service.id}
            className="bg-stone-200 p-5 flex flex-col gap-5 text-lime-950"
          >
            <h3 className="body-font fw-800">{service.Title}</h3>
            <p className="body-font">{service.Content}</p>
          </FoldInText>
        ))}
      </div>
    </div>
  )
}
