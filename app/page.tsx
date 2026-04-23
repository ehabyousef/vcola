import Diving from "./components/Diving/Diving";
import { FizziLogo } from "./components/FizziLogo/FizziLogo";
import Hero from "./components/Hero/Hero";
export default function Home() {
  return (
    <div>
      <header className="-mb-28 flex justify-center py-4">
        <FizziLogo className="z-10 h-20 cursor-pointer text-sky-800" />
      </header>
      <section>
        <Hero />
      </section>
      <section>
        <Diving />
      </section>
    </div>
  );
}
