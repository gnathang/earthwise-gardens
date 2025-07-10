import Link from "next/link";

// functional component for header
export default function Header() {
  	return <header className="bg-slate-200">
      <div className="container m-auto p-5">
        	<div className="flex justify-between m-auto max-w-screen">
          	<Link href="/">E A R T H W I S E G A R D E N S</Link>
				<div className="menuWrap">
					<ul className="flex gap-5">
						<li>
							<Link href="/">About</Link>
						</li>
						<li>
							<Link href="/">Gallery</Link>
						</li>
						<li>
							<Link href="/">Contact</Link>
						</li>
					</ul>
				</div>
        	</div>
      </div>
	</header>
}