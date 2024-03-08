import { Button } from "@/components/ui/button"
import Image from "next/image"

function Header() {
  return (
    <div className="p-1 shadow-sm flex  justify-between">
      <div className="flex items-center gap-8">
      <Image src='/logo.png' alt='logo' width={100} height={100}/>
      <div className="md:flex item-center gap-6 hidden">
        <h2 className="hover:scale-105 hover:text-primary cursor-pointer">Home</h2>
        <h2 className="hover:scale-105 hover:text-primary cursor-pointer">Services</h2>
        <h2 className="hover:scale-105 hover:text-primary cursor-pointer">About Us</h2>
      </div>
      
      </div>
      <div className="pt-6">
        <Button >Get Started</Button>
      </div>
    </div>
  )
}

export default Header
