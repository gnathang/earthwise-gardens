import About from "@/components/about";
import Footer from "@/components/footer";
import Header from "@/components/header";


// app/about/page.tsx
export default async function AboutPage() {

  return (<>
    <Header /> 
      <main className="py-12">
        <About />
      </main>
    <Footer />
    </>
  );
}

