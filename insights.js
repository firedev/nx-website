const insights = [
    {
        title: "Joy as Proof of Work",
        description: "Joy is mined like Bitcoin. You can't store or pre-generate it. Each day requires mining operations."
    },
    {
        title: "The Spacesuit",
        description: "We watch life on the internal screen of our body-mind suit. Don't be its slave."
    },
    {
        title: "Think Forward",
        description: "True thoughts create new reality, not evaluate the past. Think toward creation, not backward toward judgment."
    },
    {
        title: "Projector vs Receiver",
        description: "Be a projector of reality, not just a receiver. Create your world instead of reacting to it."
    },
    {
        title: "The Second Arrow",
        description: "First arrow: what happens to you. Second arrow: your suffering about it. The second one is optional."
    },
    {
        title: "Space of Variations",
        description: "Everything that can happen in the next moment. Seeing this space gives you the gift of foresight."
    },
    {
        title: "The Reactor",
        description: "Within each of us is a reactor generating consciousness. Joy is the fundamental substance it produces."
    },
    {
        title: "Muddy Water",
        description: "Muddy water is best cleared by leaving it alone. Stop stirring your mind and clarity emerges naturally."
    },
    {
        title: "Life is Temporary",
        description: "We have ~70 years. That's all. Use life to mine happiness, not accumulate suffering."
    },
    {
        title: "True Desires",
        description: "True desires create new reality and come from the soul. They're constructive and bring joy throughout the process."
    },
    {
        title: "Be Like Water",
        description: "Life should flow, not be rigid. The harder we try, the less we succeed. Trust and let go."
    },
    {
        title: "Mining vs Digging",
        description: "Mine for joy, don't dig into problems. One is productive, the other destructive."
    },
    {
        title: "The Matrix",
        description: "Your personal reality construct loads fresh each day. Be conscious about what you're loading."
    },
    {
        title: "Present Moment",
        description: "Tomorrow has no significance unless you are in full contact with the present. The more permanent, the more lifeless."
    },
    {
        title: "Witness Consciousness",
        description: "The ability to observe your own thoughts and patterns. Freedom comes through dis-identification."
    },
    {
        title: "Know Thyself",
        description: "The foundation of all wisdom. Self-awareness is the key to transformation."
    },
    {
        title: "No Unnecessary Burden",
        description: "Modern minds accumulate psychological metabolites. Psychedelics clean out what sleep can't clear."
    },
    {
        title: "Train Your Body",
        description: "Body is both friend and exoskeleton. Train it well or become its slave. Regular exercise prevents panic signals."
    },
    {
        title: "Integration Over Information",
        description: "What matters isn't how much you learn, but how much you integrate. Apply what you discover."
    },
    {
        title: "Reverse Effort",
        description: "Sometimes the answer is to do the opposite. When stuck, try reversing your approach."
    },
    {
        title: "Antifragility",
        description: "Being in witness consciousness makes you flexible and unable to be victimized through ego attacks."
    },
    {
        title: "Body as Tyrant",
        description: "The body can become a master instead of servant, demanding cravings rather than creating joy from useful functions."
    },
    {
        title: "Life as Game",
        description: "The goal isn't to win but to keep playing. Winning means noticing parasitic games and not participating."
    },
    {
        title: "Everything is Temporary",
        description: "Like life on a cruise ship - either submit and lose yourself or realize it's all temporary and not real."
    },
    {
        title: "Internal Locus",
        description: "Be minimally important outside but maximally important inside - undemanding but discerning."
    },
    {
        title: "Perfect Day Ritual",
        description: "Having the same ideal day structure creates rhythm where everything works in unison."
    },
    {
        title: "You Don't Have to Participate",
        description: "You can choose not to play games where you don't like the rules - selective detachment from unconscious commitments."
    },
    {
        title: "The Opposite",
        description: "Everything turns out opposite. Focus on causes not consequences, see WHY things happen not just WHAT."
    },
    {
        title: "Mental Silence",
        description: "Peace comes from not engaging with negative thoughts. They're not interesting and only create chain reactions."
    },
    {
        title: "Playing the Long Game",
        description: "Look beyond immediate self-interest. See patterns and consequences that extend far into the future."
    },
    {
        title: "Life's Brevity",
        description: "We have only ~70 years to experience life, yet we waste it suffering and fighting our animal nature."
    },
    {
        title: "Universal Complexity",
        description: "Everything in the Universe becomes more complex over time - the game creates itself, becoming more interesting."
    },
    {
        title: "Nirvana as Extinguishing",
        description: "Liberation through extinguishing desires - path includes knowledge, morality, and meditation."
    },
    {
        title: "Synchronicity Magic",
        description: "Recording instances when wishes manifest - the universe responds to clear intentions."
    },
    {
        title: "Imagination Prison",
        description: "We project ourselves into imaginary worlds based on memories and fears - switch attention from screen to self."
    },
    {
        title: "Natural Distribution",
        description: "2% think, 3% think they think, 95% would rather die than think - Bernard Shaw."
    },
    {
        title: "Klesha - Mental Ticks",
        description: "Mental formations that poison consciousness like ticks injecting venom that lasts a lifetime."
    },
    {
        title: "Freediving as Unity",
        description: "Underwater loneliness transforms into unity - a dance to the music of the soul."
    },
    {
        title: "Negotiating Without Offense",
        description: "Game theory applied to life - everyone can do what they want but consider mutual benefit."
    },
    {
        title: "No Rest Needed",
        description: "When work is joy, you don't need rest from anything. Rest in cemetery is forbidden."
    }
];

function getRandomInsights(count = 4) {
    const shuffled = [...insights].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function displayInsights() {
    const container = document.getElementById('insights-container');
    const selectedInsights = getRandomInsights(4);
    
    container.innerHTML = selectedInsights.map(insight => `
        <div class="glass-effect rounded-lg p-4 transition-all duration-500">
            <h3 class="font-semibold mb-2">${insight.title}</h3>
            <p class="opacity-90">${insight.description}</p>
        </div>
    `).join('');
}

// Initial display
document.addEventListener('DOMContentLoaded', () => {
    let intervalId;
    
    function startTimer() {
        // Clear existing interval if any
        if (intervalId) {
            clearInterval(intervalId);
        }
        // Start new interval
        intervalId = setInterval(displayInsights, 30000);
    }
    
    // Initial display
    displayInsights();
    startTimer();
    
    // Change on click and restart timer
    const philosophySection = document.querySelector('.philosophy-section');
    if (philosophySection) {
        philosophySection.addEventListener('click', (e) => {
            if (e.target.closest('#insights-container')) {
                displayInsights();
                startTimer(); // Restart the timer after manual click
            }
        });
    }
});