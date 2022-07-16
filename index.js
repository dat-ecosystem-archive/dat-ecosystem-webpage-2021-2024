const history_data = require('../data/history.js')
console.log('hello from dat-ecosystem')

const route = location.pathname

// @TODO: refactor to use proper styling http://datproject.github.io/design/

if (route === '/history.html') {
  const timeline = window["cd-timeline"]
  // timeline.innerHTML = new Array(5).fill(data[0]).map(entry).join('')
  timeline.innerHTML = history_data.map(entry).join('')
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
          return `<li><a class="link" href="${tag.url}" target="_blank">${tag.text}</a></li>`
        }).join('')}</ul>
        <span class="cd-date">${summary}</span>
      </div> <!-- body -->
    </div> <!-- cd-timeline-content -->
  </div> <!-- cd-timeline-block -->`
  }
}