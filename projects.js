
const projects = [
    {
        id: 1,
        img: 'assets/agregore.png',
        title: 'Agregore',
        text: 'An experimental web browser for mixing together p2p and web3 protocols.', 
        socials: [
            {
                img: 'assets/website.png',
                link: ''
            },
            {
                img: 'assets/icons8-github-100.png',
                link: ''
            },
            {
                img: 'assets/icons8-discord-new-100.png',
                link: ''
            },
            {
                img: 'assets/icons8-twitter-100.png',
                link: ''
            }
        ], 
        tags: ['Node JS', 'P2P Browser']
    }
]

let projectsContainer = document.getElementById('projectsContainer')

let project = projects.map(e => `<div class="project_card">
    <img
        class="project_img"
        src="${e.img}"
        alt=""
    />
    <div>
    <h6 class="project_title">${e.title}</h6>
    <p class="project_text">
        ${e.text}
    </p>
    <div class="project_sm">
        ${e.socials.map(s => `<a href='${s.link}'><img src="${s.img}" alt="" /></a>`).join('')}
    </div>
    <div class="project_tags">
        ${e.tags.map(tag => `<p class="project_tag">${tag}</p>`).join('')}
        
    </div>
    </div>
</div>`).join('')

projectsContainer.innerHTML = project