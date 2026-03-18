import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Modal, ModalTrigger, ModalBody, ModalContent, useModal } from "./Modal";

interface EmailSignupProps {
  buttonText?: string;
  className?: string;
  onSubmit?: (email: string, userType: 'individual' | 'business') => Promise<void>;
}

// Form component that can access modal context
function EmailForm({ onSubmit }: { onSubmit?: (email: string, userType: 'individual' | 'business') => Promise<void> }) {
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState<'individual' | 'business'>('individual');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { setOpen } = useModal();

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (onSubmit) {
        await onSubmit(email, userType);
      } else {
        // Default behavior - simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }

      // Close modal first
      setOpen(false);
      
      // Small delay before showing toast for better UX
      setTimeout(() => {
        // Trigger toast from parent component
        window.dispatchEvent(new CustomEvent('emailSignupSuccess'));
      }, 200);

      setEmail("");
      setUserType('individual');
    } catch (error) {
      console.error("Error submitting email:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleEmailSubmit} className="space-y-8">
      {/* User Type Selection */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.2,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        <label className="block text-base sm:text-lg font-medium text-gray-800 mb-4 tracking-tight">
          Who are you registering as?
        </label>
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <motion.button
            type="button"
            onClick={() => setUserType('individual')}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className={`relative px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-medium rounded-xl border-2 transition-all duration-300 ease-out group ${
              userType === 'individual'
                ? 'bg-[#BF9B30] text-white border-[#BF9B30] shadow-lg'
                : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300 hover:shadow-sm'
            }`}
          >
            <div className="flex flex-col items-center space-y-1 sm:space-y-2">
              <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 transition-all duration-300 ${
                userType === 'individual'
                  ? 'border-white bg-white'
                  : 'border-gray-300 group-hover:border-gray-400'
              }`}>
                {userType === 'individual' && (
                  <div className="w-full h-full rounded-full bg-[#BF9B30] flex items-center justify-center">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white"></div>
                  </div>
                )}
              </div>
              <span>Individual</span>
            </div>
          </motion.button>
          <motion.button
            type="button"
            onClick={() => setUserType('business')}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className={`relative px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-medium rounded-xl border-2 transition-all duration-300 ease-out group ${
              userType === 'business'
                ? 'bg-[#BF9B30] text-white border-[#BF9B30] shadow-lg'
                : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300 hover:shadow-sm'
            }`}
          >
            <div className="flex flex-col items-center space-y-1 sm:space-y-2">
              <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 transition-all duration-300 ${
                userType === 'business'
                  ? 'border-white bg-white'
                  : 'border-gray-300 group-hover:border-gray-400'
              }`}>
                {userType === 'business' && (
                  <div className="w-full h-full rounded-full bg-[#BF9B30] flex items-center justify-center">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white"></div>
                  </div>
                )}
              </div>
              <span>Business</span>
            </div>
          </motion.button>
        </div>
      </motion.div>

      {/* Email Input */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.3,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className="space-y-3"
      >
        <label className="block text-base sm:text-lg font-medium text-gray-800 tracking-tight">
          Email address
        </label>
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="w-full px-4 sm:px-5 py-3 sm:py-4 text-base sm:text-lg bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:bg-white focus:border-gray-900 transition-all duration-300 ease-out placeholder:text-gray-400 font-light tracking-tight"
          />
          <div className="absolute inset-0 rounded-xl pointer-events-none ring-2 ring-transparent focus-within:ring-gray-900/10 transition-all duration-300"></div>
        </div>
      </motion.div>

      {/* Submit Button */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.4,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className="pt-4"
      >
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className="w-full px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium bg-[#BF9B30] text-white rounded-xl hover:bg-[#BF9B30]/90 transition-all duration-300 ease-out cursor-target disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl disabled:hover:scale-100"
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center gap-3">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              <span className="font-light tracking-tight">Joining waitlist...</span>
            </div>
          ) : (
            <span className="font-light tracking-tight">Join Waitlist</span>
          )}
        </motion.button>
      </motion.div>

      {/* Privacy Note */}
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.5,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className="text-sm text-gray-400 text-center font-light leading-relaxed"
      >
        We'll notify you when Trafast is available. No spam, unsubscribe anytime.
      </motion.p>
    </form>
  );
}

export default function EmailSignup({ 
  buttonText = "Email me when it's ready", 
  className = "",
  onSubmit
}: EmailSignupProps) {
  const [showToast, setShowToast] = useState(false);

  // Listen for success event from form
  useEffect(() => {
    const handleSuccess = () => {
      setShowToast(true);
      // Hide toast after 3 seconds
      setTimeout(() => setShowToast(false), 3000);
    };

    window.addEventListener('emailSignupSuccess', handleSuccess);
    return () => window.removeEventListener('emailSignupSuccess', handleSuccess);
  }, []);

  return (
    <div className={`relative ${className}`}>
      <Modal>
        <ModalTrigger className="group inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 text-sm sm:text-base lg:text-lg font-medium bg-[#BF9B30] text-white rounded-lg transition-all duration-300 ease-out hover:bg-[#A68428] cursor-target">
          <span>{buttonText}</span>
        </ModalTrigger>
        
        <ModalBody>
          <ModalContent className="bg-white">
            <div className="text-center mb-10">
              <motion.h2 
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-3xl font-heading font-light text-gray-900 mb-3 tracking-tight"
              >
                Join the Waitlist
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-gray-500 text-lg font-light leading-relaxed"
              >
                Be the first to experience banking that preserves value.
              </motion.p>
            </div>

            <EmailForm onSubmit={onSubmit} />
          </ModalContent>
        </ModalBody>
      </Modal>

      {/* Success Toast */}
      {showToast && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          className="fixed top-8 left-1/2 transform -translate-x-1/2 z-[110] bg-white border border-gray-200 text-gray-900 px-8 py-5 rounded-2xl shadow-2xl flex items-center gap-4 backdrop-blur-sm"
        >
          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <p className="font-medium text-gray-900 tracking-tight">You're on the list!</p>
            <p className="text-sm text-gray-500 font-light">We'll be in touch soon.</p>
          </div>
        </motion.div>
      )}
    </div>
  );
} 