import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";

import { getHeroText } from "@/lib/api";

// we're using async await below, so we need to make this an async
// this'll only work if it's a server component
export default async function Home() {
  const heroText = await getHeroText();

  console.log(heroText);

  return (
    // building out this hardcoded to start with
    <div>
      <Header /> 
      <main>
        <div className="h-[26rem] p-5 bg-[url(/images/hero.jpg)] bg-cover bg-center">
          <div className="container m-auto">
            <div className="bg-black/50 text-white p-5 backdrop-brightness-50 text-3xl max-w-120">
              <h1>{heroText.data.Content}</h1>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 pt-5 pb-5 max-w-screen-lg m-auto">
          <div className="bg-slate-200 p-5 flex flex-col gap-5">
            <h3>Service</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          </div>
          <div className="bg-slate-200 p-5 flex flex-col gap-5">
            <h3>Service</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          </div>
          <div className="bg-slate-200 p-5 flex flex-col gap-5">
            <h3>Service</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          </div>
          <div className="bg-slate-200 p-5 flex flex-col gap-5">
            <h3>Service</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          </div>
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
