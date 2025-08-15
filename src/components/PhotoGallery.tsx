import { useState } from "react";
import { Heart, Calendar, MapPin } from "lucide-react";
import hersmile from "@/assets/her-smile.jpeg";
import onlinedate from "@/assets/online-date.jpeg";

interface Photo {
  id: number;
  src: string;
  caption: string;
  date: string;
  location: string;
}

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const photos: Photo[] = [
    {
      id: 1,
      src: onlinedate,
      caption: "Our kind of online date",
      date: "June 07, 2025",
      location: "Inside our World",
    },
    {
      id: 2,
      src: hersmile,
      caption: "Your beautiful smile ✨",
      date: "Everyday",
      location: "Inside my Heart",
    },
  ];

  return (
    <section className="py-20 px-4 bg-hearts">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="mt-6 text-5xl md:text-4xl font-dancing text-gradient-romantic mb-6 leading-none pb-6">
            Our Beautiful Moments
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every photo tells a story of our love, laughter, and endless
            adventures together 📸✨
          </p>
        </div>

        {/* Grid with more gap and limited to 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 place-items-center">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className="card-romantic group cursor-pointer w-full max-w-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedPhoto(photo)}
            >
              <div className="relative overflow-hidden rounded-2xl mb-4">
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-romantic/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Heart className="absolute top-4 right-4 text-white/80 heart opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-dancing text-romantic text-center">
                  {photo.caption}
                </h3>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {photo.date}
                  </div>
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-1" />
                    {photo.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for expanded photo */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <div className="card-dreamy max-w-xl w-full animate-fade-in-up">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.caption}
                className="w-full max-h-96 object-contain rounded-xl mb-4"
              />
              <h3 className="text-2xl font-dancing text-romantic mb-2">
                {selectedPhoto.caption}
              </h3>
              <div className="flex items-center justify-between text-muted-foreground">
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  {selectedPhoto.date}
                </div>
                <div className="flex items-center">
                  <MapPin size={16} className="mr-2" />
                  {selectedPhoto.location}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PhotoGallery;
