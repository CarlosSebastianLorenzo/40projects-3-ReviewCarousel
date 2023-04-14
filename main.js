const $main = document.querySelector('main');
const fragment = document.createElement('fragment');

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
    comment: "Hi, I'm Joaco. I'm a responsible person interested in starting to develop professionally as a developer to apply all the knowledge acquired in recent years. I'm capable of addressing client requirements, analyzing them, working in a team, and carrying out their development in a timely manner, complying with the best market practices and under agile methodologies."
}]

function renderPerson (person) {
    $main.innerHTML = ""
    fragment.innerHTML =
        `
        <section>
        <picture>
            <img class="img" src="${person.img}" alt="${person.name}">
        </picture>
        <h3>${person.name}</h3>
        <h4>${person.job}</h4>
        <p>${person.comment}</p>
        <div>
            <i onclick="prev()" class="fa-solid fa-chevron-left"></i>
            <i onclick="next()" class="fa-solid fa-chevron-right"></i>
        </div>
        <button onclick="random()">Surprise Me</button>
        </section>
        `
    $main.appendChild(fragment);
}

renderPerson(array[0])

let index = 0;

function prev (){
    index>0?index--:index=array.length-1;
    renderPerson(array[index]);
}
function next (){
    index<(array.length-1)?index++:index=0;
    renderPerson(array[index]);
}
function random(){
    index=Math.floor(Math.random()*array.length);
    renderPerson(array[index]);
}