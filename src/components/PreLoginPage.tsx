import { useState, useEffect } from "react";
import { Calendar, Clock, Heart, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PreLoginPageProps {
  relationshipStart?: string;
  nextBirthday?: string;
  onTryLogin: () => void;
}

const PreLoginPage = ({
  relationshipStart = "2023-02-14",
  nextBirthday = "2024-12-25",
  onTryLogin,
}: PreLoginPageProps) => {
  const [timeFromStart, setTimeFromStart] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [timeToBirthday, setTimeToBirthday] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isBirthdayReached, setIsBirthdayReached] = useState(false);

  useEffect(() => {
    const updateCountdowns = () => {
      const now = new Date().getTime();
      const startDate = new Date(relationshipStart).getTime();
      const timeSinceStart = now - startDate;

      if (timeSinceStart > 0) {
        setTimeFromStart({
          days: Math.floor(timeSinceStart / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (timeSinceStart % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor(
            (timeSinceStart % (1000 * 60 * 60)) / (1000 * 60)
          ),
          seconds: Math.floor((timeSinceStart % (1000 * 60)) / 1000),
        });
      }

      const birthdayDate = new Date(nextBirthday).getTime();
      const timeUntilBirthday = birthdayDate - now;

      if (timeUntilBirthday > 0) {
        setTimeToBirthday({
          days: Math.floor(timeUntilBirthday / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (timeUntilBirthday % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor(
            (timeUntilBirthday % (1000 * 60 * 60)) / (1000 * 60)
          ),
          seconds: Math.floor((timeUntilBirthday % (1000 * 60)) / 1000),
        });
        setIsBirthdayReached(false);
      } else {
        setTimeToBirthday({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setIsBirthdayReached(true);
      }
    };

    updateCountdowns();
    const interval = setInterval(updateCountdowns, 1000);
    return () => clearInterval(interval);
  }, [relationshipStart, nextBirthday]);

  const TimeCard = ({
    label,
    value,
    unit,
  }: {
    label: string;
    value: number;
    unit: string;
  }) => (
    <div className="card-romantic text-center p-6 min-w-[120px]">
      <div className="text-3xl md:text-4xl font-bold text-gradient-romantic mb-2">
        {value.toString().padStart(2, "0")}
      </div>
      <div className="text-sm text-muted-foreground uppercase tracking-wide">
        {unit}
      </div>
      <div className="text-xs text-muted-foreground mt-1">{label}</div>
    </div>
  );

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-dreamy/20 to-primary-soft/20">
      <div className="py-4 px-0">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="mt-6 text-8xl md:text-8xl font-dancing text-gradient-romantic mb-6 leading-none pb-6">
              Our Time Together
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every second with you is precious. Here's how long we've been
              creating magic together! ⏰💕
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="animate-fade-in-up">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 mb-4">
                  <Heart className="text-romantic heart" size={24} />
                  <h3 className="text-3xl font-dancing text-romantic">
                    Time Since We Found Each Other
                  </h3>
                  <Heart className="text-romantic heart" size={24} />
                </div>
                <p className="text-muted-foreground">
                  Since{" "}
                  {new Date(relationshipStart).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <TimeCard label="Days" value={timeFromStart.days} unit="Days" />
                <TimeCard
                  label="Hours"
                  value={timeFromStart.hours}
                  unit="Hours"
                />
                <TimeCard
                  label="Minutes"
                  value={timeFromStart.minutes}
                  unit="Min"
                />
                <TimeCard
                  label="Seconds"
                  value={timeFromStart.seconds}
                  unit="Sec"
                />
              </div>
            </div>

            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 mb-4">
                  <Calendar className="text-dreamy" size={24} />
                  <h3 className="text-3xl font-dancing text-dreamy">
                    Until Your Birthday
                  </h3>
                  <Clock className="text-dreamy" size={24} />
                </div>
                <p className="text-muted-foreground">
                  {new Date(nextBirthday).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
              {timeToBirthday.days > 0 ? (
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <TimeCard
                    label="Days"
                    value={timeToBirthday.days}
                    unit="Days"
                  />
                  <TimeCard
                    label="Hours"
                    value={timeToBirthday.hours}
                    unit="Hours"
                  />
                  <TimeCard
                    label="Minutes"
                    value={timeToBirthday.minutes}
                    unit="Min"
                  />
                  <TimeCard
                    label="Seconds"
                    value={timeToBirthday.seconds}
                    unit="Sec"
                  />
                </div>
              ) : (
                <div className="card-dreamy text-center p-12">
                  <h3 className="text-4xl font-dancing text-gradient-romantic mb-4">
                    🎉 It's Your Birthday! 🎉
                  </h3>
                  <p className="text-xl text-muted-foreground">
                    The most special day of the year! ✨
                  </p>
                </div>
              )}
            </div>
          </div>

          <div
            className="text-center animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="card-romantic max-w-md mx-auto p-8">
              {/* Updated Lock icon with matching button colors */}
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Lock className="text-white" size={28} />
              </div>

              {isBirthdayReached ? (
                <>
                  <h3 className="text-3xl font-dancing text-gradient-romantic mb-4">
                    🎈 Your Special Day is Here! 🎈
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Your birthday surprise is waiting for you! Enter the
                    password to unlock it.
                  </p>
                  <Button onClick={onTryLogin} size="lg" className="w-full">
                    Unlock My Birthday Surprise 🎁
                  </Button>
                </>
              ) : (
                <>
                  <h3 className="text-3xl font-dancing text-gradient-romantic mb-4">
                    🔒 Almost There! 🔒
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Your special birthday surprise is waiting, but it's locked
                    until your birthday arrives! Keep checking back... 💕
                  </p>
                  <Button
                    disabled
                    size="lg"
                    className="w-full opacity-50 cursor-not-allowed"
                  >
                    Surprise Locked Until Birthday 🔐
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreLoginPage;
