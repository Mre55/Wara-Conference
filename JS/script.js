const openMobileMenu = document.querySelector('.hamburger-icon');
const closeMobileMenu = document.querySelector('.close-button');
const menuContainer = document.querySelector('.mobile-menu-list');
const humburgerButton = document.querySelector('.hamburger-icon');
const mobileMenu = document.querySelector('.mobile-menu');

const featuredSpeakersContainer = document.querySelector('.featured-speakers-container');
const showMoreBtn = document.querySelector('.show-more-btn');

const speakers = [
  {
    name: 'Bishop Samuel Smith',
    position: 'General Chairman of the Apostolic World Christian Fellowship [AWCF].',
    description: 'Bishop Samuel Smith is honored among Apostolics across the globe as a modern day Apostle.',
    speaker_image: './Images/smith.jpeg',
  },
  {
    name: 'Bishop Degu Kebede',
    position: 'General Chairman of the Apostolic Church of Ethiopia [ACE].',
    description: 'Bishop Degu Kebede is honored among Apostolics across the globe as a modern day Apostle.',
    speaker_image: './Images/degu.jpeg',
  },
  {
    name: 'Bishop Samuel Smith',
    position: 'General Chairman of the Apostolic World Christian Fellowship [AWCF].',
    description: 'Bishop Samuel Smith is honored among Apostolics across the globe as a modern day Apostle.',
    speaker_image: './Images/smith.jpeg',
  },
  {
    name: 'Bishop Degu Kebede',
    position: 'General Chairman of the Apostolic Church of Ethiopia [ACE].',
    description: 'Bishop Degu Kebede is honored among Apostolics across the globe as a modern day Apostle.',
    speaker_image: './Images/degu.jpeg',
  },
  {
    name: 'Bishop Samuel Smith',
    position: 'General Chairman of the Apostolic World Christian Fellowship [AWCF].',
    description: 'Bishop Samuel Smith is honored among Apostolics across the globe as a modern day Apostle.',
    speaker_image: './Images/smith.jpeg',
  },
  {
    name: 'Bishop Degu Kebede',
    position: 'General Chairman of the Apostolic Church of Ethiopia [ACE].',
    description: 'Bishop Degu Kebede is honored among Apostolics across the globe as a modern day Apostle.',
    speaker_image: './Images/degu.jpeg',
  },
];

closeMobileMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  humburgerButton.classList.remove('hide');
});

menuContainer.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  humburgerButton.classList.remove('hide');
});

openMobileMenu.addEventListener('click', () => {
  mobileMenu.classList.add('active');
  humburgerButton.classList.add('hide');
});

document.addEventListener('DOMContentLoaded', () => {
  featuredSpeakersContainer.innerHTML = speakers.map((speaker) => `
        <article class="speaker-catagories">
                <div class="speaker-img">
                    <img src=${speaker.speaker_image} alt="speaker image">
                </div>
                <div class="speaker-text">
                    <div class="speaker-name">
                        <h5>${speaker.name}</h5>
                    </div>
                    <div class="speaker-position">
                        <p>${speaker.position}</p>
                    </div>
                    <div class="speaker-detail">
                        <p>${speaker.description}</p>
                    </div>
                </div>
        </article>
    `);
  showMoreBtn.addEventListener('click', () => {
    const isMoreClicked = featuredSpeakersContainer.classList.contains('show-more');
    if (isMoreClicked) {
      featuredSpeakersContainer.classList.remove('show-more');
    } else {
      featuredSpeakersContainer.classList.add('show-more');
    }
  });
});
