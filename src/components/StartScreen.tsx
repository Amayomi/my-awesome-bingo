interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6 bg-gradient-to-br from-cream to-lavender">
      <div className="text-center max-w-lg w-full space-y-6">
        {/* Hero Section */}
        <div className="animate-[slideUpFade_0.6s_ease-out_forwards] opacity-0">
          <div className="text-6xl mb-4">☕</div>
          <h1 className="text-7xl font-display text-espresso mb-2">
            Soc Ops
          </h1>
          <p className="text-lg text-espresso/70 font-body font-light">
            Break the ice. Find your people.
          </p>
        </div>

        {/* Card 1: Why Soc Ops? */}
        <div 
          className="bg-peach/90 backdrop-blur-sm rounded-2xl p-6 border-2 border-latte shadow-lg hover:shadow-xl hover:bg-peach transition-all duration-300 animate-[slideUpFade_0.6s_ease-out_forwards] opacity-0"
          style={{ animationDelay: '0.2s' }}
        >
          <h2 className="text-2xl font-display text-espresso mb-3">Why Soc Ops?</h2>
          <p className="text-espresso/80 font-body leading-relaxed">
            Turn awkward introductions into meaningful connections. Discover shared experiences and build community through playful conversation.
          </p>
        </div>

        {/* Card 2: How It Works */}
        <div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border-2 border-latte shadow-lg animate-[slideUpFade_0.6s_ease-out_forwards] opacity-0"
          style={{ animationDelay: '0.4s' }}
        >
          <h2 className="text-2xl font-display text-espresso mb-5">How It Works</h2>
          
          {/* Step Cards */}
          <div className="space-y-3">
            {/* Step 1 */}
            <div 
              className="bg-white rounded-xl p-4 border border-latte/50 shadow-sm hover:shadow-md hover:bg-cream/30 transition-all duration-200 flex items-start gap-4"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-espresso flex items-center justify-center">
                <span className="text-2xl font-display text-white">1</span>
              </div>
              <div className="flex-1 text-left">
                <div className="text-2xl mb-1">👥</div>
                <p className="text-sm text-espresso/80 font-body">
                  Find people who match the prompts
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div 
              className="bg-white rounded-xl p-4 border border-latte/50 shadow-sm hover:shadow-md hover:bg-cream/30 transition-all duration-200 flex items-start gap-4 ml-2"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-espresso flex items-center justify-center">
                <span className="text-2xl font-display text-white">2</span>
              </div>
              <div className="flex-1 text-left">
                <div className="text-2xl mb-1">✅</div>
                <p className="text-sm text-espresso/80 font-body">
                  Tap squares as you discover matches
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div 
              className="bg-white rounded-xl p-4 border border-latte/50 shadow-sm hover:shadow-md hover:bg-cream/30 transition-all duration-200 flex items-start gap-4 ml-4"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-espresso flex items-center justify-center">
                <span className="text-2xl font-display text-white">3</span>
              </div>
              <div className="flex-1 text-left">
                <div className="text-2xl mb-1">🎉</div>
                <p className="text-sm text-espresso/80 font-body">
                  Complete 5 in a row to celebrate!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div 
          className="animate-[slideUpFade_0.6s_ease-out_forwards] opacity-0"
          style={{ animationDelay: '0.6s' }}
        >
          <button
            onClick={onStart}
            className="w-full bg-espresso text-white font-body font-semibold py-4 px-8 rounded-2xl text-lg hover:bg-espresso-light active:scale-95 transition-all duration-200 shadow-lg"
          >
            Let's Break the Ice
          </button>
        </div>
      </div>
    </div>
  );
}
