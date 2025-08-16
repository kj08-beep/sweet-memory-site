import { useState, useRef } from "react";
import { Heart, Star, Coffee, Music, Play, Pause, X } from "lucide-react";
import recentdate from "@/assets/recent-date.jpeg";
import Iloveyou from "@/assets/I-love-you.mp4";
import favSong from "@/assets/fav-song.mp3";
import cutemoments from "@/assets/cute-moments.jpeg";
import favsongvid from "@/assets/fav-songvid.mp4";

interface Memory {
  id: number;
  title: string;
  date?: string;
  description: string;
  media: string; // can be image, video, or audio
  mediaType: "image" | "video" | "audio";
  icon: React.ReactNode;
}

const ILoveYouText = ({
  left,
  duration,
  top,
}: {
  left: string;
  duration: number;
  top: string;
}) => (
  <span
    style={{
      position: "fixed",
      left,
      top,
      animation: `floatUp ${duration}s linear forwards`,
      fontWeight: "bold",
      fontSize: "1.1rem",
      color: "#e91e63",
      userSelect: "none",
      pointerEvents: "none",
      whiteSpace: "nowrap",
      zIndex: 9999,
      textShadow: "0 0 8px #ff4081",
    }}
  >
    I luvvvv Uuuuu
  </span>
);

const MemoryTimeline = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [loveTexts, setLoveTexts] = useState<
    { id: number; left: string; duration: number; top: string }[]
  >([]);
  const [selectedPhoto, setSelectedPhoto] = useState<Memory | null>(null);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const triggerLoveRain = () => {
    if (loveTexts.length > 0) return;
    const newTexts = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 90 + 5}%`,
      duration: Math.random() * 5 + 3,
      top: `${window.innerHeight + Math.random() * 100}px`,
    }));
    setLoveTexts(newTexts);
    setTimeout(() => setLoveTexts([]), 9000);
  };

  const memories: Memory[] = [
    {
      id: 1,
      title: "Our recent date",
      date: "April 13, 2025",
      description:
        "You know on this day the wait was over for us, it was around 1year 7months and 11days jab hum wapis date pe gaye the. Yaad hai last date humara tumhare b'day pe he tha and uske baad it was a veryyyyyy log time Jannu.",
      media: recentdate,
      mediaType: "image",
      icon: <Heart className="text-romantic" size={20} />,
    },
    {
      id: 2,
      title: "Some of our cute moments together",
      description:
        "Three hours felt like three minutes. We talked about everything and nothing, and I know I want to hear your laugh every day for the rest of my life. Kash ye duriyan jaldi khatam ho aur hum ek dusre ke pass aajaye yaar. I miss Uuuu so muchhhh Januuu ❤️",
      media: cutemoments,
      mediaType: "image",
      icon: <Coffee className="text-dreamy" size={20} />,
    },
    {
      id: 3,
      title: "First 'I Love You'",
      date: "October 6, 2023",
      description:
        "Tumhe yaad bhi hai humne ek dusre ko sabse pehli baar I love you kab bola tha. mujhe to yaad hai, uske abad se aaj tak mein tumse kehte aaya hun. Anushree I LOVE YOUUUU ❤️",
      media: Iloveyou,
      mediaType: "video",
      icon: <Star className="text-accent-warm" size={20} />,
    },
    {
      id: 4,
      title: "Your Favourite Song",
      description:
        "Singing it together everytime we hear this. Yaad hai main kabhi kabar tumhare liye ye gaana gaata tha jab bhi tumhe sunna hota tha, ya tum naraz hoti thi. I still have those voice notes of me singing.",
      media: favsongvid, // <-- your mp4 file import
      mediaType: "video", // <-- new key
      icon: <Music className="text-romantic" size={20} />,
    },
  ];

  return (
    <>
      <style>
        {`
        @keyframes floatUp {
          0% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateY(-${window.innerHeight + 200}px) scale(1.5);
          }
        }
      `}
      </style>
      <section className="py-20 px-4 bg-gradient-to-br from-cream/50 to-blush/30 relative">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="mt-6 text-5xl md:text-6xl font-dancing text-gradient-romantic mb-6 leading-none pb-6">
              Our Love Story
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every moment with you has been a chapter in our beautiful story.
              Here are some of my favorites 💕
            </p>
          </div>

          {/* Timeline */}
          <div className="relative space-y-12">
            {memories.map((memory, index) => (
              <div
                key={memory.id}
                className="timeline-item animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="card-romantic">
                  <div
                    className="flex flex-col items-center gap-6 cursor-pointer"
                    onClick={() => {
                      if (memory.id === 2) setSelectedPhoto(memory);
                    }}
                  >
                    {memory.mediaType === "image" && (
                      <img
                        src={memory.media}
                        alt={memory.title}
                        className="w-full max-w-2xl h-80 md:h-96 object-cover object-center rounded-2xl shadow-soft mx-auto mb-4"
                      />
                    )}

                    {memory.mediaType === "video" && (
                      <video
                        src={memory.media}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full max-w-2xl h-80 md:h-96 object-cover object-center rounded-2xl shadow-soft mx-auto mb-4"
                      />
                    )}

                    {memory.mediaType === "audio" && (
                      <audio
                        src={memory.media}
                        loop
                        muted={false}
                        controls={false}
                        className="w-full max-w-2xl mx-auto mb-4"
                      />
                    )}

                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-primary-soft rounded-full">
                        {memory.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-dancing text-romantic">
                          {memory.title}
                        </h3>

                        {memory.id === 2 ? (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              triggerLoveRain();
                            }}
                            className="px-5 py-2 bg-gradient-to-r from-romantic to-dreamy text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 mt-2"
                          >
                            Click Me
                          </button>
                        ) : memory.id === 4 ? (
                          <div className="flex items-center gap-3 mt-2">
                            <audio ref={audioRef} src={favSong} />
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                togglePlay();
                              }}
                              className="px-5 py-2 bg-gradient-to-r from-romantic to-dreamy text-white font-semibold rounded-full flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                            >
                              {isPlaying ? (
                                <>
                                  <Pause size={18} /> Pause
                                </>
                              ) : (
                                <>
                                  <Play size={18} /> Play
                                </>
                              )}
                            </button>
                          </div>
                        ) : (
                          <p className="text-sm text-muted-foreground font-medium">
                            {memory.date}
                          </p>
                        )}
                      </div>
                    </div>

                    <p className="text-foreground/80 leading-relaxed text-center max-w-2xl">
                      {memory.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal for "cute moments" expanded photo */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <div
              className="card-dreamy relative rounded-xl animate-fade-in-up p-6 max-w-5xl max-h-[90vh] overflow-auto flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 text-white hover:text-pink-400 transition-colors"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
              <img
                src={selectedPhoto.media}
                alt={selectedPhoto.title}
                className="mb-6 rounded-xl mx-auto"
                style={{
                  maxWidth: "100%",
                  maxHeight: "80vh",
                  objectFit: "contain",
                }}
              />
              <h3 className="text-3xl font-dancing text-romantic mb-2 text-center">
                {selectedPhoto.title}
              </h3>
              {selectedPhoto.date && (
                <p className="text-muted-foreground text-center mb-4">
                  {selectedPhoto.date}
                </p>
              )}
              <p className="text-foreground/90 text-center whitespace-pre-line leading-relaxed max-w-3xl mx-auto">
                {selectedPhoto.description}
              </p>
            </div>
          </div>
        )}

        {/* Render floating "I luvvvv Uuuuu" texts */}
        {loveTexts.map(({ id, left, duration, top }) => (
          <ILoveYouText key={id} left={left} top={top} duration={duration} />
        ))}
      </section>
    </>
  );
};

export default MemoryTimeline;
