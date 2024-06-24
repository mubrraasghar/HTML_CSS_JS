function revealMessage(box) {
    box.innerHTML = getSurpriseContent();
    box.style.backgroundColor = getRandomColor();
    addConfetti();
  }

  function getSurpriseContent() {
    const messages = [
      "Wishing you a fantastic day filled with joy and laughter!",
      "May all your dreams come true on this special day!",
      "Cheers to another year of wonderful memories!",
      "Sending you lots of happiness on your birthday!",
      "May your day be as special as you are!",
      "On yor special day may the sun shine a little brighter, the similes be a bit wider, and the joy be endless",
      "Wishing you a year ahead filled with sucess, good health, and all the happiness in the world",
      "Live Long Life",
      "Once again, HAPPY BIRTHDAY! 🎂"
    ];

    return messages[Math.floor(Math.random() * messages.length)];
  }

  function addConfetti() {
    const confettiContainer = document.getElementById('confetti');

    for (let i = 0; i < 30; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.backgroundColor = getRandomColor();
      confetti.style.left = `${Math.random() * 100}%`;
      confetti.style.animationDuration = `${Math.random() * 2 + 1}s`;
      confettiContainer.appendChild(confetti);
    }
  }

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }