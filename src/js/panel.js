let data; let visitorPlayers; let localPlayers; let local; let visitor

document.body.onload = async () => {
  let req = await fetch('/select')
  const select = await req.text()

  if (select !== '0') {
    await genData(select)
    await genView()
  } else console.log('No idp found...')
  setInterval(async () => {
    req = await fetch('/select')
    if (select !== await req.text()) {
      console.log('IDP change detected...\nReloading....')
      location.reload()
    }
  }, 10000)
}

async function genView () {
  const bottom = document.querySelector('.bottom')
  bottom.innerHTML += `<div class="local">
    <div class="top">
      <img src="${local.logo}" />
      <span>${local.name}</span>
    </div>
  </div>`
  bottom.innerHTML += '<div class="center"></div>'
  bottom.innerHTML += `<div class="visitor">
    <div class="top">
      <span>${visitor.name}</span>
      <img src="${visitor.logo}" />
    </div>
  </div>`
  console.log('tete', visitorPlayers, localPlayers)
}

async function genData (select) {
  let req = await fetch('https://api.cplv-tv.tk/match')
  const matches = await req.json()
  let match = matches.filter((m) => m.idp === select)
  match = match[0]
  console.log(leagueParser(match.league))
  req = await fetch('https://api.cplv-tv.tk/league/' + leagueParser(match.league))
  data = await req.json()
  local = getObjects(data, 'acronym', match.local.acronym)[0]
  visitor = getObjects(data, 'acronym', match.visitor.acronym)[0]
  const players = data.players
  localPlayers = players.filter((p) => p.team.id === local.id)
  visitorPlayers = players.filter((p) => p.team.id === visitor.id)
}

function getObjects (obj, key, val) {
  if (val.indexOf('-') !== -1) val = val.split('-')[0].trim()
  let objects = [
  ]
  for (const i in obj) {
    if (typeof obj[i] === 'object') {
      objects = objects.concat(getObjects(obj[i], key, val))
    } else if ((i === key && obj[i] === val) || (i === key && val === '')) {
      objects.push(obj)
    } else if (obj[i] === val && key === '') {
      if (objects.lastIndexOf(obj) === -1) {
        objects.push(obj)
      }
    }
  }
  return objects
}

function leagueParser (l) {
  return l.indexOf('-') !== -1 ? l.split('-')[0].trim() : l.trim()
}
