import { useState } from 'react';

interface StartScreenProps {
  onStart: () => void;
}

type WhyPlayTab = 'fast' | 'social' | 'celebration';

const whyPlayContent = {
  fast: 'Takes 10 minutes. No complex rules. Start immediately.',
  social: 'Designed to help you meet people and make connections.',
  celebration: 'Real moments of joy when someone gets BINGO!',
};

export function StartScreen({ onStart }: StartScreenProps) {
  const [selectedTab, setSelectedTab] = useState<WhyPlayTab>('fast');
  const [expandedStep, setExpandedStep] = useState<number>(1);

  const toggleStep = (stepNumber: number) => {
    setExpandedStep(expandedStep === stepNumber ? 0 : stepNumber);
  };

  const handleTabClick = (tab: WhyPlayTab) => {
    setSelectedTab(tab);
  };

  const handleKeyDown = (e: React.KeyboardEvent, callback: () => void) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      callback();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6 bg-gradient-to-b from-cream to-lavender">
      <div className="w-full max-w-2xl space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <div className="text-6xl">☕</div>
          <h1 className="text-7xl font-display font-bold text-espresso">Soc Ops</h1>
          <p className="text-2xl text-espresso/80 font-semibold">Break the ice. Find your people.</p>
          <p className="text-lg text-espresso/70">Perfect for mixers, corporate events, or new friends</p>
        </div>

        {/* Interactive "Why Play" Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-peach transition-all hover:shadow-xl">
          <h2 className="text-2xl font-bold text-espresso mb-4 text-center">Why Play?</h2>
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => handleTabClick('fast')}
              onKeyDown={(e) => handleKeyDown(e, () => handleTabClick('fast'))}
              className={`flex-1 py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-200 cursor-pointer ${
                selectedTab === 'fast'
                  ? 'bg-espresso text-cream shadow-md transform scale-105'
                  : 'bg-cream text-espresso hover:shadow-md'
              }`}
              aria-pressed={selectedTab === 'fast'}
            >
              ⚡ Fast
            </button>
            <button
              onClick={() => handleTabClick('social')}
              onKeyDown={(e) => handleKeyDown(e, () => handleTabClick('social'))}
              className={`flex-1 py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-200 cursor-pointer ${
                selectedTab === 'social'
                  ? 'bg-espresso text-cream shadow-md transform scale-105'
                  : 'bg-cream text-espresso hover:shadow-md'
              }`}
              aria-pressed={selectedTab === 'social'}
            >
              🌟 Social
            </button>
            <button
              onClick={() => handleTabClick('celebration')}
              onKeyDown={(e) => handleKeyDown(e, () => handleTabClick('celebration'))}
              className={`flex-1 py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-200 cursor-pointer ${
                selectedTab === 'celebration'
                  ? 'bg-espresso text-cream shadow-md transform scale-105'
                  : 'bg-cream text-espresso hover:shadow-md'
              }`}
              aria-pressed={selectedTab === 'celebration'}
            >
              🎉 Celebration
            </button>
          </div>
          <div
            className="text-center text-espresso/90 min-h-[4rem] flex items-center justify-center p-4 bg-cream/50 rounded-lg"
            key={selectedTab}
            style={{
              animation: 'fadeIn 200ms ease-in',
            }}
          >
            {whyPlayContent[selectedTab]}
          </div>
        </div>

        {/* Progressive "How It Works" Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-peach transition-all hover:shadow-xl">
          <h2 className="text-2xl font-bold text-espresso mb-4 text-center">How It Works</h2>
          <div className="space-y-3">
            {/* Step 1 */}
            <div className="bg-cream rounded-lg overflow-hidden transition-all duration-300">
              <button
                onClick={() => toggleStep(1)}
                onKeyDown={(e) => handleKeyDown(e, () => toggleStep(1))}
                className="w-full text-left p-4 flex items-center justify-between cursor-pointer hover:bg-peach/20 transition-colors"
                aria-expanded={expandedStep === 1}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-espresso text-cream rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <span className="font-semibold text-espresso">Find people who match</span>
                </div>
                <span className="text-espresso">{expandedStep === 1 ? '−' : '+'}</span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedStep === 1 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-4 pb-4 text-espresso/80">
                  Mingle with others and find people who match the questions on your bingo card. Each square represents a unique characteristic or experience.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-cream rounded-lg overflow-hidden transition-all duration-300">
              <button
                onClick={() => toggleStep(2)}
                onKeyDown={(e) => handleKeyDown(e, () => toggleStep(2))}
                className="w-full text-left p-4 flex items-center justify-between cursor-pointer hover:bg-peach/20 transition-colors"
                aria-expanded={expandedStep === 2}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-espresso text-cream rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <span className="font-semibold text-espresso">Tap squares</span>
                </div>
                <span className="text-espresso">{expandedStep === 2 ? '−' : '+'}</span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedStep === 2 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-4 pb-4 text-espresso/80">
                  When you find a match, tap the corresponding square on your board. The square will light up to show your progress.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-cream rounded-lg overflow-hidden transition-all duration-300">
              <button
                onClick={() => toggleStep(3)}
                onKeyDown={(e) => handleKeyDown(e, () => toggleStep(3))}
                className="w-full text-left p-4 flex items-center justify-between cursor-pointer hover:bg-peach/20 transition-colors"
                aria-expanded={expandedStep === 3}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-espresso text-cream rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <span className="font-semibold text-espresso">Get BINGO!</span>
                </div>
                <span className="text-espresso">{expandedStep === 3 ? '−' : '+'}</span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedStep === 3 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-4 pb-4 text-espresso/80">
                  Complete 5 squares in a row (horizontal, vertical, or diagonal) to win! Celebrate your connections and keep playing.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            onClick={onStart}
            className="w-full max-w-md bg-espresso text-cream font-bold py-5 px-8 rounded-2xl text-xl cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95 border-2 border-peach"
          >
            Let's Break the Ice 🎉
          </button>
        </div>
      </div>
    </div>
  );
}
