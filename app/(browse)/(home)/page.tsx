import { ModeToggle } from "@/components/ModeToggle";
import { UserButton } from "@clerk/nextjs";
import { Results } from "./_components/results";

export default function Home() {
  return (
    <div className="h-full p-8 max-w-screen-2xl mx-auto">
      <Results />
    </div>
  );
}
