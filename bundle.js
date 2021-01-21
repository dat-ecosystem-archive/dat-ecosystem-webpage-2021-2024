(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
console.log('hello from dat-ecosystem')

const route = location.pathname

// @TODO: refactor to use proper styling http://datproject.github.io/design/

const data = [{
  title: 'dat - brainstorming the idea',
  type: 'article',
  date: ['2011/10/17', 'October 2011'],
  text: 'Max Ogden chats with Rufus Pollock about a changes protocol for data to allow diffing/merging and supports micro-schemas at the Open Government Data Camp',
  tags: [{
    text: 'Rufus Pollock Diary',
    url: 'https://rufuspollock.com/2011/10/17/weekly-update-rufus-pollock-2/'
  }]
},{
  title: 'Knight Foundation Funding ($50.000)',
  type: 'grant',
  date: ['2013/06/23', 'June 2013'],
  text: 'Brings dat (as http://dat-data.com) from an idea to the pre-alpha stage',
  tags: [{
      text: 'knight foundation grant',
      url: 'https://web.archive.org/web/20130810075932/http://www.knightfoundation.org/grants/201346305/'
    }, {
      text: 'repo for dat-data.com',
      url: 'https://github.com/dat-ecosystem/dat-data.com'
    }]
},{
  title: 'dat - initial readme',
  type: 'milestone',
  date: ['2013/06/27', 'June 2013'],
  text: 'Dat is created by Max Ogden in 2013 to standardize the way data analysts collaborate on the changes they make to data sets. Rufus Pollock from the Open Knowledge Foundation describes it as git (and github) for data',
  tags: [{
    text: 'dat repo',
    url: 'https://github.com/dat-ecosystem/dat/tree/464679267049899eafa345125a0f2212f91be456'
  }, {
    text: 'okfn article',
    url: 'https://blog.okfn.org/2013/07/02/git-and-github-for-data/'
  }]
},{
  title: 'Alfred P. Sloan Foundation Funding ($260.000)',
  type: 'grant',
  date: ['2014/04/02  -  07:30', 'April 2014'],
  text: 'Helps dat to become an US ODI (Open Data Institute) project',
  tags: [{
    text: 'alfred p. sloan grant',
    url: 'https://usopendata.org/2014/04/02/dat/'
  }]
},{
  title: 'peermaps',
  type: 'project',
  date: ['2014/05/22 ', 'May 2014'],
  text: 'Peermaps is born (peer to peer cartography)',
  tags: [{
    text: 'https://peermaps.org',
    url: 'https://peermaps.org/',
  },{
    text: 'peermaps repository',
    url: 'https://github.com/peermaps/peermaps/tree/6b3441990f67c66ceba686a0fab627d465c39f6f'
  }]
},{
  title: 'dat - alpha',
  type: 'milestone',
  date: ['2014/08/19', 'August 2014'],
  text: 'Dat Alpha version is released',
  tags: [{
    text: 'realease article',
    url: 'https://usopendata.org/2014/08/19/dat-alpha/'
  }]
}]

// include: https://dat.foundation/about/history/


// DAT in WIKIPEDIA
// * https://en.wikipedia.org/wiki/Dat_(software)

// @TODO:
// * add the starting date of each INDEPENDENT PROJECT known to be buit on top of dat
// * add other language implementations as projects too, e.g. https://github.com/karthik/rdat
// * https://github.com/okdistribute/datpy

// add WHITEPAPER
// * https://bernsteinbear.com/dat-paper/
// * https://blog.datproject.org/2017/06/01/dat-sleep-release/
// * https://github.com/dat-ecosystem/whitepaper
// * 

// ADD: https://datprotocol.github.io/how-dat-works/

// miami alfred p. sloan grant - 2015
// https://donations.vipulnaik.com/donor.php?donor=Sloan+Foundation
// => https://sloan.org/grant-detail/6618


// ## 2015

// **April**

// - [Alfred P. Sloan Foundation Funding ($640.000)](https://usopendata.org/2015/04/03/sloan/)

// **July**

// - [Dat Beta Release](https://usopendata.org/2015/07/29/dat-beta/) 

// - [designing Dat 1.0](https://vimeo.com/147914258) 

// **December**

// - [Hypercore release](https://github.com/hypercore-protocol/hypercore/releases/tag/v1.0.0)

// - [Hyperdrive release](https://github.com/hypercore-protocol/hyperdrive/releases/tag/v1.0.1)

// ## 2016

// **February**

// - [Dat 1.0. is ready](https://blog.datproject.org/2016/02/01/dat-1-0-is-ready/)

// **April**

// - [Knight Foundation Grant ($420.000) for Publicbeats project](https://blog.datproject.org/2016/02/01/announcing-publicbits-org/)

// **September**

// - [Code for Science and Society is founded to support the Dat Project](https://codeforscience.org/about/)

// ## 2017

// **January**

// - [New Dat CLI is released](https://blog.datproject.org/2017/01/09/preview-the-new-dat-cli/)

// **February**

//  - [Beaker browser pre-release](https://www.electronjs.org/blog/beaker-browser)

// - [Dat desktop release](https://blog.datproject.org/2017/02/12/dat-desktop-is-here/)

// **June**

// - [Dat 2.0 release](https://blog.datproject.org/2017/06/01/dat-sleep-release/)

// **September**

// - [Moore Foundation Grant ($110.000)](https://blog.datproject.org/2017/09/15/dat-funding-history/)

// **December**

// - [organizational changes](https://blog.datproject.org/2017/12/20/organization-changes-dat-css/)

// ## 2018

// **April**

// - [Multifeed (multi-writer hypercore) 1.0 release](https://github.com/kappa-db/multifeed/releases/tag/v1.0.0)

// **May**

// - [Kappa Core 1.0 release (minimal append only DB)](https://github.com/kappa-db/kappa-core/releases/tag/v1.0.0)

// - [Cabal core 1.0 release](https://github.com/cabal-club/cabal-core/releases/tag/v1.0.0)

// **September**

// - [Mozila Open Source Support Grant ($34,000)](https://github.com/datproject/organization/tree/master/grants/2018-MOSS)

// **October**

// - [Dat Open Collective page is set up for recurring donations](https://opencollective.com/dat)

// **December**

// - [Handshake Free & Open Source Software Community Grant ($100.000)](https://github.com/datproject/organization#2018)

// ## 2019

// **January**

// - [Samsung NEXT Stack Zero Grant ($63,000 )](https://github.com/datproject/organization/tree/master/grants/2018-SamsungNEXT)

// **May**

// - [Dat Hack Unconference](https://events.dat.foundation/2019/)

// **June**

// - [Wireline Donation ($50,000)](https://github.com/datproject/organization#2019)

// **December**

// - Dat consortium is formed

// ## 2020

// **May**

// - [Rename to Hypercore protocol](https://blog.datproject.org/2020/05/15/dat-protocol-renamed-hypercore-protocol/)

// **when?**

// - [NLnet Grant for a Rust port](https://github.com/datproject/organization#2020)

// **June**

// - [Agregore browser pre-release](https://github.com/AgregoreWeb/agregore-browser/releases/tag/v1.0.1-0)

// **August**

// - [Dat conference](https://www.youtube.com/channel/UCbLY5Qg3t3OJbxZZUioqMOQ)

// **December**

// - [Hyperbee 1.0 release](https://github.com/hypercore-protocol/hyperbee/releases/tag/v1.0.0) 

if (route === '/history.html') {
  const timeline = window["cd-timeline"]
  // timeline.innerHTML = new Array(5).fill(data[0]).map(entry).join('')
  timeline.innerHTML = data.map(entry).join('')
  function entry (opts) {
    const { title, type, date: [detail, summary], text, tags } = opts
    return `<div class="cd-timeline-block">
      <div class="cd-timeline-img cd-picture"></div>
      <div class="cd-timeline-content">
        <div class="head">
        <h2>${title}</h2>
        <div class="timeline-content-info">
          <span class="timeline-content-info-title">
            <i class="fa fa-certificate" aria-hidden="true"></i>
            ${type}
          </span>
          <span class="timeline-content-info-date">
            <i class="fa fa-calendar-o" aria-hidden="true"></i>
            ${detail}
          </span>
        </div>
      </div> <!-- head -->
      <div class="body">
        <p>${text}</p>
        <ul class="content-skills">${tags.map(tag => {
          return `<li><a href="${tag.url}" target="_blank">${tag.text}</a></li>`
        })}</ul>
        <span class="cd-date">${summary}</span>
      </div> <!-- body -->
    </div> <!-- cd-timeline-content -->
  </div> <!-- cd-timeline-block -->`
  }
}
},{}]},{},[1]);
