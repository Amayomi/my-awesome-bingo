interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-full overflow-hidden bg-gradient-to-br from-[#f5f1e8] via-[#e9e4f5] to-[#e8f5f1]">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[15%] w-3 h-5 bg-[#8b6f47] rounded-[50%] opacity-20 animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-[30%] right-[20%] w-4 h-6 bg-[#8b6f47] rounded-[50%] opacity-15 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-[25%] left-[25%] w-2.5 h-4 bg-[#8b6f47] rounded-[50%] opacity-25 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[60%] right-[15%] w-3.5 h-5 bg-[#8b6f47] rounded-[50%] opacity-20 animate-float" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Sparkle emojis */}
        <div className="absolute top-[20%] right-[30%] text-2xl opacity-0 animate-fadeIn" style={{ animationDelay: '800ms' }}>✨</div>
        <div className="absolute bottom-[35%] left-[18%] text-xl opacity-0 animate-fadeIn" style={{ animationDelay: '1000ms' }}>☕</div>
      </div>

      <div className="relative z-10 text-center max-w-2xl px-6 py-8">
        {/* Hero Section */}
        <div className="mb-12">
          {/* Coffee cup emoji with bounce-in */}
          <div className="text-7xl mb-6 opacity-0 animate-bounceIn">
            ☕
          </div>
          
          {/* Title with scale-in */}
          <h1 className="text-6xl font-bold text-gray-900 mb-4 opacity-0 animate-scaleIn" style={{ animationDelay: '200ms' }}>
            Soc Ops
          </h1>
          
          {/* Tagline in Dongle font */}
          <p className="text-4xl text-gray-700 mb-3 opacity-0 animate-fadeIn" style={{ fontFamily: 'var(--font-dongle)', animationDelay: '400ms' }}>
            Break the ice. Find your people.
          </p>
          
          {/* Animated underline */}
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 mx-auto rounded-full opacity-0 animate-fadeIn" style={{ animationDelay: '600ms' }}></div>
        </div>

        {/* How It Works Section */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8 opacity-0 animate-fadeInUp" style={{ animationDelay: '800ms' }}>
            How It Works
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-start">
            {/* Step 1 */}
            <div className="flex-1 opacity-0 animate-fadeInUp transition-transform duration-300 hover:scale-110 hover:-translate-y-2" style={{ animationDelay: '800ms' }}>
              <div className="relative inline-block mb-3">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  1
                </div>
                <div className="absolute -top-1 -right-1 text-3xl animate-[rotate_3s_linear_infinite]">
                  🎯
                </div>
              </div>
              <p className="text-sm text-gray-700 font-medium">
                Find people who match the prompts
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex-1 opacity-0 animate-fadeInUp transition-transform duration-300 hover:scale-110 hover:-translate-y-2" style={{ animationDelay: '1000ms' }}>
              <div className="relative inline-block mb-3">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  2
                </div>
                <div className="absolute -top-1 -right-1 text-3xl animate-[rotate_3s_linear_infinite]" style={{ animationDelay: '0.5s' }}>
                  👆
                </div>
              </div>
              <p className="text-sm text-gray-700 font-medium">
                Tap a square when you find a match
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex-1 opacity-0 animate-fadeInUp transition-transform duration-300 hover:scale-110 hover:-translate-y-2" style={{ animationDelay: '1200ms' }}>
              <div className="relative inline-block mb-3">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  3
                </div>
                <div className="absolute -top-1 -right-1 text-3xl animate-[rotate_3s_linear_infinite]" style={{ animationDelay: '1s' }}>
                  🎉
                </div>
              </div>
              <p className="text-sm text-gray-700 font-medium">
                Get 5 in a row to win!
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={onStart}
          className="relative group w-full max-w-sm bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-5 px-10 rounded-2xl text-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
          style={{ 
            opacity: 0,
            animationName: 'fadeInUp, pulse',
            animationDuration: '0.6s, 2.5s',
            animationDelay: '1400ms, 2000ms',
            animationIterationCount: '1, infinite',
            animationFillMode: 'forwards, none',
            animationTimingFunction: 'ease-out, ease-in-out'
          }}
        >
          <span className="flex items-center justify-center gap-2">
            Let's Break the Ice
            <span className="text-2xl">☕</span>
          </span>
        </button>
      </div>
    </div>
  );
}
