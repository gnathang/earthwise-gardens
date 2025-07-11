import Footer from "@/components/footer";
import Header from "@/components/header";
import Contact from "@/components/contact";

// app/about/page.tsx
export default function AboutPage() {
  return (<>
    <Header /> 
      <main className="py-12">
        <Contact />
        
      </main>
    <Footer />
    </>
  );
}

