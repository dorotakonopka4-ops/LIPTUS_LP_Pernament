import DiscountBanner from "@/components/DiscountBanner";
import QuizHero from "@/components/QuizHero";
import QuizFunnel from "@/components/QuizFunnel";
import AnimatedTRPM8 from "@/components/AnimatedTRPM8";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, Heart, Leaf, ShieldCheck } from "lucide-react";
import { trackABTestEvent } from "@/lib/abtest";

/**
 * Home Variant B - Quiz-First approach
 * For A/B testing: Quiz hero → Products → Storytelling
 */

export default function HomeVariantB() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  const handleQuizOpen = () => {
    trackABTestEvent('quiz_started');
    setIsQuizOpen(true);
  };

  return (
    <div className="min-h-screen">
      {/* Discount Banner */}
      <DiscountBanner />
      
      {/* Quiz-First Hero */}
      <QuizHero onQuizClick={handleQuizOpen} />

      {/* Social Proof Bar */}
      <section className="bg-primary/10 py-4">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-foreground">
            <div className="flex items-center gap-2">
              <span className="text-2xl">★★★★★</span>
              <span className="font-medium">
                15,908 zadowolonych klientów
              </span>
            </div>
            <div className="h-4 w-px bg-border" />
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-primary" />
              <span>100% naturalne składniki</span>
            </div>
            <div className="h-4 w-px bg-border" />
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-primary" />
              <span>Ręczna produkcja w małych partiach</span>