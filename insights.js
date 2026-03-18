const insights = [
  {
    title: "Joy is a proof of work",
    description:
      "Joy is mined like Bitcoin. You can't store or pre-generate it. Each day requires mining operations.",
  },
  {
    title: "The earthsuit",
    description:
      "We watch life on the internal screen of a body-mind suit. Don't become its slave.",
  },
  {
    title: "Think forward",
    description:
      "True thoughts create reality, not evaluate the past. Think forward toward creation, not backward toward judgment.",
  },
  {
    title: "Projector vs receiver",
    description:
      "Be the projector of reality, not a receiver. Create the world instead of reacting to it.",
  },
  {
    title: "Suffering is optional",
    description:
      "First arrow: what happens to you. Second arrow: your suffering about it. The second one is optional.",
  },
  {
    title: "Space of variants",
    description:
      "Everything that can happen in the next moment. Seeing this space gives you the gift of foresight.",
  },
  {
    title: "The reactor within",
    description:
      "Within each of us is a reactor generating consciousness. Joy is the fundamental substance it produces.",
  },
  {
    title: "Muddy waters",
    description:
      "Muddy water is best cleared by leaving it alone. Stop stirring your mind and clarity emerges naturally.",
  },
  {
    title: "Life is temporary",
    description:
      "We have ~70 years. That's all. Use life to mine happiness, not accumulate suffering.",
  },
  {
    title: "True desires",
    description:
      "True desires create new reality and come from the soul. They're constructive and bring joy throughout the process.",
  },
  {
    title: "Be like water",
    description:
      "Life should flow, not be rigid. The harder we try, the less we succeed. Trust and let go.",
  },
  {
    title: "Mining vs digging",
    description:
      "Mine for joy, don't dig into problems. One is productive, the other destructive.",
  },
  {
    title: "The matrix",
    description:
      "Your personal reality construct loads fresh each day. Be conscious about what you're loading.",
  },
  {
    title: "It's always today",
    description: "Tomorrow doesn't exist, be in full contact with today.",
  },
  {
    title: "Witness consciousness",
    description:
      "Observe your own thoughts and patterns. Freedom comes through dis-identification.",
  },
  {
    title: "Know thyself",
    description:
      "Most people avoid self-knowledge because the truth is expensive.",
  },
  {
    title: "No burden",
    description:
      "The mind accumulates psychological metabolites. Psychedelics clean out what sleep can't clear.",
  },
  {
    title: "Train your body",
    description:
      "Body is both friend and exoskeleton. Train it well or become its slave. Prevent panic signals.",
  },
  {
    title: "Integration over information",
    description:
      "Knowing without doing is just entertainment.",
  },
  {
    title: "Reverse effort",
    description:
      "Sometimes the answer is to do the opposite. Don't force, don't resist and don't control.",
  },
  {
    title: "Antifragility",
    description:
      "When you watch from the witness seat, nothing lands.",
  },
  {
    title: "Body as tyrant",
    description:
      "The body can become a master instead of servant, demanding cravings rather than creating joy from useful functions.",
  },
  {
    title: "Life as game",
    description:
      "The goal isn't to win but to keep playing. Winning means noticing parasitic games and not participating.",
  },
  {
    title: "Everything is temporary",
    description:
      "Like a life on a cruise ship - either submit and lose yourself or realize it's all temporary and not real.",
  },
  {
    title: "Internal locus",
    description:
      "Be minimally important outside but maximally important inside - undemanding but discerning.",
  },
  {
    title: "Perfect day every day",
    description:
      "Same structure every day. Rhythm where everything works in unison.",
  },
  {
    title: "Strategic ignorance",
    description:
      "You can choose not to play games where you don't like the rules - selective detachment from unconscious commitments.",
  },
  {
    title: "The opposite",
    description:
      "Everything turns out opposite. Focus on causes not consequences, see WHY things happen not just WHAT.",
  },
  {
    title: "Mental silence",
    description:
      "Peace comes from not engaging with negative thoughts. They're not interesting and only create chain reactions.",
  },
  {
    title: "Playing the long game",
    description:
      "Look beyond immediate self-interest. See patterns and consequences that extend far into the future.",
  },
  {
    title: "Life's brevity",
    description:
      "We have only ~70 years to experience life, yet we waste it suffering and fighting our animal nature.",
  },
  {
    title: "Universal complexity",
    description:
      "Everything in the Universe becomes more complex over time - the game creates itself, becoming more interesting.",
  },
  {
    title: "Peace and chill",
    description:
      "Liberation through extinguishing desires with knowledge, wisdom, and meditation.",
  },
  {
    title: "Synchronicity magic",
    description:
      "The universe responds to clear intentions. Don't accumulate karma, just be a good person.",
  },
  {
    title: "The prison of the mind",
    description:
      "We project ourselves into imaginary worlds based on memories and fears. Turn attention from screen to self.",
  },
  {
    title: "Natural distribution",
    description:
      "2% think, 3% think they think, 95% would rather die than think - Bernard Shaw.",
  },
  {
    title: "Mental poisons",
    description:
      "Mental formations that poison consciousness with venom that lasts a lifetime.",
  },
  {
    title: "Everything is new",
    description: "Every moment you can be anyone. The only prison is memory.",
  },
  {
    title: "No offense",
    description:
      "Game theory applied to life - everyone can do what they want but consider mutual benefit.",
  },
  {
    title: "No rest needed",
    description:
      "When everything is joy, you don't need rest from anything. There is no rest in the cemetery.",
  },
  {
    title: "Enough to live",
    description:
      "Whoever is not in his coffin and the dark grave, let him know he has enough. - Walt Whitman",
  },
  {
    title: "Flow state",
    description:
      "Flow is when spirit and mind unite. The stop resisting what should happen.",
  },
  {
    title: "The middle way",
    description:
      "Between past and future lies the present. Notice your breath - when you notice, you're always here.",
  },
  {
    title: "World as perception",
    description:
      "The cornerstone of therapy is realizing the world is exactly as you perceive it.",
  },
  {
    title: "Narrative control",
    description:
      "Until the unconscious becomes conscious, it will direct your life and you'll call it fate. - Carl Jung",
  },
  {
    title: "No control",
    description:
      "Never act until you have clearly answered: What happens if I do nothing? - Robert Brault",
  },
  {
    title: "Yoga of water",
    description:
      "Freediving is unity of breath, mind, and movement in the weightless realm.",
  },
  {
    title: "The day only gets better",
    description:
      "Notice how the day only gets better. When you notice - say it. ",
  },
  {
    title: "Refuse to suffer",
    description: "Stop. Heal. Refuse. Pass it on.",
  },
];

let insightsQueue = [...insights];

function getNextInsights(count = 4) {
  if (insightsQueue.length < count) {
    insightsQueue = [...insights].sort(() => 0.5 - Math.random());
  }

  const selected = insightsQueue.slice(0, count);
  insightsQueue = [...insightsQueue.slice(count), ...selected];

  return selected;
}

function displayInsights() {
  const container = document.getElementById("insights-container");
  const selectedInsights = getNextInsights(4);

  container.innerHTML = selectedInsights
    .map(
      (insight, i) => `
        <article class="insight-card insight-enter" style="animation-delay: ${i * 0.08}s">
            <h3>${insight.title}</h3>
            <p>${insight.description}</p>
        </article>
    `,
    )
    .join("");
}

// Initial display
document.addEventListener("DOMContentLoaded", () => {
  let intervalId;
  let countdownIntervalId;
  let secondsLeft = 30;

  function updateCountdown() {
    const countdownEl = document.getElementById("countdown");
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
  const refreshButton = document.getElementById("refresh-insights");
  if (refreshButton) {
    const handleRefresh = (e) => {
      e.preventDefault();
      displayInsights();
      startTimer(); // Restart the timer after manual click
    };

    refreshButton.addEventListener("click", handleRefresh);
  }

  // Handle click on insights container
  const insightsContainer = document.getElementById("insights-container");
  if (insightsContainer) {
    insightsContainer.addEventListener("click", () => {
      displayInsights();
      startTimer(); // Restart the timer after manual click
    });
  }
});
