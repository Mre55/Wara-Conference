const openMobileMenu = document.querySelector('.hamburger-icon');
const closeMobileMenu = document.querySelector('.close-button');
const menuContainer = document.querySelector('.mobile-menu-list');
const humburgerButton = document.querySelector('.hamburger-icon');
const mobileMenu = document.querySelector('.mobile-menu');

const featuredSpeakersContainer = document.querySelector('.featured-speakers-container');
const showMoreBtn = document.querySelector('.show-more-btn');
const showMoreSpan = document.querySelector('.more');
const showLessSpan = document.querySelector('.down-arrow');

const speakers = [
  {
    name: 'Bishop Samuel Smith',
    title: 'General Chairman of the Apostolic World Christian Fellowship [AWCF].',
    description: 'Bishop Samuel Smith is honored among Apostolics across the globe as a modern day Apostle.',
    speaker_image: './Images/smith.jpeg',
  },
  {
    name: 'Bishop Degu Kebede',
    title: 'General Chairman of the Apostolic Church of Ethiopia [ACE].',
    description: 'Bishop Degu Kebede is honored among Apostolics across the globe as a modern day Apostle.',
    speaker_image: './Images/degu.jpeg',
  },
  {
    name: 'Bishop Teklemariam Gezahagne',
    title: 'Former general Chairman of the Apostolic Church of Ethiopia [ACE].',
    description: 'Bishop Teklemariam Gezahegn(Dr.) began to embrace and preach the doctrines of Oneness and Jesus Name baptism during this time. In recent years, the ACI has become more ethnically diverse.',
    speaker_image: './Images/tekele.jpeg',
  },
  {
    name: 'Dr. C.H. Braddy',
    title: 'CEO and Chairman of Faith Apostolic Ministries',
    description: 'Dr. C.H. Braddy has stood before Presidents, Heads of State and has traveled the world... Physician, scientist, educator, author, educator or JUST PREACHER...Dr. C.H. Braddy, Senior Pastor and Founder of Now Faith!',
    speaker_image: './Images/brady.jpeg',
  },
  {
    name: 'Pastor Luke Smith',
    title: 'General Chairman of International Ministries Chairman at [AWCF].',
    description: 'Luke Benjamin Smith became the pastor of Linden Heights Baptist Church in 2010. He is a native of Washington, D.C. Luke studied at New Orleans Baptist Theological Seminary.',
    speaker_image: './Images/lukesmith.jpeg',
  },
  {
    name: 'Pastor Elias Shebabaw',
    title: 'Chairman of Apostolic Books Association at the Apostolic Church of Ethiopia [ACE].',
    description: 'Pastor Elias Shebabaw have a book called "The secret of Trinity tested with the light of One God".',
    speaker_image: './Images/elias.jpeg',
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
                    <div class="speaker-title">
                        <p>${speaker.title}</p>
                    </div>
                    <div class="speaker-detail">
                        <p>${speaker.description}</p>
                    </div>
                </div>
        </article>
    `).join('');
  showMoreBtn.addEventListener('click', () => {
    const isMoreClicked = featuredSpeakersContainer.classList.contains('show-more');
    if (isMoreClicked) {
      featuredSpeakersContainer.classList.remove('show-more');
      showMoreSpan.innerHTML = 'MORE';
      showLessSpan.innerHTML = '&#8964';
      showLessSpan.classList.add('down-arrow');
      showLessSpan.classList.remove('up-arrow');
    } else {
      featuredSpeakersContainer.classList.add('show-more');
      showMoreSpan.innerHTML = 'LESS';
      showLessSpan.innerHTML = '&#8963';
      showLessSpan.classList.add('up-arrow');
      showLessSpan.classList.remove('down-arrow');
    }
  });
});
