document.body.onload = async () => {
  let req = await fetch('https://api.cplv-tv.tk/match')
  const matches = await req.json()
  req = await fetch('/select')
  const select = Number(await req.text())
  document.querySelector('.selector').innerHTML += ` ${select !== 0 ? select : 'NONE'}`
  genData(matches)
  setInterval(async () => {
    const req = await fetch('https://api.cplv-tv.tk/match')
    const matches2 = await req.json()
    if (JSON.stringify(matches2) !== JSON.stringify(matches)) {
      console.log('Changes detected...\nReloading...')
      location.reload()
    }
  }, 10000)
}

async function createTable (league, matches) {
  matches = matches.filter((m) => m.league.indexOf('-') !== -1 ? m.league.split('-')[0].trim() === league : m.league.trim() === league)
  const div = document.createElement('div')
  div.id = league.replaceAll(' ', '-')
  div.className = 'table'
  div.innerHTML = `<span class='title'>${league}</span>`
  let text = '<div class="container">'
  matches.forEach((m) => {
    text += `<div class='match'>
      <div class='top'>
        <div class="team">
          <img src="${m.local.logo}" width="40px" height="40px"/>
          <span>${m.local.acronym}</span>
        </div>
        <div class="center">VS</div>
        <div class="team">
          <span>${m.visitor.acronym}</span>
          <img src="${m.visitor.logo}" width="40px" height="40px" />
        </div>
      </div>
      <button onclick="selectEvent(${m.idp})">SELECT</button>
    </div>`
  })
  text += '</div>'
  div.innerHTML += text
  document.body.appendChild(div)
}

// eslint-disable-next-line no-unused-vars
async function selectEvent (idp) {
  const req = await fetch('/select/' + idp, {
    method: 'POST'
  })
  if (req.status === 200) {
    alert('sucess')
    document.querySelector('.selector').innerHTML = 'SELECTED: ' + idp
  } else {
    alert('error')
  }
}

async function genData (matches) {
  const leagues = []
  matches = matches.filter((m) => m.period !== 'SIN COMENZAR')
  matches.forEach((match) => {
    const l = match.league.indexOf('-') !== -1 ? match.league.split('-')[0].trim() : match.league.trim()
    if (!leagues.includes(l)) leagues.push(l)
  })
  leagues.forEach((l) => {
    createTable(l, matches)
  })
}
