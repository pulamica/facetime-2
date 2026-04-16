import { Lock } from "lucide-react";

interface VerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VerificationModal = ({ isOpen, onClose }: VerificationModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 backdrop-blur-xl bg-black/70"
        onClick={onClose}
      />

      <div className="relative w-full max-w-sm flex flex-col items-center justify-center">
        <div className="w-full bg-black/80 rounded-2xl p-6 flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-600/20 to-yellow-800/20 flex items-center justify-center mb-4">
            <Lock className="w-8 h-8 text-yellow-500" strokeWidth={2.5} />
          </div>

          <h2 className="text-xl font-bold text-foreground mb-2">
            Verification Required
          </h2>

          <p className="text-center text-muted-foreground text-xs mb-6 px-4">
            Complete the verification step below to continue.
          </p>

          <div className="mb-4 flex justify-center">
            <div data-captcha-enable="true"></div>
          </div>

          <button
            onClick={onClose}
            className="mt-4 w-full py-3 rounded-xl bg-secondary text-secondary-foreground text-sm font-semibold hover:bg-muted transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerificationModal;
