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
        title: "Dream Life",
        description: "Be the projector of reality, not a receiver. Don't stop projecting your reality."
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
        description: "Mine for joy (копай), don't dig into problems (копайся). One is productive, the other destructive."
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
    displayInsights();
    
    // Change insights every 30 seconds
    setInterval(displayInsights, 30000);
    
    // Also change on click
    const philosophySection = document.querySelector('.philosophy-section');
    if (philosophySection) {
        philosophySection.addEventListener('click', (e) => {
            if (e.target.closest('#insights-container')) {
                displayInsights();
            }
        });
    }
});