const moreSuggestionsForYouBlock = document.querySelector("div[data-launchpad-scroll-anchor='pymk']");
const cards = Array.from(moreSuggestionsForYouBlock.querySelectorAll("li"));
const recruitersCards = cards.filter(card => /recruiter|acquisition/i.test(card.querySelector(".discover-person-card__occupation").textContent));

recruitersCards.forEach(recruiterCard => recruiterCard.querySelector("footer button").click());
