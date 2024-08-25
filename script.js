const projects = [
    {
        city: 'Rostov-on-Don',
        area: '81 m2',
        time: '3.5 months',
        cost: 'Upon request',
        img: 'images/image1.jpg',
        title: 'Rostov-on-Don, Admiral'
    },
    {
        city: 'Sochi',
        area: '105 m2',
        time: '4 months',
        cost: 'Upon request',
        img: 'images/image2.jpg',
        title: 'Sochi Thieves'
    },
    {
        city: 'Rostov-on-Don',
        area: '93 m2',
        time: '3 months',
        cost: 'Upon request',
        img: 'images/image3.jpg',
        title: 'Rostov-on-Don Patriotic'
    }
];

let currentIndex = 0;

const setProject = (index) => {
    const project = projects[index];
    document.getElementById('city').textContent = project.city;
    document.getElementById('area').textContent = project.area;
    document.getElementById('time').textContent = project.time;
    document.getElementById('cost').textContent = project.cost;
    
    document.querySelectorAll('.slide').forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });

    document.querySelectorAll('.dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });

    document.querySelectorAll('.project-link').forEach((link, i) => {
        link.classList.toggle('active', i === index);
    });
};

setProject(currentIndex);

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : projects.length - 1;
    setProject(currentIndex);
});

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex < projects.length - 1) ? currentIndex + 1 : 0;
    setProject(currentIndex);
});

document.querySelectorAll('.dot').forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        setProject(currentIndex);
    });
});

document.querySelectorAll('.project-link').forEach((link, index) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        currentIndex = index;
        setProject(currentIndex);
    });
});
