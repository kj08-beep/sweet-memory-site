import { useState } from "react";
import { Heart, Lock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface LoginPageProps {
  onLogin: () => void;
  nextBirthday?: string;
}

const LoginPage = ({
  onLogin,
  nextBirthday = "2024-12-25",
}: LoginPageProps) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const correctPassword = "04/10/2023";

  // Check if birthday has arrived
  const isBirthdayReached = () => {
    const now = new Date().getTime();
    const birthdayDate = new Date(nextBirthday).getTime();
    return now >= birthdayDate;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Check if birthday has arrived
    if (!isBirthdayReached()) {
      setError("The surprise is locked until your birthday arrives! 🔒");
      setIsLoading(false);
      return;
    }

    // Simulate loading for better UX
    setTimeout(() => {
      if (password === correctPassword) {
        onLogin();
      } else {
        setError("Incorrect password. Try thinking about a special date 💕");
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-romantic flex items-center justify-center px-4">
      <div className="pointer-events-none absolute inset-0 -z-10">
        {[...Array(20)].map((_, i) => (
          <Heart
            key={i}
            className="text-romantic/20 absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="card-dreamy max-w-md w-full animate-fade-in-up">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-romantic rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock className="text-white" size={32} />
          </div>
          <h1 className="text-4xl font-dancing text-gradient-romantic mb-3">
            For My Love 💕
          </h1>
          <p className="text-muted-foreground">
            Enter the password to unlock your special surprise
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Password
            </label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Think of a special date..."
              className="text-center text-lg"
              disabled={isLoading}
            />
            {error && (
              <p className="text-romantic text-sm mt-2 text-center animate-fade-in">
                {error}
              </p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full h-12 text-lg"
            disabled={isLoading || !password}
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Unlocking...
              </div>
            ) : (
              "Unlock My Heart 💖"
            )}
          </Button>
        </form>

        <div className="text-center mt-6">
          <p className="text-sm text-muted-foreground">
            Hint: A very special day for us 🗓️
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
