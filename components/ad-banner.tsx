'use client';
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

// Simulated API call
const checkFirstTimeUser = async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  // Simulate checking if user is first time visitor
  return true
};

const AdBanner = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const checkAndShowModal = async () => {
      try {
        const shouldShow = await checkFirstTimeUser();
        if (shouldShow) {
          setIsOpen(true);
        }
      } catch (error) {
        console.error('Error checking first time user:', error);
      }
    };

    checkAndShowModal();
  }, []);

  const handleSubmit = async () => {
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call to save email
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Email submitted:', email);
    setIsLoading(false);
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal - Responsive sizing */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl overflow-hidden">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
        >
          <X size={24} />
        </button>

        {/* Content - Stack on mobile, side-by-side on larger screens */}
        <div className="flex flex-col sm:flex-row w-full">
          {/* Left side - Image */}
          <div className="flex-none sm:flex-[0.4] md:flex-[0.45] lg:flex-[0.5] bg-gradient-to-br from-gray-100 to-gray-200 p-4 sm:p-6 md:p-8 lg:p-12 flex items-center justify-center min-h-[200px] sm:min-h-[400px] md:min-h-[450px]">
            <div className="space-y-4">
              {/* Gaming setup illustration - Scales with screen size */}
              <div className="relative scale-75 sm:scale-100 md:scale-125 lg:scale-150">
                {/* Keyboard */}
                <div className="bg-white rounded-lg p-3 shadow-md transform -rotate-12">
                  <div className="grid grid-cols-6 gap-1">
                    {Array.from({ length: 24 }).map((_, i) => (
                      <div 
                        key={i} 
                        className="w-2 h-2 bg-gray-300 rounded-sm"
                      />
                    ))}
                  </div>
                </div>
                
                {/* Controller */}
                <div className="absolute -top-2 -right-2 bg-white rounded-full p-2 shadow-md">
                  <div className="w-8 h-6 bg-gray-200 rounded-lg relative">
                    <div className="absolute top-1 left-1 w-1 h-1 bg-gray-400 rounded-full" />
                    <div className="absolute top-1 right-1 w-1 h-1 bg-gray-400 rounded-full" />
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-1 bg-gray-400 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="flex-1 sm:flex-[0.6] md:flex-[0.55] lg:flex-[0.5] p-4 sm:p-6 md:p-8 lg:p-12">
            <div className="text-center mb-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                Welcome!
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 mb-1">
                Get $10 off Your First Order!
              </p>
              <p className="text-xs sm:text-sm md:text-base text-gray-600">
                Sign up today and enjoy $10 off your first order of $100 or more.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 md:px-6 md:py-4 lg:px-8 lg:py-5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-sm md:text-base lg:text-lg"
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={isLoading || !email}
                className="w-full bg-orange-400 hover:bg-orange-500 disabled:bg-orange-300 text-white font-semibold py-3 px-4 md:py-4 md:px-6 lg:py-5 lg:px-8 rounded-lg transition-colors duration-200 text-sm md:text-base lg:text-lg"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 border-2 border-white border-t-transparent mr-2" />
                    Submitting...
                  </div>
                ) : (
                  'Submit'
                )}
              </button>

              <p className="text-xs md:text-sm text-gray-500 text-center">
                You can unsubscribe at anytime
              </p>

              <button
                onClick={handleClose}
                className="w-full text-gray-600 hover:text-gray-800 font-medium py-2 md:py-3 lg:py-4 transition-colors text-sm md:text-base lg:text-lg"
              >
                No, Thanks
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default AdBanner;