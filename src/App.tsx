import Nav from "./components/Nav";
import Hero from "./components/Hero";
import MarketOverview from "./components/MarketOverview";
import Opportunities from "./components/Opportunities";
import Problems from "./components/Problems";
import Mindset from "./components/Mindset";
import Pricing from "./components/Pricing";
import Playbook from "./components/Playbook";
import Scripts from "./components/Scripts";
import ActionPlan from "./components/ActionPlan";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased">
      <Nav />
      <main>
        <Hero />
        <MarketOverview />
        <Opportunities />
        <Problems />
        <Mindset />
        <Pricing />
        <Playbook />
        <Scripts />
        <ActionPlan />
      </main>
      <Footer />
    </div>
  );
}
