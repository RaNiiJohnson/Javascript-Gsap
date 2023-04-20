//   gsap.registrePlugin(Flip);

const links = document.querySelectorAll(".nav-item a");
const activeNav = document.querySelector(".active-nav");

links.forEach((link) => {
  link.addEventListener("click", () => {
    //* turn nav at color iraisana
    gsap.to(links, { color: "#f0f8ff" });

    if (document.activeElement === link) {
      gsap.to(link, { color: "#385ae0" });
    }

    //*wanna move the line
    const state = Flip.getState(activeNav);
    link.appendChild(activeNav);
    Flip.from(state, {
      duration: 1.25,
      absolute: true,
      ease: "elastic.out(1,0.5)",
    });
  });
});


//cards
const cards = document.querySelectorAll('.card');

cards.forEach((card, index) => {
  card.addEventListener('click', () => {
    // get state
    const state = Flip.getState(cards)

    //add the active class to the clicked one and add inactive to the others
    const isCardActive = card.classList.contains('active');
    cards.forEach((otherCard, otherIdx) => {
      otherCard.classList.remove('active');
      otherCard.classList.remove('is-inactive');
      if (!isCardActive && index !== otherIdx) {
        otherCard.classList.add('is-inactive')
      }
    });

    if (!isCardActive) card.classList.add('active')

    Flip.from(state, {
      duration: 1,
      ease: "expo.out",
      absolute: true
    })
  })
})