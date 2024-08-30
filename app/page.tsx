import Canvas from "@/components/Canvas";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
      <div className="w-full h-full bg-[#1B232F]">
        <Canvas />
        <Navbar />
        <Hero />
      </div>
  )
}
