import { useState } from "react";
import { Gift, Heart, Sparkles, Star } from "lucide-react";
import giftSurprise from "@/assets/gift-surprise.jpg";

const SurpriseSection = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [confetti, setConfetti] = useState<
    Array<{ id: number; delay: number; left: number; color: string }>
  >([]);

  const handleReveal = () => {
    if (!isRevealed) {
      setIsRevealed(true);

      // Create confetti animation
      const newConfetti = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        delay: Math.random() * 2,
        left: Math.random() * 100,
        color: [
          "text-romantic",
          "text-dreamy",
          "text-primary-glow",
          "text-accent-warm",
        ][Math.floor(Math.random() * 4)],
      }));
      setConfetti(newConfetti);

      // Clear confetti after animation
      setTimeout(() => setConfetti([]), 4000);
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary-soft/30 to-secondary-soft/30 relative overflow-hidden">
      {/* Animated confetti */}
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className={`absolute animate-confetti ${piece.color}`}
          style={{
            left: `${piece.left}%`,
            animationDelay: `${piece.delay}s`,
            top: "-20px",
          }}
        >
          {Math.random() > 0.5 ? <Heart size={16} /> : <Star size={12} />}
        </div>
      ))}

      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in-up mb-16">
          <h2 className="mt-6 text-5xl md:text-6xl font-dancing text-gradient-romantic mb-6 leading-none pb-6">
            A Special Surprise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tumhare liye ek bahut special gift hai... Are you ready to see it?
            🎁✨
          </p>
        </div>

        <div className="card-dreamy max-w-2xl mx-auto animate-fade-in-up">
          {!isRevealed ? (
            <div className="text-center space-y-8">
              <div className="relative inline-block">
                <img
                  src={giftSurprise}
                  alt="Special surprise gift"
                  className="w-64 h-64 mx-auto rounded-3xl shadow-romantic object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-romantic/20 to-transparent rounded-3xl" />
                <Sparkles
                  className="absolute top-4 right-4 text-primary-glow heart"
                  size={24}
                />
              </div>

              <div className="space-y-4">
                <h3 className="text-3xl font-dancing text-romantic">
                  Your one more Birthday Surprise Awaits! 🎉
                </h3>
                <p className="text-muted-foreground">
                  Click the buttooonnnnnnnnn to reveal the special gifttttttt
                </p>
              </div>

              <button
                onClick={handleReveal}
                className="btn-romantic group relative overflow-hidden"
              >
                <Gift
                  className="inline mr-2 group-hover:animate-bounce"
                  size={20}
                />
                Click me just like you Kiss me.
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </button>
            </div>
          ) : (
            <div className="text-center space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <h3 className="text-4xl font-dancing text-gradient-romantic">
                  Surprise! 🎉
                </h3>

                <div className="card-romantic p-8 space-y-6 text-left">
                  <h4 className="text-2xl font-dancing text-romantic text-center mb-6">
                    Your Digital Birthday Vouchers! 💝
                  </h4>

                  <div className="space-y-4">
                    <div className="flex items-center p-4 bg-primary-soft/50 rounded-xl">
                      <Heart className="text-romantic mr-3 heart" size={20} />
                      <span className="text-lg">
                        One homemade dinner of your choice 🍝
                      </span>
                    </div>

                    <div className="flex items-center p-4 bg-dreamy/30 rounded-xl">
                      <Star className="text-dreamy mr-3" size={20} />
                      <span className="text-lg">
                        Movie marathon night with all your favorites 🍿
                      </span>
                    </div>

                    <div className="flex items-center p-4 bg-accent-warm/40 rounded-xl">
                      <Sparkles
                        className="text-accent-warm mr-3 sparkle"
                        size={20}
                      />
                      <span className="text-lg">
                        Unlimited Date's with lot's of love and Laughter
                      </span>
                    </div>

                    <div className="flex items-center p-4 bg-romantic/20 rounded-xl">
                      <Gift className="text-romantic mr-3" size={20} />
                      <span className="text-lg">
                        Unlimited hugs and kisses (lifetime warranty) 💋
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground italic">
                  "Because the best gifts are the moments we share together" 💕
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SurpriseSection;
