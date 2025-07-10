// functional component for footer  
export default function Footer() {
   return <footer className="bg-slate-200">
      <div className="container m-auto p-5">
         &copy; Earthwise Gardens {new Date().getFullYear()}
      </div>
   </footer>
}