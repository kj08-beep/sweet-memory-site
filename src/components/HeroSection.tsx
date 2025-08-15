import { useState, useEffect, useRef } from "react";
import { Heart, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

interface HeroSectionProps {
  girlfriendName: string;
}

const HeroSection = ({ girlfriendName }: HeroSectionProps) => {
  const [hearts, setHearts] = useState<Array<{ id: number; delay: number; left: number }>>([]);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Create floating hearts
    const newHearts = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      delay: Math.random() * 3,
      left: Math.random() * 100,
    }));
    setHearts(newHearts);
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.loop = true;
      audioRef.current.volume = 0.1; // Set low volume (10%)

      const playAudio = () => {
        audioRef.current?.play().catch(() => {
          // Autoplay might be blocked
        });
      };

      // Play audio initially
      playAudio();

      // Event handler for when other audio starts to play
      const onAudioPlay = (e: Event) => {
        const target = e.target as HTMLMediaElement;
        // If other audio/video starts playing and it's NOT our audio
        if (target !== audioRef.current && !audioRef.current?.paused) {
          audioRef.current.pause();
        }
      };

      // Event handler for when other audio/video pauses or ends
      const onAudioPauseOrEnded = (e: Event) => {
        const target = e.target as HTMLMediaElement;
        // If other audio/video pauses or ends and it's NOT our audio
        if (target !== audioRef.current && audioRef.current?.paused) {
          playAudio();
        }
      };

      // Add event listeners on the document (for all audio/video elements)
      document.addEventListener("play", onAudioPlay, true);
      document.addEventListener("pause", onAudioPauseOrEnded, true);
      document.addEventListener("ended", onAudioPauseOrEnded, true);

      // Cleanup listeners on unmount
      return () => {
        document.removeEventListener("play", onAudioPlay, true);
        document.removeEventListener("pause", onAudioPauseOrEnded, true);
        document.removeEventListener("ended", onAudioPauseOrEnded, true);
      };
    }
  }, []);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-soft/30 via-dreamy/20 to-accent-warm/30" />

        {/* Floating Hearts */}
        {hearts.map((heart) => (
          <Heart
            key={heart.id}
            className="absolute text-romantic/30 floating-heart"
            size={24}
            style={{
              left: `${heart.left}%`,
              animationDelay: `${heart.delay}s`,
              top: "100vh",
            }}
          />
        ))}

        {/* Sparkles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 8 }).map((_, i) => (
            <Sparkles
              key={i}
              className="absolute text-primary-glow/40 sparkle"
              size={16}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div
            className="animate-fade-in-up flex flex-col items-center"
            style={{
              position: "relative",
              background: "none",
            }}
          >
            <div
              className="w-full"
              style={{
                minHeight: "200px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: 10,
                paddingBottom: 10,
                overflow: "visible",
                position: "relative",
                zIndex: 2,
              }}
            >
              <h1
                className="text-6xl md:text-8xl font-dancing text-romantic"
                style={{
                  lineHeight: 1.25,
                  margin: 0,
                  paddingTop: 10,
                  paddingBottom: 10,
                  overflow: "visible",
                  letterSpacing: "0.01em",
                }}
              >
                Happy Birthday
              </h1>
            </div>
            <h2 className="text-4xl md:text-6xl font-dancing text-romantic mb-8 heart">
              {girlfriendName} ❤️
            </h2>
            <p className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              A little website filled with love, memories, and all the reasons why you make every day magical ✨
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-1 h-8 bg-gradient-to-b from-romantic to-transparent rounded-full" />
        </div>

        {/* Hidden looping audio with fixed low volume and no user controls */}
        <audio
          ref={audioRef}
          src="src/assets/birthday-song.mp3" /* Replace with your actual song path */
          preload="auto"
          loop
          muted={false}
          controls={false}
          style={{ display: "none" }}
        />
      </section>

      {/* Additional styles and animations */}
      <style>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateY(-110vh) scale(1.4);
            opacity: 0;
          }
        }
        .floating-heart {
          animation-name: floatUp;
          animation-duration: 6s;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(36px);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1.1s cubic-bezier(0.39,0.575,0.565,1) both;
        }
        @keyframes sparkleBlink {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.3;
          }
        }
        .sparkle {
          animation-name: sparkleBlink;
          animation-duration: 2.5s;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }
      `}</style>
    </>
  );
};

export default HeroSection;
