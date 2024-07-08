const members = [
    {
        imgUrl:'./img/wade.png',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.',
        name: 'Wade Warren',
        role: 'Sommelier',
    } , 
    {
        imgUrl:'./img/jane.png',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.',
        name: 'Jane Cooper',
        role: 'Chef',
    } , 
    {
        imgUrl:'./img/robert.png',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.',
        name: 'Robert Fox',
        role: 'Chef',
    } , 
]

function About () {
    return `
        <div class="members">
            ${members.map((member) => {
                return Member(member);
            }).join('')}
        </div>
    `
}

function Member (props) {
    return `
        <div>
            <img src="${props.imgUrl}" alt=""/>
            <p class="testimony__block-info-text">${props.text}</p>
            <h4 class="testimony__block-info-name">${props.name}</h4>
            <p class="testimony__block-info-position">${props.role}</p>
        </div>
    `
}


const app = document.getElementById('app');
app.innerHTML = About();
