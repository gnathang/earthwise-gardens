
import Footer from "@/components/footer";
import Header from "@/components/header";
import Services from "@/components/services";
import Contact from "@/components/contact";
import Hero from "@/components/hero";

// we're using async await below, so we need to make this an async
// this'll only work if it's a server component
export default async function Home() {

  return (
    // building out this hardcoded to start with
    <div className="bg-stone-100">
      <Header /> 
    
      <main className="py-12">      
        <Hero />
        <Services />
      </main>

      <Footer />
    </div>
  );
}
