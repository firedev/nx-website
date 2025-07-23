const insights = [
  {
    title: 'Joy is a Proof of Work',
    description: "Joy is mined like Bitcoin. You can't store or pre-generate it. Each day requires mining operations.",
  },
  {
    title: 'The Earthsuit',
    description: "We watch life on the internal screen of our body-mind suit. Don't be its slave.",
  },
  {
    title: 'Think Forward',
    description: 'True thoughts create new reality, not evaluate the past. Think forward toward creation, not backward toward judgment.',
  },
  {
    title: 'Projector vs Receiver',
    description: 'Be the projector of reality, not a receiver. Create world instead of reacting to it.',
  },
  {
    title: 'Suffering is Optional',
    description: 'First arrow: what happens to you. Second arrow: your suffering about it. The second one is optional.',
  },
  {
    title: 'Space of Variants',
    description: 'Everything that can happen in the next moment. Seeing this space gives you the gift of foresight.',
  },
  {
    title: 'The Reactor within',
    description: 'Within each of us is a reactor generating consciousness. Joy is the fundamental substance it produces.',
  },
  {
    title: 'Muddy Waters',
    description: 'Muddy water is best cleared by leaving it alone. Stop stirring your mind and clarity emerges naturally.',
  },
  {
    title: 'Life is Temporary',
    description: "We have ~70 years. That's all. Use life to mine happiness, not accumulate suffering.",
  },
  {
    title: 'True Desires',
    description: "True desires create new reality and come from the soul. They're constructive and bring joy throughout the process.",
  },
  {
    title: 'Be Like Water',
    description: 'Life should flow, not be rigid. The harder we try, the less we succeed. Trust and let go.',
  },
  {
    title: 'Mining vs Digging',
    description: "Mine for joy, don't dig into problems. One is productive, the other destructive.",
  },
  {
    title: 'The Matrix',
    description: "Your personal reality construct loads fresh each day. Be conscious about what you're loading.",
  },
  {
    title: "It's always today",
    description: "Tomorrow doesn't exist, be in full contact with today. ",
  },
  {
    title: 'Witness Consciousness',
    description: 'Observe your own thoughts and patterns. Freedom comes through dis-identification.',
  },
  {
    title: 'Know Thyself',
    description: 'The foundation of all wisdom. Self-awareness is the key to transformation.',
  },
  {
    title: 'No Burden',
    description: "The mind accumulates psychological metabolites. Psychedelics clean out what sleep can't clear.",
  },
  {
    title: 'Train Your Body',
    description: 'Body is both friend and exoskeleton. Train it well or become its slave. Prevent panic signals.',
  },
  {
    title: 'Integration Over Information',
    description: "What matters isn't how much you learn, but how much you integrate. Apply what you discover.",
  },
  {
    title: 'Reverse Effort',
    description: "Sometimes the answer is to do the opposite. Don't force, don't resist and don't control.",
  },
  {
    title: 'Antifragility',
    description: 'Witness consciousness makes you flexible and unable to be victimized through ego attacks.',
  },
  {
    title: 'Body as Tyrant',
    description: 'The body can become a master instead of servant, demanding cravings rather than creating joy from useful functions.',
  },
  {
    title: 'Life as Game',
    description: "The goal isn't to win but to keep playing. Winning means noticing parasitic games and not participating.",
  },
  {
    title: 'Everything is Temporary',
    description: "Like a life on a cruise ship - either submit and lose yourself or realize it's all temporary and not real.",
  },
  {
    title: 'Internal Locus',
    description: 'Be minimally important outside but maximally important inside - undemanding but discerning.',
  },
  {
    title: 'Perfect Day Every Day',
    description: 'Having the same ideal day structure creates rhythm where everything works in unison.',
  },
  {
    title: "Strategic Ignorance",
    description: "You can choose not to play games where you don't like the rules - selective detachment from unconscious commitments.",
  },
  {
    title: 'The Opposite',
    description: 'Everything turns out opposite. Focus on causes not consequences, see WHY things happen not just WHAT.',
  },
  {
    title: 'Mental Silence',
    description: "Peace comes from not engaging with negative thoughts. They're not interesting and only create chain reactions.",
  },
  {
    title: 'Playing the Long Game',
    description: 'Look beyond immediate self-interest. See patterns and consequences that extend far into the future.',
  },
  {
    title: "Life's Brevity",
    description: 'We have only ~70 years to experience life, yet we waste it suffering and fighting our animal nature.',
  },
  {
    title: 'Universal Complexity',
    description: 'Everything in the Universe becomes more complex over time - the game creates itself, becoming more interesting.',
  },
  {
    title: 'Peace and Chill',
    description: 'Liberation through extinguishing desires with knowledge, wisdom, and meditation.',
  },
  {
    title: 'Synchronicity Magic',
    description: "The universe responds to clear intentions. Don't accumulate karma, just be a good person.",
  },
  {
    title: 'The Prison of the Mind',
    description: 'We project ourselves into imaginary worlds based on memories and fears. Turn attention from screen to self.',
  },
  {
    title: 'Natural Distribution',
    description: '2% think, 3% think they think, 95% would rather die than think - Bernard Shaw.',
  },
  {
    title: 'Mental Poisons',
    description: 'Mental formations that poison consciousness with venom that lasts a lifetime.',
  },
  {
    title: 'Freediving as Unity',
    description: 'Underwater solitude transforms into unity - a dance to the music of the soul.',
  },
  {
    title: 'No Offense',
    description: 'Game theory applied to life - everyone can do what they want but consider mutual benefit.',
  },
  {
    title: 'No Rest Needed',
    description: "When everything is joy, you don't need rest from anything. There is no rest in the cemetery.",
  },
  {
    title: 'Enough to Live',
    description: 'Whoever is not in his coffin and the dark grave, let him know he has enough. - Walt Whitman',
  },
  {
    title: 'The Underwater Dance',
    description: 'Freediving is an underwater dance to the music of the soul. At depth, loneliness transforms into unity.',
  },
  {
    title: 'Flow State',
    description: 'Flow is when spirit and mind unite. The stop resisting what should happen.',
  },
  {
    title: 'The Middle Way',
    description: "Between past and future lies the present. Notice your breath - when you notice, you're always here.",
  },
  {
    title: 'World as Perception',
    description: 'The cornerstone of therapy is realizing the world is exactly as you perceive it.',
  },
  {
    title: 'Narrative Control',
    description: "Until the unconscious becomes conscious, it will direct your life and you'll call it fate. - Carl Jung",
  },
  {
    title: 'No Control',
    description: 'Never act until you have clearly answered: What happens if I do nothing? - Robert Brault',
  },
  {
    title: 'Yoga of Water',
    description: 'Freediving is unity of breath, mind, and movement in the weightless realm.',
  },
  {
    title: 'The Day Only Gets Better',
    description: 'Notice how the day only gets better. When you notice - say it. ',
  },
  {
    title: 'Refuse to Suffer',
    description: 'Stop. Heal. Refuse. Pass it on.',
  },
];

function getRandomInsights(count = 4) {
  const shuffled = [...insights].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function displayInsights() {
  const container = document.getElementById('insights-container');
  const selectedInsights = getRandomInsights(4);

  container.innerHTML = selectedInsights.map((insight) => `
        <div class="glass-effect rounded-lg p-4 transition-all duration-500">
            <h3 class="text-lg font-bold tracking-tight mb-2">${insight.title}</h3>
            <p class="opacity-90">${insight.description}</p>
        </div>
    `).join('');
}

// Initial display
document.addEventListener('DOMContentLoaded', () => {
  let intervalId;
  let countdownIntervalId;
  let secondsLeft = 30;

  function updateCountdown() {
    const countdownEl = document.getElementById('countdown');
    if (countdownEl) {
      // Use requestAnimationFrame for smoother updates on iOS
      requestAnimationFrame(() => {
        countdownEl.textContent = secondsLeft;
      });
    }
  }

  function startTimer() {
    // Clear existing intervals if any
    if (intervalId) {
      clearInterval(intervalId);
    }
    if (countdownIntervalId) {
      clearInterval(countdownIntervalId);
    }

    // Reset countdown
    secondsLeft = 30;
    updateCountdown();

    // Start countdown interval (updates every second)
    countdownIntervalId = setInterval(() => {
      secondsLeft -= 1;
      if (secondsLeft < 0) {
        secondsLeft = 30;
      }
      updateCountdown();
    }, 1000);

    // Start refresh interval
    intervalId = setInterval(() => {
      displayInsights();
      secondsLeft = 30;
    }, 30000);
  }

  // Initial display
  displayInsights();
  startTimer();

  // Handle refresh button click with touch support
  const refreshButton = document.getElementById('refresh-insights');
  if (refreshButton) {
    const handleRefresh = (e) => {
      e.preventDefault();
      e.stopPropagation();
      displayInsights();
      startTimer(); // Restart the timer after manual click
    };

    refreshButton.addEventListener('click', handleRefresh);
    refreshButton.addEventListener('touchstart', handleRefresh);
  }

  // Handle click on insights container
  const insightsContainer = document.getElementById('insights-container');
  if (insightsContainer) {
    insightsContainer.addEventListener('click', () => {
      displayInsights();
      startTimer(); // Restart the timer after manual click
    });
  }
});
