import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import PhotoGallery from "@/components/PhotoGallery";
import MemoryTimeline from "@/components/MemoryTimeline";
import LoveLetter from "@/components/LoveLetter";
import SurpriseSection from "@/components/SurpriseSection";
import Footer from "@/components/Footer";
import LoginPage from "@/components/LoginPage";
import PreLoginPage from "@/components/PreLoginPage";

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  // 🎀 Customize these with your girlfriend's name and your name
  const girlfriendName = "Jannu"; // Change this to her name
  const yourName = "Your Bubu"; // Change this to your name

  // 📅 Customize these dates (format: "YYYY-MM-DD")
  const relationshipStart = "2023-09-26"; // When you started dating
  const nextBirthday = "2025-08-20"; // Her next birthday

  if (!isAuthenticated && !showLogin) {
    return (
      <PreLoginPage
        relationshipStart={relationshipStart}
        nextBirthday={nextBirthday}
        onTryLogin={() => setShowLogin(true)}
      />
    );
  }

  if (!isAuthenticated && showLogin) {
    return (
      <LoginPage
        nextBirthday={nextBirthday}
        onLogin={() => setIsAuthenticated(true)}
      />
    );
  }

  return (
    <div className="min-h-screen">
      <HeroSection girlfriendName={girlfriendName} />
      <PhotoGallery />
      <MemoryTimeline />
      <LoveLetter girlfriendName={girlfriendName} yourName={yourName} />
      <SurpriseSection />
      <Footer yourName={yourName} />
    </div>
  );
};

export default Index;
