import {Button} from "@/components/ui/button";
import Image from "next/image";

export default function Navbar() {
  const img = "https://s3cdn.tabs.no/skole/678/img/sm-logo-84b9633a20793111ed2cd9f3450303f3.png";
  return (
    <header className="bg-blue-200">
      <div className="max-w-7xl mx-auto p-8 flex justify-between items-center">
        <div className="flex items-center">
          <Image src={img} width={200} alt={"Logo"} height={200}/>
          <h1 className="text-xl font-bold">Sveins trafikkskole</h1>
        </div>
        <nav className="flex gap-4">
          <a href="#" className="text-blue-900">Om oss</a>
          <a href="#" className="text-blue-900">Kontakt</a>
          <Button variant="outline">Logg inn</Button>
        </nav>
      </div>
    </header>
  )
}
