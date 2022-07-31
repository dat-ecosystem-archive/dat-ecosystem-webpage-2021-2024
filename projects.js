const projects = [
    {
        id: 1,
        img: 'assets/images/agregore.png',
        title: 'Agregore',
        text: 'An experimental web browser for mixing together p2p and web3 protocols.', 
        socials: [
            {
                img: 'assets/images/website.png',
                link: 'https://agregore.mauve.moe/'
            },
            {
                img: 'assets/images/HOME/icons8-github-100.png',
                link: 'https://github.com/AgregoreWeb/agregore-browser'
            },
            {
                img: 'assets/images/HOME/icons8-discord-new-100.png',
                link: 'https://discord.gg/QMthd4Y'
            },
            {
                img: 'assets/images/HOME/icons8-twitter-100.png',
                link: 'https://twitter.com/AgregoreBrowser'
            }
        ], 
        tags: ['hypercore', 'ipfs', 'p2p browser']
    },
    {
        id: 2,
        img: 'assets/images/projects/ahau.jpg',
        title: 'Ahau',
        text: 'Keep track of whānau whakapapa information, preserve and share cultural records and narratives, own and control whānau data and servers, and build a stronger sense of whānau, community and identity.', 
        socials: [
            {
                img: 'assets/images/website.png',
                link: 'https://ahau.io/'
            },
            {
                img: 'assets/images/HOME/gitlab.png',
                link: 'https://gitlab.com/ahau/ahau'
            },
        ], 
        tags: ['hypercore', 'ssb']
    },
    {
        id: 3,
        img: 'assets/images/projects/ara.png',
        title: 'Ara',
        text: 'Ara is a set of decentralized, open source software tools that handle real-world, user-level functionality in online identity, content distribution, and rights management.', 
        socials: [
            {
                img: 'assets/images/website.png',
                link: 'https://ara.one/'
            },
            {
                img: 'assets/images/HOME/icons8-github-100.png',
                link: 'https://github.com/AraBlocks/'
            },
            {
                img: 'assets/images/HOME/icons8-discord-new-100.png',
                link: 'https://discord.gg/eUMzA4Y'
            },
            {
                img: 'assets/images/HOME/icons8-twitter-100.png',
                link: 'http://twitter.com/arablocks'
            }
        ], 
        tags: ['hypercore', 'ethereum']
    },
    {
        id: 4,
        img: 'assets/images/projects/arso.png',
        title: 'Arso',
        text: 'Arso builds tools for decentralized archives of community media, currently developing Sonar, a p2p database and search engine.', 
        socials: [
            {
                img: 'assets/images/website.png',
                link: 'https://arso.xyz/'
            },
            {
                img: 'assets/images/HOME/icons8-github-100.png',
                link: 'https://github.com/arso-project'
            },
            {
                img: 'assets/images/HOME/icons8-discord-new-100.png',
                link: 'https://discord.gg/XfUPZFH6cj'
            },
        ], 
        tags: ['hypercore', 'p2p search']
    },
    {
        id: 5,
        img: 'assets/images/projects/beaker.png',
        title: 'Beaker',
        text: 'Beaker is an experimental browser for exploring and building the peer-to-peer Web.', 
        socials: [
            {
                img: 'assets/images/website.png',
                link: 'https://beakerbrowser.com/'
            },
            {
                img: 'assets/images/HOME/icons8-github-100.png',
                link: 'https://github.com/beakerbrowser/beaker'
            },
            {
                img: 'assets/images/HOME/icons8-twitter-100.png',
                link: 'https://twitter.com/beakerbrowser'
            }
        ], 
        tags: ['hypercore', 'p2p browser']
    },
    {
        id: 6,
        img: 'assets/images/projects/cabal.svg',
        title: 'Cabal',
        text: 'Cabal is an experimental p2p community chat platform, focusing on group chat in channels.', 
        socials: [
            {
                img: 'assets/images/website.png',
                link: 'https://cabal.chat/'
            },
            {
                img: 'assets/images/HOME/icons8-github-100.png',
                link: 'https://github.com/cabal-club'
            },
            {
                img: 'assets/images/HOME/open-collective.png',
                link: 'https://opencollective.com/cabal-club'
            }
        ], 
        tags: ['hypercore', 'kappa db', 'p2p chat']
    },
    {
        id: 7,
        img: 'assets/images/projects/consento.png',
        title: 'Consento',
        text: 'Data privacy for humans, by humans.', 
        socials: [
            {
                img: 'assets/images/website.png',
                link: 'https://consento.org/'
            },
            {
                img: 'assets/images/HOME/icons8-github-100.png',
                link: 'https://github.com/consento-org/'
            },
            {
                img: 'assets/images/HOME/icons8-discord-new-100.png',
                link: 'https://discord.gg/BAPxpGjgXH'
            },
            {
                img: 'assets/images/HOME/icons8-twitter-100.png',
                link: 'https://twitter.com/consentoorg'
            }
        ], 
        tags: ['hypercore', 'Key Management']
    },
    {
        id: 8,
        img: 'assets/images/projects/datdot.png',
        title: 'DatDot',
        text: 'Autonomous hosting network for p2p data systems.', 
        socials: [
            {
                img: 'assets/images/website.png',
                link: 'https://datdot.org/'
            },
            {
                img: 'assets/images/HOME/icons8-github-100.png',
                link: 'https://github.com/datdotorg'
            },
            {
                img: 'assets/images/HOME/icons8-discord-new-100.png',
                link: 'https://discord.gg/CbC325ZkVP'
            },
            {
                img: 'assets/images/HOME/icons8-twitter-100.png',
                link: 'https://twitter.com/datdotorg'
            },
            {
                img: 'assets/images/HOME/open-collective.png',
                link: 'https://opencollective.com/datdotorg'
            }
        ], 
        tags: ['hypercore', 'rust', 'p2p hosting']
    },
    {
        id: 9,
        img: 'assets/images/projects/datrs.png',
        title: 'DatRS',
        text: 'Rust implementation of the Hyper protocols.', 
        socials: [
            {
                img: 'assets/images/HOME/icons8-github-100.png',
                link: 'https://github.com/datrs'
            },
        ], 
        tags: [ 'rust', 'hypercore']
    },
    {
        id: 10,
        img: 'assets/images/projects/hypercore-protocol.svg',
        title: 'Hypercore protocol',
        text: 'A world of distributed data structures', 
        socials: [
            {
                img: 'assets/images/website.png',
                link: 'https://hypercore-protocol.org/'
            },
            {
                img: 'assets/images/HOME/icons8-github-100.png',
                link: 'https://github.com/hypercore-protocol'
            },
            {
                img: 'assets/images/HOME/icons8-discord-new-100.png',
                link: 'https://chat.hypercore-protocol.org/'
            },
            {
                img: 'assets/images/HOME/icons8-twitter-100.png',
                link: 'https://twitter.com/hypercoreproto'
            }
        ], 
        tags: [ 'Node JS', 'Protocol']
    },
    {
        id: 11,
        img: 'assets/images/projects/keet.svg',
        title: 'Keet',
        text: 'Peer-to-Peer Chat: Video & Text. Private & Encrypted. Unparalleled Quality.', 
        socials: [
            {
                img: 'assets/images/website.png',
                link: 'https://keet.io/'
            },
            {
                img: 'assets/images/HOME/icons8-discord-new-100.png',
                link: 'https://discord.com/invite/holepunch'
            },
            {
                img: 'assets/images/HOME/icons8-twitter-100.png',
                link: 'https://twitter.com/keet_io'
            },
        ], 
        tags: ['hypercore', 'streaming', 'holepunch']
    },
    {
        id: 12,
        img: 'assets/images/projects/pico.png',
        title: 'Pico',
        text: 'Web3 Framework, 0% Backend, 10000% Frontend.', 
        socials: [
            {
                img: 'assets/images/website.png',
                link: 'https://decentlabs.se/'
            },
            {
                img: 'assets/images/HOME/icons8-github-100.png',
                link: 'https://github.com/telamon/picostack'
            },
            {
                img: 'assets/images/HOME/icons8-discord-new-100.png',
                link: 'https://discord.gg/8RMRUPZ9RS'
            },
        ], 
        tags: [ 'hyperswarm', 'pico']
    },
    {
        id: 13,
        img: 'assets/images/projects/peermaps.svg',
        title: 'Peermaps',
        text: 'Peermaps is a distributed, offline-friendly alternative to commercial map providers such as google maps.', 
        socials: [
            {
                img: 'assets/images/website.png',
                link: 'https://peermaps.org/'
            },
            {
                img: 'assets/images/HOME/icons8-github-100.png',
                link: 'https://github.com/peermaps'
            },
            {
                img: 'assets/images/HOME/open-collective.png',
                link: 'https://opencollective.com/peermaps'
            }
        ], 
        tags: [ 'hypercore', 'rust', 'p2p maps']
    },
    {
        id: 14,
        img: 'assets/images/projects/sher.png',
        title: 'Sher',
        text: 'A decentralized live streaming audio platform.', 
        socials: [
            {
                img: 'assets/images/website.png',
                link: 'https://sher.geutstudio.com/'
            },
            {
                img: 'assets/images/HOME/icons8-github-100.png',
                link: 'https://github.com/geut'
            },
            {
                img: 'assets/images/HOME/icons8-discord-new-100.png',
                link: 'https://discord.gg/U97rWWNyeK'
            },
            {
                img: 'assets/images/HOME/icons8-twitter-100.png',
                link: 'https://twitter.com/the_sher_app'
            }
        ], 
        tags: [ 'hypercore', 'p2p streaming']
    },
    {
        id: 15,
        img: 'assets/images/projects/socket-supply.png',
        title: 'Socket Supply',
        text: 'Deploy everywhere. Peer to peer and cloud computing.', 
        socials: [
            {
                img: 'assets/images/website.png',
                link: 'https://socketsupply.co/'
            },
            {
                img: 'assets/images/HOME/icons8-github-100.png',
                link: 'https://github.com/socketsupply'
            },
            {
                img: 'assets/images/HOME/icons8-discord-new-100.png',
                link: 'https://discord.gg/YPV32gKCsH'
            },
            {
                img: 'assets/images/HOME/icons8-twitter-100.png',
                link: 'https://twitter.com/socketsupply'
            }
        ], 
        tags: [ 'hypercore', 'p2p computing']
    },
    {
        id: 16,
        img: 'assets/images/projects/telios.png',
        title: 'Telios',
        text: 'Peer-to-Peer Decentralized Email for Privacy and Security', 
        socials: [
            {
                img: 'assets/images/website.png',
                link: 'https://www.telios.io/'
            },
            {
                img: 'assets/images/HOME/icons8-github-100.png',
                link: 'https://github.com/Telios-org'
            },
            {
                img: 'assets/images/HOME/icons8-discord-new-100.png',
                link: 'https://discord.gg/FyFcXHa6rX'
            },
            {
                img: 'assets/images/HOME/icons8-twitter-100.png',
                link: 'https://twitter.com/TeliosInc'
            }
        ], 
        tags: [ 'hypercore', 'p2p e-mail']
    },
    {
        id: 17,
        img: 'assets/images/projects/tradle.png',
        title: 'Tradle',
        text: 'Building a trust provisioning network.', 
        socials: [
            {
                img: 'assets/images/website.png',
                link: 'https://tradle.io/'
            },
            {
                img: 'assets/images/HOME/icons8-github-100.png',
                link: 'https://github.com/tradle'
            },
            {
                img: 'assets/images/HOME/icons8-twitter-100.png',
                link: ''
            }
        ], 
        tags: [ 'hypercore', 'kyc']
    }
]
 
let projectsContainer = document.getElementById('projectsContainer')

let project = projects.map(e => `<div class="project_card">
    <div class='project_card__img'  >   
        <img
            class="project_img"
            src="${e.img}"
            alt=""
        />
    </div>   
    <div class='project_card__data'>
        <h6 class="project_title">${e.title}</h6>
        <p class="project_text">
            ${e.text}
        </p>
        <div class="project_sm">
            ${e.socials.map(s => `<a href='${s.link}' target='blank'><img src="${s.img}" alt="" /></a>`).join('')}
        </div>
        <div class="project_tags">
            ${e.tags.map(tag => `<p class="project_tag">${tag}</p>`).join('')}
            
        </div>
    </div>
</div>`).join('')

projectsContainer.innerHTML = project