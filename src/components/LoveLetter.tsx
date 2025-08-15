import React, { useState } from "react";
import { Heart, Quote } from "lucide-react";

interface LoveLetterProps {
  girlfriendName: string;
  yourName: string;
}

const LoveLetter = ({ girlfriendName, yourName }: LoveLetterProps) => {
  const [showLetter, setShowLetter] = useState(false);

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-accent-warm/20 to-cream/40 relative overflow-x-hidden">
      {/* Giant, realistic, beating heart */}
      {!showLetter && (
        <div
          className="flex justify-center items-center"
          style={{ minHeight: "400px" }}
        >
          <button
            aria-label="Open Love Letter"
            className="focus:outline-none"
            onClick={() => setShowLetter(true)}
            style={{ background: "none", border: "none" }}
          >
            <span className="relative inline-block heart-pop">
              <Heart
                className="text-romantic animate-real-beat transition-all"
                size={150} // Bigger heart
                fill="#ff5f8e"
                stroke="#ff3366"
                strokeWidth={3}
                style={{ filter: "drop-shadow(0 8px 36px #ff78a7aa)" }}
              />
              {/* Glossy highlight */}
              <span
                style={{
                  position: "absolute",
                  top: 35,
                  left: 45,
                  width: 40,
                  height: 20,
                  background: "rgba(255,255,255,0.5)",
                  borderRadius: "35% 55% 60% 50%",
                  transform: "rotate(-18deg)",
                  pointerEvents: "none",
                }}
              ></span>
            </span>
            <span className="block mt-5 text-3xl font-dancing text-gradient-romantic text-center select-none">
              Tap me!
            </span>
          </button>
        </div>
      )}

      {/* The Letter with expanding transition */}
      <div
        style={{
          transition:
            "max-height 0.7s cubic-bezier(.47,1.64,.41,.8), opacity 0.5s",
          overflow: "hidden",
          maxHeight: showLetter ? "1800px" : "0px", // Expanding effect
          opacity: showLetter ? 1 : 0,
        }}
        aria-hidden={!showLetter}
      >
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <div className="text-center mb-16">
            <h2 className="mt-6 text-5xl md:text-6xl font-dancing text-gradient-romantic mb-6 leading-none pb-6">
              A Letter From My Heart
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Words could never fully capture how much you mean to me, but
              here's my attempt 💌
            </p>
          </div>
          <div className="card-dreamy relative">
            <Quote
              className="absolute top-4 left-4 text-romantic/30"
              size={32}
            />
            <Quote
              className="absolute bottom-4 right-4 text-romantic/30 transform rotate-180"
              size={32}
            />
            <div className="love-letter relative z-10">
              <div className="text-right mb-8">
                <p className="text-muted-foreground">On your special day</p>
                <p className="text-muted-foreground">
                  With all my dher sara pyaarrr
                </p>
              </div>
              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-2xl font-dancing text-romantic mb-6">
                  Meri Pyaari {girlfriendName},
                </p>
                <p>
                  Yahan mera dil tumahre birthday ke baare main soch soch ke
                  kinta khush hora hai tumhe kya pata. Tumhare aane se meri
                  zindagi main ujjala aaya, dher sari khushiyan aayiaur haan,
                  mere Face par itna sara blush aur smile ke aane ke wjah bhi to
                  tum he ho.
                </p>
                <p>
                  Jabse tumhe in aankhon ne dekha hai ye aankhein khush ho gayi
                  hai, in aankhon ko pata tha ke kuch to khas hai isme, main to
                  kahunga ke kuch to nahi bahut kuch khas hai isme. Tumahara
                  pyaar, tumhari hasi, tumhari chamak, tumhari dhamak, tumhara
                  har choti cheezo main kuch khubsurati dhundna.
                  <br />
                  Har cheez ek ordinary moment ko extraordinary bana deta hai.
                </p>
                <p>
                  Tu hi meri shab hai, subha hai, tu hi din hai mera
                  <br />
                  Tu hi meri rab hai, jahaan hai, tu hi meri duniya
                  <br />
                  Tu waqt mere liye, main hoon tera lamha
                  <br />
                  Kaise rahega bhala hoke tu mujhse judaa?
                </p>
                <p>
                  On your birthday, I want you to know that you are loved beyond
                  measure. You deserve all the happiness in the world, and I
                  promise to spend every day trying to give you exactly that and
                  even more, So that you never have to cry or feel alone.
                </p>
                <p>
                  Thank you for being you – beautiful, smart, funny, and
                  absolutely perfect in every way. Thank you for choosing to
                  share your life with me. I love you more than words could ever
                  express.
                  <br />
                  Lotss of love Jannu 😘❤️😘
                  <br />
                  And at last Thank you for loving me like nobody ever has.
                </p>
                <p className="text-xl font-dancing text-romantic pt-4">
                  Happy Birthday, meri Jannu! Here's to another year of
                  adventures together! ✨
                </p>
                <div className="text-right pt-8">
                  <p className="text-xl font-dancing text-romantic">
                    Forever yours,
                  </p>
                  <p className="text-2xl font-dancing text-gradient-romantic">
                    {yourName} 💕
                  </p>
                </div>
              </div>
              {/* Decorative hearts */}
              <div className="absolute -top-2 -right-2">
                <Heart
                  className="text-romantic/40 heart"
                  size={18}
                  fill="#ff5f8e"
                />
              </div>
              <div className="absolute top-1/4 -left-3">
                <Heart
                  className="text-dreamy/40 heart"
                  size={14}
                  fill="#ffd1dc"
                />
              </div>
              <div className="absolute bottom-1/3 -right-3">
                <Heart
                  className="text-romantic/40 heart"
                  size={16}
                  fill="#ff5f8e"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Realistic beating animation & fade-in */}
      <style>{`
        @keyframes real-beat {
          0%, 100% {
            transform: scale(1);
            filter: drop-shadow(0 8px 36px #ff78a7aa);
          }
          15% {
            transform: scale(1.24,1.15) rotate(-4deg);
            filter: drop-shadow(0 14px 52px #ff9ab1ee);
          }
          25% {
            transform: scale(0.96,1.08) rotate(3deg);
          }
          35% {
            transform: scale(1.16,1.14) rotate(-2deg);
          }
          45% {
            transform:  scale(0.97,0.91) rotate(1deg);
          }
          60% {
            transform: scale(1.07,1.13) rotate(-1deg);
          }
          75% {
            transform: scale(0.96,1.01) rotate(2deg);
          }
        }
        .animate-real-beat {
          animation: real-beat 1.08s cubic-bezier(0.23,1.07,0.57,1) infinite;
          will-change: transform, filter;
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
      `}</style>
    </section>
  );
};

export default LoveLetter;
