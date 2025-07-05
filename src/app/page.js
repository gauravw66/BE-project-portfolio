import Image from "next/image";
import Hero from "../components/hero";
import Team from "../components/team";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <Team />
      <footer className="py-12 border-t border-neutral-800">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col items-center justify-center gap-8">
            <div className="flex items-center gap-8">
              <a 
                href="mailto:your.email@example.com" 
                className="text-neutral-400 hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
              {/* <a 
                href="https://github.com/your-team" 
                className="text-neutral-400 hover:text-white transition-colors duration-300"
              >
                GitHub
              </a>
              <a 
                href="/terms" 
                className="text-neutral-400 hover:text-white transition-colors duration-300"
              >
                Terms
              </a> */}
            </div>
            
            <p className="text-neutral-500">
              © 2024 PICT B.E. Project Team. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
