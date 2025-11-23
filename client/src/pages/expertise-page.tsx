import { Expertise } from "@/components/sections/expertise";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";

export default function ExpertisePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <Expertise />
      </div>
      <Footer />
    </main>
  );
}
