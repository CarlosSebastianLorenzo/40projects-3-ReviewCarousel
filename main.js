let $main = document.querySelector('main');
let fragment = document.createElement('fragment');
let $prev = document.querySelectorAll('i')[0];
let $next = document.querySelectorAll('i')[1];
let $random = document.querySelector('button');

let array = [{
    name: 'Fernando Andrés Raggio',
    img: 'https://unavatar.io/github/JoeTheorium',
    job: 'Front-end Web Developer',
    comment: 'Self-taught student and professional passionate about application development and software functionality.'
},
{
    name: 'Carlos Sebastian Lorenzo',
    img: 'https://unavatar.io/github/CarlosSebastianLorenzo',
    job: 'Full-stack Web Developer',
    comment: '"Hello! I am a Full Stack Jr. Web Developer with over a year of training, focused on CSS, Javascript, Vue, Angular, and Spring Boot. I always strive to be a supportive, attentive, flexible, creative, and problem-solving teammate."'
},
{
    name: 'Ignacio Vassallo',
    img: 'https://unavatar.io/github/Vassa94',
    job: 'Full-stack Web Developer',
    comment: 'I am a Jr. Full Stack Developer with experience in web development and backend, focusing on Angular, Typescript, Java, MySQL and others. My experience includes 3D design skills with SolidWorks and Fusion360. My motivation is to be in constant evolution, seeking new challenges and interesting projects to work on. In the long term, I am interested in diving deeper into BCI and IAN, as I believe the next evolution will be between human and computational systems.'
},
{
    name: 'Joaquin Sampieri',
    img: 'https://unavatar.io/github/joacosam',
    job: 'Front-end Web Developer',
    comment: 'Self-taught student and professional passionate about application development and software functionality.'
}]

fragment.innerHTML =
    `
    <section>
    <picture>
        <img class="img" src="https://unavatar.io/github/JoeTheorium" alt="JoeTheorium">
    </picture>
    <h3>Susan Smith</h3>
    <h4>WEB DEVELOPER</h4>
    <p>I'm baby meggings twee healt goth +1. Bicycle rights numeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry</p>
    <div>
        <i class="fa-solid fa-chevron-left"></i>
        <i class="fa-solid fa-chevron-right"></i>
    </div>
    <button>Surprise Me</button>
    </section>
    `
$main.appendChild(fragment);