let data = [
    {
      // 2011 - 1
      title: "dat - brainstorming an idea",
      type: "article",
      date: ["2011/10/17", "October 2011"],
      text: "Max Ogden chats with Rufus Pollock about a changes protocol for data to allow diffing/merging and supports micro-schemas at the Open Government Data Camp",
      tags: [
        {
          text: "Rufus Pollock Diary",
          url: "https://rufuspollock.com/2011/10/17/weekly-update-rufus-pollock-2/",
        },
      ],
    },
    {
      // 2013 - 1
      title: "Knight Foundation Funding ($50.000)",
      type: "grant",
      date: ["2013/06/23", "June 2013"],
      text: "Brings dat (as http://dat-data.com) from an idea to the pre-alpha stage",
      tags: [
        {
          text: "knight foundation grant",
          url: "https://web.archive.org/web/20130810075932/http://www.knightfoundation.org/grants/201346305/",
        },
        {
          text: "repo for dat-data.com",
          url: "https://github.com/dat-ecosystem/dat-data.com",
        },
      ],
    },
    {
      // 2013 - 2
      title: "dat - initial readme",
      type: "milestone",
      date: ["2013/06/27", "June 2013"],
      text: "Dat is created by Max Ogden in 2013 to standardize the way data analysts collaborate on the changes they make to data sets. Rufus Pollock from the Open Knowledge Foundation describes it as git (and github) for data",
      tags: [
        {
          text: "dat repo",
          url: "https://github.com/dat-ecosystem/dat/tree/464679267049899eafa345125a0f2212f91be456",
        },
        {
          text: "okfn article",
          url: "https://blog.okfn.org/2013/07/02/git-and-github-for-data/",
        },
      ],
    },
    {
      // 2013 - 4
      title: "dat-data website",
      type: "website",
      date: ["2013/10/12", "Oct 2013"],
      text: "First website is released",
      tags: [
        {
          text: "website",
          url: "https://dat-ecosystem-archive.github.io/dat-data.com/",
        },
      ],
    },
    {
      // 2013 - 4
      title: "twitter account",
      type: "asset",
      date: ["2013/11/", "November 2013"],
      text: "@dat_protocol twitter account is created (later renamed to @dat_ecosystem)",
      tags: [
        {
          text: "twitter",
          url: "https://twitter.com/dat_ecosystem",
        },
      ],
    },
    {
      // 2013 - 3
      title: "introducing dat",
      type: "talk",
      date: ["2013/11/11", "November 2013"],
      text: "Max Ogden presents Dat at the Strata Conference in London",
      tags: [
        {
          text: "presentation",
          url: "https://www.youtube.com/watch?v=FX7qSwz3SCk",
        },
      ],
    },
    {
      // 2014 - 1
      title: "Alfred P. Sloan Foundation Funding ($260.000)",
      type: "grant",
      date: ["2014/04/02  -  07:30", "April 2014"],
      text: "Helps dat to become an US ODI (Open Data Institute) project",
      tags: [
        {
          text: "alfred p. sloan grant",
          url: "https://usopendata.org/2014/04/02/dat/",
        },
      ],
    },
    {
      // 2014 - 2
      title: "peermaps",
      type: "project",
      date: ["2014/05/22 ", "May 2014"],
      text: "Peermaps is born (peer to peer cartography)",
      tags: [
        {
          text: "https://peermaps.org",
          url: "https://peermaps.org/",
        },
        {
          text: "peermaps repository",
          url: "https://github.com/peermaps/peermaps/tree/6b3441990f67c66ceba686a0fab627d465c39f6f",
        },
      ],
    },
    {
      // 2014 - 3
      title: "dat - alpha",
      type: "milestone",
      date: ["2014/08/19", "August 2014"],
      text: "Dat Alpha version is released",
      tags: [
        {
          text: "realease article",
          url: "https://usopendata.org/2014/08/19/dat-alpha/",
        },
        {
          text: "screencast",
          url: "https://www.youtube.com/watch?v=tP_6N7mMKok&t=72s",
        },
      ],
    },
    // {
    //   // 2014 - 3
    //   title: 'karissa McKelvey joins',
    //   type: 'organization',
    //   date: ['2014/10 ', 'Oct 2014'],
    //   text: 'Karissa McKelvey is hired as a software engineer and scientific partnerships manager',
    //   tags: [{
    //     text: '',
    //     url: ''
    //   }]
    // },
    {
      // 2015 - 1
      title: "Alfred P. Sloan Foundation Funding ($640.000)",
      type: "grant",
      date: ["2015/04/03", "April 2015"],
      text: "Alfred P. Sloan Foundation Funding ($640.000)",
      tags: [
        {
          text: "alfred p. sloan grant",
          url: "https://donations.vipulnaik.com/donor.php?donor=Sloan+Foundation",
        },
      ],
    },
    {
      // 2015 - 2
      title: "dat - beta",
      type: "milestone",
      date: ["2015/07/29", "July 2015"],
      text: "Dat Beta version is released -  the version focused on tabular datasets. It turns out to be too complex for typical use cases",
      tags: [
        {
          text: "realease article",
          url: "https://usopendata.org/2015/07/29/dat-beta/",
        },
      ],
    },
    {
      // 2015 - 4
      title: "designing dat 1.0",
      type: "presentation",
      date: ["2015/12/04", "Dec 2015"],
      text: "Designing dat 1.0, rOpenSci Community Call v8",
      tags: [
        {
          text: "video",
          url: "https://vimeo.com/147914258",
        },
      ],
    },
    {
      // 2015 - 4
      title: "hyperdrive release",
      type: "milestone",
      date: ["2015/12/02", "Dec 2015"],
      text: "Hyperdrive v1.0.0 is released",
      tags: [
        {
          text: "hyperdrive repository",
          url: "https://github.com/hypercore-protocol/hyperdrive/releases/tag/v1.0.1",
        },
      ],
    },
    {
      // 2015 - 4
      title: "hypercore release",
      type: "milestone",
      date: ["2015/12/20", "Dec 2015"],
      text: "Hypercore v1.0.0 is released",
      tags: [
        {
          text: "hypercore repository",
          url: "https://github.com/hypercore-protocol/hypercore/releases/tag/v1.0.0",
        },
      ],
    },
    {
      // 2015 - 4
      title: "alpha testing",
      type: "milestone",
      date: ["2015/12", "Dec 2015"],
      text: "Alpha testing with pilot projects in science, including Sloan Digital Sky Survey (Astronomy), iRNA-Seq (Bioinformatics – RNA), and Bionode (Bioinformatics – DNA)Hypercore v1.0.0 is released",
      tags: [
        {
          text: "",
          url: "",
        },
      ],
    },
    {
      // 2016 - 1
      title: "dat 1.0.",
      type: "milestone",
      date: ["2016/02/01", "Feb 2016"],
      text: "Dat 1.0. is ready",
      tags: [
        {
          text: "article",
          url: "https://blog.dat-ecosystem.org/dat-1-0-is-ready/",
        },
      ],
    },
    {
      // 2016 - 2
      title: "Knight Foundation Funding ($420.000)",
      type: "grant",
      date: ["2016/02/01", "Feb 2016"],
      text: "Knight Foundation Grant ($420.000) for Publicbeats project",
      tags: [
        {
          text: "article",
          url: "https://blog.dat-ecosystem.org/announcing-publicbits-org/",
        },
      ],
    },
    {
      // 2016 - 3
      title: "Code for Science and Society",
      type: "project",
      date: ["2016/09", "Sept 2016"],
      text: "Code for Science and Society is founded - to support the Dat Project as a fiscal sponsor bundled with strategic project support",
      tags: [
        {
          text: "CS&S website",
          url: "https://codeforscience.org/about/",
        },
      ],
    },
    {
      // 2016 - 4
      title: "first meetups",
      type: "community",
      date: ["2016/12", "Dec 2016"],
      text: "The first meetups for ‘Coding for Science & Society’ are held in Berlin, Oakland, and Portland; organized by the Dat team",
      tags: [
        {
          text: "community",
          url: "https://blog.datproject.org/tag/community/",
        },
      ],
    },
    {
      // 2017 - 1
      title: "cli tool",
      type: "milestone",
      date: ["2017/01/09", "Jan 2017"],
      text: "New Dat CLI is released",
      tags: [
        {
          text: "article",
          url: "https://blog.dat-ecosystem.org/preview-the-new-dat-cli/",
        },
      ],
    },
    {
      // 2017 - 1
      title: "beaker browser",
      type: "project",
      date: ["2017/02/07", "Feb 2017"],
      text: "Beaker browser pre-release",
      tags: [
        {
          text: "article",
          url: "https://www.electronjs.org/blog/beaker-browser",
        },
      ],
    },
    {
      // 2017 - 3
      title: "dat desktop",
      type: "milestone",
      date: ["2017/02/12", "Feb 2017"],
      text: "Dat desktop is released",
      tags: [
        {
          text: "article",
          url: "https://blog.dat-ecosystem.org/dat-desktop-is-here/",
        },
      ],
    },
    {
      // 2017 - 3
      title: "dat 2.0",
      type: "milestone",
      date: ["2017/06/01", "Jun 2017"],
      text: "Dat 2.0 is released",
      tags: [
        {
          text: "article",
          url: "https://blog.dat-ecosystem.org/dat-sleep-release/",
        },
      ],
    },
    {
      // 2017 - 3
      title: "dat whitepaper",
      type: "whitepaper",
      date: ["2017/06/01", "Jun 2017"],
      text: "Dat whitepaper is released",
      tags: [
        {
          text: "whitepaper",
          url: "https://github.com/dat-ecosystem-archive/whitepaper/blob/master/dat-paper.pdf",
        },
      ],
    },
    {
      // 2017 - 3
      title: "Moore Foundation Grant ($110.000)",
      type: "grant",
      date: ["2017/09/14", "Sep 2017"],
      text: "Moore Foundation grant for collaboration of dat and California Digital Library (CDL)",
      tags: [
        {
          text: "article",
          url: "https://blog.dat-ecosystem.org/dat-in-the-lab/",
        },
      ],
    },
    {
      // 2017 - 4
      title: "organizational changes",
      type: "organization",
      date: ["2017/12/20", "Dec 2017"],
      text: "Organizational Changes for Dat and Code for Science & Society",
      tags: [
        {
          text: "article",
          url: "https://blog.datproject.org/2017/12/20/organization-changes-dat-css/",
        },
      ],
    },
    {
      // 2018 - 1
      title: "arso",
      type: "project",
      date: ["2018/03/02", "Mar 2018"],
      text: "arso joins the ecosystem",
      tags: [
        {
          text: "website",
          url: "https://arso.xyz/",
        },
      ],
    },
    {
      // 2018 - 2
      title: "multifeed",
      type: "project",
      date: ["2018/04/12", "Apr 2018"],
      text: "Multi-writer hypercore (multifeed) is released",
      tags: [
        {
          text: "multifeed repositoru",
          url: "https://github.com/kappa-db/multifeed/releases/tag/v1.0.0",
        },
      ],
    },
    {
      // 2018 - 2
      title: "Beaker browser and the Dat protocol analysis",
      type: "scientific article",
      date: ["2018/05/01", "May 2018"],
      text: "Beaker browser and the Dat protocol: An analysis for COMP 117: Internet-scale Distributed Systems is released",
      tags: [
        {
          text: "scientific article",
          url: "https://bernsteinbear.com/dat-paper/",
        },
      ],
    },
    {
      // 2018 - 2
      title: "kappa core",
      type: "project",
      date: ["2018/05/13", "May 2018"],
      text: "Kappa Core 1.0 is released (minimal append only DB)",
      tags: [
        {
          text: "kappa core repository",
          url: "https://github.com/kappa-db/kappa-core/releases/tag/v1.0.0",
        },
      ],
    },
    {
      // 2018 - 2
      title: "cabal",
      type: "project",
      date: ["2018/05/13", "May 2018"],
      text: "Cabal core 1.0 is release",
      tags: [
        {
          text: "cabal core repository",
          url: "https://github.com/cabal-club/cabal-core/releases/tag/v1.0.0",
        },
      ],
    },
    {
      // 2018 - 3
      title: "Mozila Open Source Support Grant ($34,000)",
      type: "grant",
      date: ["2018/09/05", "Sept 2018"],
      text: "Dat Project Receives Mozilla Open Source Support Grant",
      tags: [
        {
          text: "article",
          url: "https://blog.dat-ecosystem.org/moss-2019-summary/",
        },
        {
          text: "organization repository",
          url: "https://github.com/datproject/organization/tree/master/grants/2018-MOSS",
        },
      ],
    },
    {
      // 2018 - 4
      title: "how dat works",
      type: "project",
      date: ["2018/11/01", "Nov 2018"],
      text: "How dat works visualization project is started",
      tags: [
        {
          text: "visualization",
          url: "https://dat-ecosystem-archive.github.io/how-dat-works/",
        },
      ],
    },
    {
      // 2018 - 4
      title: "dat open collective",
      type: "donations",
      date: ["2018/10/05", "Oct 2018"],
      text: "Dat Open Collective page is set up for recurring donations",
      tags: [
        {
          text: "dat open collective profile",
          url: "https://opencollective.com/dat",
        },
      ],
    },
    {
      // 2018 - 4
      title: "Handshake Grant ($100.000)",
      type: "grant",
      date: ["2018/12/01", "Dec 2018"],
      text: "Handshake Grant is received",
      tags: [
        {
          text: "article",
          url: "https://blog.dat-ecosystem.org/dat-receives-two-new-grants/",
        },
      ],
    },
    // {
    //   // 2018 - 4
    //   title: 'new hires',
    //   type: 'organization',
    //   date: ['2018/12', 'Dec 2018'],
    //   text: 'New hires: Andrew Osheroff (developer), Georgiy Shibaev (community manager), David Clements (developer), Karissa McKelvey (project director)',
    //   tags: [{
    //     text: '',
    //     url: ''
    //   }]
    // },
    {
      // 2019 - 1
      title: "Samsung NEXT Stack Zero Grant ($63.000)",
      type: "grant",
      date: ["2018/12/01", "Dec 2018"],
      text: "Samsung NEXT Stack Zero grant is received",
      tags: [
        {
          text: "article",
          url: "https://blog.dat-ecosystem.org/dat-receives-two-new-grants/",
        },
      ],
    },
    {
      // 2019 - 2
      title: "dat hack unconference",
      type: "event",
      date: ["2019/05/19", "May 2019"],
      text: "Dat Hack Unconference in Berlin",
      tags: [
        {
          text: "event link",
          url: "https://events.dat.foundation/2019/",
        },
      ],
    },
    {
      // 2019 - 3
      title: "Wireline Donation ($50,000)",
      type: "donation",
      date: ["2019/06/01", "Jun 2019"],
      text: "Dat Project receives donation from Wireline",
      tags: [
        {
          text: "organization repository",
          url: "https://github.com/datproject/organization#2019",
        },
      ],
    },
    {
      // 2019 - 4
      title: "dat consortium",
      type: "organization",
      date: ["2019/12/01", "Dec 2019"],
      text: "Dat consortium is formed",
      tags: [
        {
          text: "notes",
          url: "https://hackmd.io/@T6Wf5EsOQKe-6wyPjJPtuw/Hycn0F63r/%2FHbu0ffkwQS6KIO_97fH-Mw",
        },
      ],
    },
    {
      // 2019 - 4
      title: "ara",
      type: "project",
      date: ["2019/12/01", "Dec 2019"],
      text: "Ara joins the ecosystem",
      tags: [
        {
          text: "website",
          url: "https://ara.one/",
        },
      ],
    },
    {
      // 2019 - 4
      title: "consento",
      type: "project",
      date: ["2019/12/01", "Dec 2019"],
      text: "Consento joins the ecosystem",
      tags: [
        {
          text: "website",
          url: "https://consento.org/",
        },
      ],
    },
    {
      // 2019 - 4
      title: "datdot",
      type: "project",
      date: ["2019/12/01", "Dec 2019"],
      text: "DatDot joins the ecosystem",
      tags: [
        {
          text: "website",
          url: "https://datdot.org/",
        },
      ],
    },
    {
      // 2019 - 4
      title: "decentlabs",
      type: "project",
      date: ["2019/12/01", "Dec 2019"],
      text: "Decentlabs joins the ecosystem",
      tags: [
        {
          text: "website",
          url: "https://decentlabs.se/",
        },
      ],
    },
    {
      // 2019 - 4
      title: "geut",
      type: "project",
      date: ["2019/12/01", "Dec 2019"],
      text: "Geut joins the ecosystem",
      tags: [
        {
          text: "website",
          url: "https://www.geutstudio.com/",
        },
      ],
    },
    {
      // 2019 - 4
      title: "digital democracy",
      type: "project",
      date: ["2019/12/01", "Dec 2019"],
      text: "Digital Democracy joins the ecosystem",
      tags: [
        {
          text: "website",
          url: "https://www.digital-democracy.org/",
        },
      ],
    },
    {
      // 2019 - 4
      title: "arso - sonar release",
      type: "project",
      date: ["2019/12/17", "Dec 2019"],
      text: "Arso introduces Sonar",
      tags: [
        {
          text: "article",
          url: "https://arso.xyz/blog/2019-12-17-introducing-sonar",
        },
      ],
    },
    {
      // 2020 - 2
      title: "Hypercore protocol graduates from Dat Ecosystem",
      type: "project",
      date: ["2020/05/15", "May 2020"],
      text: "Dat protocol is renamed to Hypercore protocol",
      tags: [
        {
          text: "article",
          url: "https://blog.dat-ecosystem.org/dat-protocol-renamed-hypercore-protocol/",
        },
      ],
    },
    {
      // 2020 -2
      title: "NLnet grant ($50.000)",
      type: "grant",
      date: ["2020/07/01", "Jul 2020"],
      text: "NLnet grant is recieved for a Rust port",
      tags: [
        {
          text: "organization repository",
          url: "https://github.com/datproject/organization#2020",
        },
      ],
    },
    {
      // 2020 - 2
      title: "agregore",
      type: "project",
      date: ["2020/06/19", "Jun 2020"],
      text: "Agregore browser is pre-released",
      tags: [
        {
          text: "agregore repository",
          url: "https://github.com/AgregoreWeb/agregore-browser/releases/tag/v1.0.1-0",
        },
      ],
    },
    {
      // 2020 - 3
      title: "dat conference",
      type: "event",
      date: ["2020/07/30", "Jul 2020"],
      text: "Dat online conference is organized",
      tags: [
        {
          text: "dat ecosystem youtube channel",
          url: "https://www.youtube.com/channel/UCbLY5Qg3t3OJbxZZUioqMOQ",
        },
      ],
    },
    {
      // 2020 - 4
      title: "agregore",
      type: "project",
      date: ["2020/10/14", "Oct 2020"],
      text: "Agregore joins the ecosystem",
      tags: [
        {
          text: "website",
          url: "https://agregore.mauve.moe/",
        },
      ],
    },
    {
      // 2020 - 4
      title: "tradle",
      type: "project",
      date: ["2020/11/09", "Nov 2020"],
      text: "Tradle joins the ecosystem",
      tags: [
        {
          text: "website",
          url: "https://tradle.io/",
        },
      ],
    },
    {
      // 2020 - 4
      title: "gateway browser",
      type: "project",
      date: ["2020/11/11", "Jan 2020"],
      text: "Gateway browser joins the ecosystem",
      tags: [
        {
          text: "website",
          url: "https://gitlab.com/gateway-browser/gateway",
        },
      ],
    },
    {
      // 2020 - 4
      title: "hyperbee",
      type: "project",
      date: ["2020/12/03", "Dec 2020"],
      text: "Hyperbee 1.0 is released",
      tags: [
        {
          text: "Hyperbee",
          url: "https://github.com/hypercore-protocol/hyperbee/releases/tag/v1.0.0",
        },
      ],
    },
    {
      // 2021 - 1
      title: "earthstar",
      type: "project",
      date: ["2021/01/10", "Jan 2021"],
      text: "Earthstar joins the ecosystem",
      tags: [
        {
          text: "website",
          url: "https://github.com/earthstar-project/earthstar",
        },
      ],
    },
    {
      // 2021 - 1
      title: "dat manifesto",
      type: "organization",
      date: ["2019/03/09", "Mar 2021"],
      text: "Dat consortium forms Dat Ecosystem and consoritum members sign a manifesto",
      tags: [
        {
          text: "manifesto",
          url: "https://github.com/dat-ecosystem/organization/blob/main/MANIFESTO.md",
        },
      ],
    },
    {
      // 2021 - 2
      title: "socket supply",
      type: "project",
      date: ["2020/04/15", "Apr 2022"],
      text: "Socket Supply joins the ecosystem",
      tags: [
        {
          text: "website",
          url: "https://socketsupply.co/",
        },
      ],
    },
    {
      // 2021 - 3
      title: "hyperswarm",
      type: "project",
      date: ["2021/07/02", "Jul 2021"],
      text: "Hyperswarm v3.0.0-beta is released",
      tags: [
        {
          text: "hyperswarm repository",
          url: "https://github.com/hyperswarm/hyperswarm/releases/tag/v3.0.0-beta2",
        },
      ],
    },
    {
      // 2021 - 3
      title: "autobase",
      type: "project",
      date: ["2021/07/02", "Jul 2021"],
      text: "Autobase v3.0.0-beta is released",
      tags: [
        {
          text: "autobase repository",
          url: "https://github.com/hypercore-protocol/autobase/releases/tag/v1.0.0-alpha.0",
        },
      ],
    },
    {
      // 2021 - 3
      title: "dat ecosystem archive",
      type: "organization",
      date: ["2020/08/01", "Aug 2021"],
      text: "Dat ecosystem archive is created to archive all the historic repositories",
      tags: [
        {
          text: "dat ecosystem archive organization",
          url: "https://github.com/dat-ecosystem-archive",
        },
      ],
    },
    {
      // 2021 - 3
      title: "geut - sher",
      type: "organization",
      date: ["2020/10/08", "Oct 2021"],
      text: "Geut studio introduces new project Sher",
      tags: [
        {
          text: "website",
          url: "https://sher.geutstudio.com/",
        },
      ],
    },
    {
      // 2021 - 4
      title: "telios",
      type: "project",
      date: ["2021/11/01", "Nov 2021"],
      text: "telios joins the ecosystem",
      tags: [
        {
          text: "website",
          url: "https://www.telios.io/#/",
        },
      ],
    },
    {
      // 2022 - 1
      title: "telios - email desktop client",
      type: "project",
      date: ["2020/03/14", "Mar 2022"],
      text: "telios releases their email desktop client",
      tags: [
        {
          text: "website",
          url: "https://www.telios.io/#/",
        },
      ],
    },
    {
      // 2022 - 2
      title: "ahau",
      type: "project",
      date: ["2020/04/30", "Apr 2022"],
      text: "ahau joins the ecosystem",
      tags: [
        {
          text: "website",
          url: "https://ahau.io/",
        },
      ],
    },
  ];

  let container = document.getElementById("timeline");


  let ee = data.map(d => `<div class="content container0 right">
 
  <div class="history_card">
  <div class="history_card__header">
      <p class="history_card__date">${d.date[1]}</p>
      <p class="history_card_type">${d.type}</p>
  </div>
  <p class="history_card_title">${d.title}</p>
  <p class="history_card_text">${d.text}</p>
  <div class="history_card_tags">
      ${d.tags.length === 0 ? null : d.tags
          .map(
          (tag) =>
              `<a class="history_card_tag" target='_blank' href="${tag.url}">${tag.text}
                  <img src='./assets/images/externalLink.png' />
              </a>`
          )
          .join("")}
  </div>

  </div>
</div>
`).join()

container.innerHTML = ee;