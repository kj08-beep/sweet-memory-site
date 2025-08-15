import { Heart, Sparkles } from 'lucide-react';

interface FooterProps {
  yourName: string;
}

const Footer = ({ yourName }: FooterProps) => {
  return (
    <footer className="py-12 px-4 bg-gradient-to-t from-romantic/10 to-transparent">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-6">
          {/* Decorative hearts */}
          <div className="flex justify-center items-center gap-4">
            <Sparkles className="text-primary-glow sparkle" size={20} />
            <Heart className="text-romantic heart" size={24} />
            <Sparkles className="text-dreamy sparkle" size={20} />
          </div>

          {/* Main message */}
          <div className="space-y-2">
            <p className="text-2xl font-dancing text-gradient-romantic">
              Made with endless love and lots of coffee ☕
            </p>
            <p className="text-lg text-muted-foreground">
              For the most amazing person in the world 💫
              My Jannu ❤️
            </p>
          </div>

          {/* Creator attribution */}
          <div className="space-y-1">
            <p className="text-muted-foreground">
              Crafted with{' '}
              <Heart className="inline text-romantic heart mx-1" size={16} />{' '}
              by{' '}
              <span className="font-dancing text-lg text-romantic">
                {yourName}
              </span>
            </p>
            <p className="text-sm text-muted-foreground/70">
              © {new Date().getFullYear()} • Forever yours
            </p>
          </div>

          {/* Decorative line */}
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-romantic to-transparent mx-auto" />
          
          {/* Final message */}
          <p className="text-sm text-muted-foreground/60 italic">
            "Every love story is beautiful, but ours is my favorite" ✨
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;