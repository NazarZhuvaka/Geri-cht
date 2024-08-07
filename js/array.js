const members = [
    {
        imgUrl:'./img/wade.png',
        svgUrl:'./img/com.svg',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.',
        name: 'Wade Warren',
        role: 'Sommelier',
    } , 
    {
        imgUrl:'./img/jane.png',
        svgUrl:'./img/com.svg',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.',
        name: 'Jane Cooper',
        role: 'Chef',
    } , 
    {
        imgUrl:'./img/robert.png',
        svgUrl:'./img/com.svg',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.',
        name: 'Robert Fox',
        role: 'Chef',
    } , 
    {
        imgUrl:'./img/brooklin.png',
        svgUrl:'./img/com.svg',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.',
        name: 'Brooklyn Simmons',
        role: 'Caterer',
    } ,
    
]

function About () {
    return `
        <div class="testimony__list">
            ${members.map((member) => {
                return Member(member);
            }).join('')}
        </div>
    `
}

function Member (props) {
    return `
        <article class="testimony__block">
            <div class="testimony__block-img">
                <img  src="${props.imgUrl}" >
                <img class="testimony__block-img-com" src="${props.svgUrl}">
            </div>

            <div class="testimony__block-info">
                <p class="testimony__block-info-text">${props.text}</p>
                <h4 class="testimony__block-info-name">${props.name}</h4>
                <p class="testimony__block-info-position">${props.role}</p>
            </div>
        </article>
    `
}


const app = document.getElementById('app');
app.innerHTML = About();
