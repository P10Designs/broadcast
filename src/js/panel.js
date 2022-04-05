let data
let visitorPlayers
let localPlayers
let possesion = ''
let local
let visitor
let runningTime = false
let ms = 100
const periodTime = '25:00'
let localPossesion = 0
let visitorPossesion = 0

const faults = ['CC', 'AG', 'BE', 'CA', 'CG', 'CE', 'CI', 'IF', 'CZ', 'SP', 'EG', 'MC', 'RZ', 'PP', 'SL', 'SA', 'ZC', 'VI']
const periods = ['1st', 'DES', '2nd', 'DES', 'OT', 'PEN']

local = {
  id: 1768,
  acronym: 'HAL',
  logo: 'https://ns3104249.ip-54-37-85.eu/rfep/images//logos_clubes/torrevieja.png',
  name: 'HALCONES DE TORREVIEJA'
}

localPlayers = [
  {
    name: 'MADER , CHRISTIAN',
    id: 14024,
    img: 'https://ns3104249.ip-54-37-85.eu/rfep/images//fichas/14024.jpg',
    team: {
      id: 1768,
      acronym: 'HAL',
      logo: 'https://ns3104249.ip-54-37-85.eu/rfep/images//logos_clubes/torrevieja.png'
    },
    stats: {
      pj: 13,
      g: 9,
      a: 7,
      pim: 10
    }
  },
  {
    name: 'HERRANZ RODRIGUEZ , ANDER',
    id: 14752,
    img: 'https://ns3104249.ip-54-37-85.eu/rfep/images//fichas/14752.jpg',
    team: {
      id: 1768,
      acronym: 'HAL',
      logo: 'https://ns3104249.ip-54-37-85.eu/rfep/images//logos_clubes/torrevieja.png'
    },
    stats: {
      pj: 13,
      g: 6,
      a: 3,
      pim: 10
    }
  },
  {
    name: 'MUNAR DEL REY, IGNACIO',
    id: 4861,
    img: 'https://ns3104249.ip-54-37-85.eu/rfep/images//fichas/4861_1.jpg',
    team: {
      id: 1768,
      acronym: 'HAL',
      logo: 'https://ns3104249.ip-54-37-85.eu/rfep/images//logos_clubes/torrevieja.png'
    },
    stats: {
      pj: 5,
      g: 7,
      a: 2,
      pim: 4
    }
  },
  {
    name: 'BENITO PONS, CARLES',
    id: 4862,
    img: 'https://ns3104249.ip-54-37-85.eu/rfep/images//fichas/4862.jpg',
    team: {
      id: 1768,
      acronym: 'HAL',
      logo: 'https://ns3104249.ip-54-37-85.eu/rfep/images//logos_clubes/torrevieja.png'
    },
    stats: {
      pj: 11,
      g: 9,
      a: 11,
      pim: 18
    }
  },
  {
    name: 'LAMBERT, THIBAUT JOHANNES',
    id: 23228,
    img: 'https://ns3104249.ip-54-37-85.eu/rfep/images//fichas/23228.jpeg',
    team: {
      id: 1768,
      acronym: 'HAL',
      logo: 'https://ns3104249.ip-54-37-85.eu/rfep/images//logos_clubes/torrevieja.png'
    },
    stats: {
      pj: 9,
      g: 1,
      a: 4,
      pim: 0
    }
  },
  {
    name: 'ROS ALCOBAS, DANIEL',
    id: 12978,
    img: 'https://ns3104249.ip-54-37-85.eu/rfep/images//fichas/12978.jpeg',
    team: {
      id: 1768,
      acronym: 'HAL',
      logo: 'https://ns3104249.ip-54-37-85.eu/rfep/images//logos_clubes/torrevieja.png'
    },
    stats: {
      pj: 13,
      g: 2,
      a: 1,
      pim: 8
    }
  },
  {
    name: 'LAJARIN ORTS, JOSE MANUEL',
    id: 1540,
    img: 'https://ns3104249.ip-54-37-85.eu/rfep/images//fichas/hl_6916.jpg',
    team: {
      id: 1768,
      acronym: 'HAL',
      logo: 'https://ns3104249.ip-54-37-85.eu/rfep/images//logos_clubes/torrevieja.png'
    },
    stats: {
      pj: 6,
      g: 1,
      a: 1,
      pim: 0
    }
  },
  {
    name: 'PFEIFER, BENJAMIN BRADLEY',
    id: 19562,
    img: 'https://ns3104249.ip-54-37-85.eu/rfep/images//fichas/19562.jpg',
    team: {
      id: 1768,
      acronym: 'HAL',
      logo: 'https://ns3104249.ip-54-37-85.eu/rfep/images//logos_clubes/torrevieja.png'
    },
    stats: {
      pj: 8,
      g: 1,
      a: 2,
      pim: 8
    }
  },
  {
    name: 'BLEYER, MAXIMILIAN LEIF',
    id: 23482,
    img: 'https://ns3104249.ip-54-37-85.eu/rfep/images//fichas/23482.JPG',
    team: {
      id: 1768,
      acronym: 'HAL',
      logo: 'https://ns3104249.ip-54-37-85.eu/rfep/images//logos_clubes/torrevieja.png'
    },
    stats: {
      pj: 2,
      g: 1,
      a: 0,
      pim: 0
    }
  },
  {
    name: 'BELMONTE DIAZ, VICTOR MANUEL',
    id: 1544,
    img: 'https://ns3104249.ip-54-37-85.eu/rfep/images//fichas/hl_6920.jpg',
    team: {
      id: 1768,
      acronym: 'HAL',
      logo: 'https://ns3104249.ip-54-37-85.eu/rfep/images//logos_clubes/torrevieja.png'
    },
    stats: {
      pj: 6,
      g: 2,
      a: 0,
      pim: 0
    }
  },
  {
    name: 'HERNANDEZ BARRAQUEL , ADRIAN',
    id: 17471,
    img: 'https://ns3104249.ip-54-37-85.eu/rfep/images//fichas/17471.jpg',
    team: {
      id: 1768,
      acronym: 'HAL',
      logo: 'https://ns3104249.ip-54-37-85.eu/rfep/images//logos_clubes/torrevieja.png'
    },
    stats: {
      pj: 10,
      g: 0,
      a: 1,
      pim: 2
    }
  },
  {
    name: 'RUIZ RUIZ, JOSE ALEJANDRO',
    id: 19564,
    img: 'https://ns3104249.ip-54-37-85.eu/rfep/images//fichas/19564.jpg',
    team: {
      id: 1768,
      acronym: 'HAL',
      logo: 'https://ns3104249.ip-54-37-85.eu/rfep/images//logos_clubes/torrevieja.png'
    },
    stats: {
      pj: 3,
      g: 0,
      a: 0,
      pim: 2
    }
  },
  {
    name: 'CAYUELAS TORRES, ANGEL',
    id: 14751,
    img: 'https://ns3104249.ip-54-37-85.eu/rfep/images//fichas/14751.JPG',
    team: {
      id: 1768,
      acronym: 'HAL',
      logo: 'https://ns3104249.ip-54-37-85.eu/rfep/images//logos_clubes/torrevieja.png'
    },
    stats: {
      pj: 3,
      g: 0,
      a: 0,
      pim: 0
    }
  },
  {
    name: 'GRANADOS MORALES, ARTURO EDUARDO',
    id: 15147,
    img: 'https://ns3104249.ip-54-37-85.eu/rfep/images//fichas/15147_1.jpg',
    team: {
      id: 1768,
      acronym: 'HAL',
      logo: 'https://ns3104249.ip-54-37-85.eu/rfep/images//logos_clubes/torrevieja.png'
    },
    stats: {
      pj: 13,
      g: 0,
      a: 0,
      pim: 0
    }
  },
  {
    name: 'ELUL ALCAZAR, ANGEL',
    id: 6902,
    img: 'https://ns3104249.ip-54-37-85.eu/rfep/images//fichas/6902.jpeg',
    team: {
      id: 1768,
      acronym: 'HAL',
      logo: 'https://ns3104249.ip-54-37-85.eu/rfep/images//logos_clubes/torrevieja.png'
    },
    stats: {
      pj: 8,
      g: 1,
      a: 0,
      pim: 4
    }
  },
  {
    name: 'GARCIA AGUIRRE, UNAI',
    id: 17475,
    img: 'https://ns3104249.ip-54-37-85.eu/rfep/images//fichas/17475.jpg',
    team: {
      id: 1768,
      acronym: 'HAL',
      logo: 'https://ns3104249.ip-54-37-85.eu/rfep/images//logos_clubes/torrevieja.png'
    },
    stats: {
      pj: 5,
      g: 1,
      a: 0,
      pim: 0
    }
  },
  {
    name: 'TALLON JIMENEZ, PEDRO',
    id: 17473,
    img: 'https://ns3104249.ip-54-37-85.eu/rfep/images//fichas/17473.png',
    team: {
      id: 1768,
      acronym: 'HAL',
      logo: 'https://ns3104249.ip-54-37-85.eu/rfep/images//logos_clubes/torrevieja.png'
    },
    stats: {
      pj: 11,
      g: 1,
      a: 0,
      pim: 0
    }
  },
  {
    name: 'RUUSKA, MARKUS JUHA MIKAEL',
    id: 22873,
    img: 'https://ns3104249.ip-54-37-85.eu/rfep/images//fichas/22873.jpeg',
    team: {
      id: 1768,
      acronym: 'HAL',
      logo: 'https://ns3104249.ip-54-37-85.eu/rfep/images//logos_clubes/torrevieja.png'
    },
    stats: {
      pj: 5,
      g: 1,
      a: 0,
      pim: 4
    }
  }
]

visitorPlayers = [
  {
    name: 'SIERRA PAREDES, PABLO',
    id: 5816,
    img: 'https://ns3104249.ip-54-37-85.eu/rfep/images//fichas/5816_1.jpg',
    team: {
      id: 1766,
      acronym: 'CPLV',
      logo: 'https://ns3104249.ip-54-37-85.eu/rfep/images//logos_clubes/CPLV.png'
    },
    stats: {
      pj: 3,
      g: 3,
      a: 0,
      pim: 4
    }
  },
  {
    name: 'GALVAN TORRES, PEDRO JAIME',
    id: 22738,
    img: 'https://ns3104249.ip-54-37-85.eu/rfep/images//fichas/22738.jpg',
    team: {
      id: 1766,
      acronym: 'CPLV',
      logo: 'https://ns3104249.ip-54-37-85.eu/rfep/images//logos_clubes/CPLV.png'
    },
    stats: {
      pj: 8,
      g: 2,
      a: 2,
      pim: 6
    }
  },
  {
    name: 'SOBA APARICIO, PEDRO',
    id: 13196,
    img: 'https://ns3104249.ip-54-37-85.eu/rfep/images//fichas/13196.JPG',
    team: {
      id: 1766,
      acronym: 'CPLV',
      logo: 'https://ns3104249.ip-54-37-85.eu/rfep/images//logos_clubes/CPLV.png'
    },
    stats: {
      pj: 5,
      g: 2,
      a: 1,
      pim: 4
    }
  },
  {
    name: 'ARRANZ SALAMANCA, ANGEL',
    id: 14549,
    img: 'https://ns3104249.ip-54-37-85.eu/rfep/images//fichas/14549.JPG',
    team: {
      id: 1766,
      acronym: 'CPLV',
      logo: 'https://ns3104249.ip-54-37-85.eu/rfep/images//logos_clubes/CPLV.png'
    },
    stats: {
      pj: 8,
      g: 3,
      a: 2,
      pim: 6
    }
  },
  {
    name: 'FERNANDEZ CARRERA, RUBÉN',
    id: 13198,
    img: 'https://ns3104249.ip-54-37-85.eu/rfep/images//fichas/13198_2.JPG',
    team: {
      id: 1766,
      acronym: 'CPLV',
      logo: 'https://ns3104249.ip-54-37-85.eu/rfep/images//logos_clubes/CPLV.png'
    },
    stats: {
      pj: 5,
      g: 3,
      a: 1,
      pim: 0
    }
  },
  {
    name: 'SANZ ARIAS, NICOLAS',
    id: 13317,
    img: 'https://ns3104249.ip-54-37-85.eu/rfep/images//fichas/13317_1.jpg',
    team: {
      id: 1766,
      acronym: 'CPLV',
      logo: 'https://ns3104249.ip-54-37-85.eu/rfep/images//logos_clubes/CPLV.png'
    },
    stats: {
      pj: 8,
      g: 4,
      a: 2,
      pim: 8
    }
  },
  {
    name: 'PLACER DURANTEZ, MANUEL',
    id: 17555,
    img: 'https://ns3104249.ip-54-37-85.eu/rfep/images//fichas/17555.jpg',
    team: {
      id: 1766,
      acronym: 'CPLV',
      logo: 'https://ns3104249.ip-54-37-85.eu/rfep/images//logos_clubes/CPLV.png'
    },
    stats: {
      pj: 11,
      g: 1,
      a: 1,
      pim: 0
    }
  },
  {
    name: 'DIEZ FERNÁNDEZ, NICOLAS',
    id: 15118,
    img: 'https://ns3104249.ip-54-37-85.eu/rfep/images//fichas/15118_1.JPG',
    team: {
      id: 1766,
      acronym: 'CPLV',
      logo: 'https://ns3104249.ip-54-37-85.eu/rfep/images//logos_clubes/CPLV.png'
    },
    stats: {
      pj: 3,
      g: 1,
      a: 3,
      pim: 0
    }
  },
  {
    name: 'RUBIA DE LA TORRE, MIGUEL',
    id: 6041,
    img: 'https://ns3104249.ip-54-37-85.eu/rfep/images//fichas/6041.JPG',
    team: {
      id: 1766,
      acronym: 'CPLV',
      logo: 'https://ns3104249.ip-54-37-85.eu/rfep/images//logos_clubes/CPLV.png'
    },
    stats: {
      pj: 5,
      g: 4,
      a: 3,
      pim: 2
    }
  },
  {
    name: 'GOMEZ HERNANDEZ, JAIME',
    id: 15117,
    img: 'https://ns3104249.ip-54-37-85.eu/rfep/images//fichas/15117_1.jpg',
    team: {
      id: 1766,
      acronym: 'CPLV',
      logo: 'https://ns3104249.ip-54-37-85.eu/rfep/images//logos_clubes/CPLV.png'
    },
    stats: {
      pj: 10,
      g: 2,
      a: 1,
      pim: 12
    }
  },
  {
    name: 'MANSILLA MATILLA, ALEJANDRO',
    id: 15119,
    img: 'https://ns3104249.ip-54-37-85.eu/rfep/images//fichas/15119_1.JPG',
    team: {
      id: 1766,
      acronym: 'CPLV',
      logo: 'https://ns3104249.ip-54-37-85.eu/rfep/images//logos_clubes/CPLV.png'
    },
    stats: {
      pj: 7,
      g: 2,
      a: 0,
      pim: 4
    }
  },
  {
    name: 'LOPEZ SANTAREN, MARIO',
    id: 13199,
    img: 'https://ns3104249.ip-54-37-85.eu/rfep/images//fichas/13199.jpg',
    team: {
      id: 1766,
      acronym: 'CPLV',
      logo: 'https://ns3104249.ip-54-37-85.eu/rfep/images//logos_clubes/CPLV.png'
    },
    stats: {
      pj: 6,
      g: 1,
      a: 4,
      pim: 18
    }
  },
  {
    name: 'PASCUAL COLLADO, JAVIER',
    id: 15229,
    img: 'https://ns3104249.ip-54-37-85.eu/rfep/images//fichas/15229.JPG',
    team: {
      id: 1766,
      acronym: 'CPLV',
      logo: 'https://ns3104249.ip-54-37-85.eu/rfep/images//logos_clubes/CPLV.png'
    },
    stats: {
      pj: 8,
      g: 1,
      a: 2,
      pim: 0
    }
  },
  {
    name: 'ABRIL MATEO, LUIS',
    id: 15120,
    img: 'https://ns3104249.ip-54-37-85.eu/rfep/images//fichas/15120_1.JPG',
    team: {
      id: 1766,
      acronym: 'CPLV',
      logo: 'https://ns3104249.ip-54-37-85.eu/rfep/images//logos_clubes/CPLV.png'
    },
    stats: {
      pj: 13,
      g: 0,
      a: 0,
      pim: 4
    }
  },
  {
    name: 'MASA CARPINTERO, ANDRES',
    id: 20670,
    img: 'https://ns3104249.ip-54-37-85.eu/rfep/images//fichas/20670.jpg',
    team: {
      id: 1766,
      acronym: 'CPLV',
      logo: 'https://ns3104249.ip-54-37-85.eu/rfep/images//logos_clubes/CPLV.png'
    },
    stats: {
      pj: 5,
      g: 0,
      a: 0,
      pim: 2
    }
  },
  {
    name: 'SINOVAS LOPEZ, RUBEN',
    id: 6130,
    img: 'https://ns3104249.ip-54-37-85.eu/rfep/images//fichas/6130.JPG',
    team: {
      id: 1766,
      acronym: 'CPLV',
      logo: 'https://ns3104249.ip-54-37-85.eu/rfep/images//logos_clubes/CPLV.png'
    },
    stats: {
      pj: 0,
      g: 0,
      a: 0,
      pim: 0
    }
  },
  {
    name: 'TRIBIÑO CORDAL, JUAN',
    id: 5785,
    img: 'https://ns3104249.ip-54-37-85.eu/rfep/images//fichas/5785.JPG',
    team: {
      id: 1766,
      acronym: 'CPLV',
      logo: 'https://ns3104249.ip-54-37-85.eu/rfep/images//logos_clubes/CPLV.png'
    },
    stats: {
      pj: 5,
      g: 0,
      a: 0,
      pim: 0
    }
  },
  {
    name: 'MORENO MUÑOZ, ADRIAN',
    id: 14556,
    img: 'https://ns3104249.ip-54-37-85.eu/rfep/images//fichas/14556.jpg',
    team: {
      id: 1766,
      acronym: 'CPLV',
      logo: 'https://ns3104249.ip-54-37-85.eu/rfep/images//logos_clubes/CPLV.png'
    },
    stats: {
      pj: 8,
      g: 0,
      a: 0,
      pim: 0
    }
  },
  {
    name: 'CABALLERO RODRIGO, MATEO',
    id: 14535,
    img: 'https://ns3104249.ip-54-37-85.eu/rfep/images//fichas/14535_1.jpg',
    team: {
      id: 1766,
      acronym: 'CPLV',
      logo: 'https://ns3104249.ip-54-37-85.eu/rfep/images//logos_clubes/CPLV.png'
    },
    stats: {
      pj: 3,
      g: 0,
      a: 0,
      pim: 0
    }
  },
  {
    name: 'CARRANZA FERNÁNDEZ, IKER',
    id: 15550,
    img: 'https://ns3104249.ip-54-37-85.eu/rfep/images//fichas/15550_1.JPG',
    team: {
      id: 1766,
      acronym: 'CPLV',
      logo: 'https://ns3104249.ip-54-37-85.eu/rfep/images//logos_clubes/CPLV.png'
    },
    stats: {
      pj: 11,
      g: 0,
      a: 0,
      pim: 0
    }
  },
  {
    name: 'MARTIN RODRIGO, RODRIGO',
    id: 15115,
    img: 'https://ns3104249.ip-54-37-85.eu/rfep/images//fichas/15115.jpg',
    team: {
      id: 1766,
      acronym: 'CPLV',
      logo: 'https://ns3104249.ip-54-37-85.eu/rfep/images//logos_clubes/CPLV.png'
    },
    stats: {
      pj: 3,
      g: 1,
      a: 0,
      pim: 0
    }
  },
  {
    name: 'BERNAT ROS, BORJA',
    id: 8018,
    img: 'https://ns3104249.ip-54-37-85.eu/rfep/images//fichas/8018_2.jpg',
    team: {
      id: 1766,
      acronym: 'CPLV',
      logo: 'https://ns3104249.ip-54-37-85.eu/rfep/images//logos_clubes/CPLV.png'
    },
    stats: {
      pj: 8,
      g: 0,
      a: 0,
      pim: 2
    }
  },
  {
    name: 'BUSTELO PORTELA, MARCOS SHAYEL',
    id: 14534,
    img: 'https://ns3104249.ip-54-37-85.eu/rfep/images//fichas/14534.jpg',
    team: {
      id: 1766,
      acronym: 'CPLV',
      logo: 'https://ns3104249.ip-54-37-85.eu/rfep/images//logos_clubes/CPLV.png'
    },
    stats: {
      pj: 2,
      g: 0,
      a: 0,
      pim: 0
    }
  },
  {
    name: 'MEDINA MARTÍN, JUAN',
    id: 14539,
    img: 'https://ns3104249.ip-54-37-85.eu/rfep/images//fichas/14539_1.jpg',
    team: {
      id: 1766,
      acronym: 'CPLV',
      logo: 'https://ns3104249.ip-54-37-85.eu/rfep/images//logos_clubes/CPLV.png'
    },
    stats: {
      pj: 8,
      g: 1,
      a: 0,
      pim: 10
    }
  }
]

visitor = {
  id: 1766,
  acronym: 'CPLV',
  logo: 'https://ns3104249.ip-54-37-85.eu/rfep/images//logos_clubes/CPLV.png',
  name: 'CPLV C'
}

document.body.onload = async () => {
  let req = await fetch('/select')
  const select = await req.text()

  if (select !== '0') {
    // await genData(select)
    await genView()
    document.querySelector('#timeToggle').addEventListener('click', () => {
      runningTime = !runningTime
    })
    setInterval(() => {
      let update = true
      const time = document.querySelector('#time')
      const timeContainer = document.querySelector('#timeContainer')
      if (runningTime) {
        const split = time.value.trim().split(':')
        if (ms !== 0) {
          ms -= 1
        } else {
          if (possesion !== '') {
            const timePassed = (Number(periodTime.split(':')[0]) - Number(split[0])) * 60 + (Number(periodTime.split(':')[1]) - Number(split[1]))
            if (possesion === 'local') {
              localPossesion += 1
            } else if (possesion === 'visitor') {
              visitorPossesion += 1
            }
            document.querySelector('#visitor_possesion').textContent = ((visitorPossesion * 100) / timePassed).toFixed(2) + '%'
            document.querySelector('#local_possesion').textContent = ((localPossesion * 100) / timePassed).toFixed(2) + '%'
          }
          if (Number(split[1]) === 0) {
            if (Number(split[0]) === 0) {
              runningTime = false
              split[0] = 0
              split[1] = 0
              update = false
              autoPeriod()
            } else {
              split[0] = Number(split[0]) - 1
              split[1] = 59
              ms = 99
            }
          } else {
            split[1] = Number(split[1]) - 1
            ms = 99
          }
        }
        time.value = `${Number(split[0]) < 10 ? '0' + Number(split[0]) : Number(split[0])}:${Number(split[1]) < 10 ? '0' + Number(split[1]) : Number(split[1])}`
        if (split[0] >= 1 && update) {
          timeContainer.innerHTML = `${Number(split[0]) < 10 ? '0' + Number(split[0]) : Number(split[0])}:${Number(split[1]) < 10 ? '0' + Number(split[1]) : Number(split[1])}`
        } else if (update) {
          timeContainer.innerHTML = `${Number(split[1]) < 10 ? '0' + Number(split[1]) : Number(split[1])}.${ms < 10 ? '0' + Number(ms) : ms}`
        }
      }
    }, 10)
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
  bottom.innerHTML += `<div class="team local">
    <div class="top">
      <img src="${local.logo}" />
      <span>${local.name}</span>
    </div>
    <div class='mid'>
      <div class='info'>
        <div>
          <span>TIROS: </span>
          <span id='local_tiros'>0</span>
        </div>
        <div>
          <span>SAQUES: </span>
          <span id='local_saques'>0</span>
        </div>
        <div>
          <span>POSESIÓN: </span>
          <span id='local_possesion'>0.00%</span>
        </div>
      </div>
    </div>
    <div class="bot">
      <button class='button' onClick="(() => {
        document.querySelector('#local_tiros').textContent = Number(document.querySelector('#local_tiros').textContent) + 1
      })()">
        <svg width="50px" height="50px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.002 512.002" style="enable-background:new 0 0 512.002 512.002;" xml:space="preserve"><g><path d="M505.317,50.234c4.404-7.865,5.48-16.975,3.032-25.649c-2.449-8.672-8.129-15.874-15.99-20.273    C487.327,1.49,481.634,0,475.893,0c-12.213,0-23.503,6.617-29.473,17.286l-101.478,182.04L243.907,380.567    c-4.736,2.591-26.153,6.597-78.648,5.164c-38.713-1.056-74.277-4.665-82.69-7.303c-7.174-3.135-14.79-4.742-22.647-4.78h-0.271    c-15.201,0-29.509,5.886-40.314,16.593c-10.87,10.769-16.895,25.13-16.965,40.434c-0.092,20.06,10.517,38.937,27.704,49.323    c1.244,0.821,2.689,1.61,4.405,2.408c3.989,1.955,8.22,3.442,12.585,4.424c23.699,6.548,66.059,10.311,107.414,10.311    c16.801,0,33.419-0.629,48.566-1.937c9.885,10.338,23.795,16.797,39.193,16.797h119.05c29.917,0,54.256-24.338,54.256-54.256    c0-29.917-24.338-54.256-54.256-54.256h-52.897l95.457-171.233L505.317,50.234z M361.29,421.566    c19.949,0,36.179,16.23,36.179,36.179c0,19.949-16.23,36.179-36.179,36.179H242.24c-19.949,0-36.179-16.23-36.179-36.179    s16.23-36.179,36.179-36.179H361.29z M287.7,403.489h-45.46c-29.917,0-54.256,24.338-54.256,54.256    c0,7.127,1.394,13.93,3.903,20.171c-48.864,3.125-111.177-0.482-140.206-8.565c-0.159-0.045-0.321-0.084-0.482-0.122    c-3.071-0.676-6.043-1.715-8.831-3.09c-0.067-0.033-0.135-0.065-0.202-0.096c-1.257-0.581-1.913-0.983-2.191-1.173    c-0.136-0.092-0.276-0.181-0.416-0.265c-11.851-7.097-19.174-20.066-19.11-33.849c0.048-10.474,4.172-20.303,11.612-27.675    c7.396-7.327,17.188-11.356,27.591-11.356h0.184c5.491,0.026,10.807,1.171,15.802,3.403c0.253,0.113,0.512,0.215,0.775,0.304    c12.353,4.206,56.005,7.594,91.07,8.439c78.809,1.902,87.204-7.873,90.361-11.553c0.394-0.459,0.741-0.956,1.035-1.485    l97.443-174.8l27.344,15.303L287.7,403.489z M365.125,200.245L462.202,26.1c2.769-4.948,8.016-8.023,13.691-8.023    c2.653,0,5.291,0.692,7.632,2.005c3.652,2.043,6.288,5.387,7.425,9.413s0.638,8.255-1.415,11.923l-97.068,174.128L365.125,200.245z"/></g></svg>
        TIRO
      </button>
      <button class='button' onClick="goal('local')">
        <svg width="50px" height="50px" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--noto" preserveAspectRatio="xMidYMid meet"><path d="M35.89 98.57c-.01-.14-1.02-14.31-1.02-23.58c0-8.68.13-28.31.14-30.84c-.45-.79-2-3.47-3.33-5.39c-1.62-2.36-4.75-8.47-4.88-8.72l1.78-.91c.03.06 3.2 6.25 4.75 8.5c1.61 2.35 3.47 5.63 3.55 5.77l.13.23v.27c0 .22-.15 21.86-.15 31.09c0 9.2 1.01 23.29 1.02 23.43l-1.99.15z" fill="#b7cbd3"/><path d="M48.84 99.58l-2-.14c0-.02.15-2.2-.15-6.58l-.24-3.55c-.49-7.18-.96-13.96-1.08-23.95c-.14-11.56.11-20.44.14-21.54c-.1-.48-.61-2.78-2.11-6.26c-1.8-4.2-2.11-8.61-2.12-8.8l2-.13c0 .04.31 4.27 1.97 8.14c1.78 4.15 2.24 6.68 2.26 6.79l.02.1v.1c0 .09-.29 9.32-.15 21.56c.12 9.94.58 16.69 1.07 23.84l.24 3.55c.3 4.56.15 6.78.15 6.87z" fill="#b7cbd3"/><path d="M57.35 98.07c-.01-.36-.59-36.56-.73-42.48c-.13-5.46-.02-11.35 0-12.32c-.2-.8-1.18-4.81-1.45-8.06c-.2-2.36-.01-6.52 0-6.7l2 .09c0 .04-.19 4.21 0 6.44c.28 3.38 1.42 7.82 1.43 7.86l.03.13v.14c0 .06-.14 6.47 0 12.36c.14 5.92.72 42.13.73 42.49l-2.01.05z" fill="#b7cbd3"/><path d="M69.47 98.07l-.58-53.93l.01-.06c.02-.17.45-4.16 1.03-7.23c.37-1.92.57-4.65.57-7.7h2c0 3.21-.21 6-.6 8.07c-.53 2.79-.95 6.51-1 7.02l.58 53.81l-2.01.02z" fill="#b7cbd3"/><path d="M82.86 98.64h-2c0-.1 0-9.83-.15-27.29c-.14-17.47-.15-26.92-.15-27.02v-.18l.06-.17c.01-.03 1.01-2.76 1.72-5.59c.73-2.92 2.19-9.04 2.19-9.04l1.95.46s-1.46 6.14-2.19 9.06c-.64 2.56-1.49 4.97-1.72 5.63c0 1.37.01 10.67.15 26.83c.14 17.47.14 27.21.14 27.31z" fill="#b7cbd3"/><path d="M91.66 97.33l-.44-52.51l.11-.22s3.07-5.99 4.68-9.06c1.61-3.07 4.03-6.79 4.14-6.94l1.67 1.09c-.02.04-2.47 3.79-4.04 6.78c-1.42 2.72-3.99 7.72-4.56 8.83l.44 52.02l-2 .01z" fill="#b7cbd3"/><path d="M17.65 104.02l-1.81-.84c.5-1.08 1.81-4.27 1.81-6c0-.79-.02-3.89-.04-7.99c-.04-7.9-.11-19.84-.11-25.73c0-8.81.29-25.69.29-25.86l2 .03c0 .17-.29 17.03-.29 25.82c0 5.89.06 17.82.11 25.72c.02 4.11.04 7.21.04 8c-.01 2.54-1.92 6.68-2 6.85z" fill="#b7cbd3"/><path d="M108.16 101.13c0-.18-.14-17.93 0-27.03c.03-2.14.09-5.12.16-8.47c.2-10.42.5-26.17.29-28.35l1.99-.2c.23 2.3-.05 16.88-.28 28.59c-.06 3.35-.12 6.33-.16 8.46c-.14 9.08 0 26.81 0 26.99l-2 .01z" fill="#b7cbd3"/><path d="M60.05 55.42c-24.91 0-34.43-2.86-34.84-2.98l-.21-.09c-.03-.02-3.19-1.88-6.72-3.29c-3.72-1.49-8.07-4.66-8.25-4.79l1.18-1.61c.04.03 4.32 3.16 7.81 4.55c3.34 1.34 6.28 3.01 6.89 3.36c1.14.32 11.93 3.12 37.7 2.85c25.41-.27 37.92-2.4 39.62-2.72l11.65-8.2l1.15 1.64l-12 8.44l-.21.04c-.12.03-12.68 2.5-40.19 2.79c-1.24 0-2.43.01-3.58.01z" fill="#b7cbd3"/><path d="M64.63 64.02c-28.68 0-38.21-2.95-39.73-3.5c-.89.03-4.44.14-6.26.14c-2.03 0-7.53-.14-7.76-.15l.05-2c.06 0 5.7.15 7.71.15c2 0 6.35-.14 6.39-.15l.22-.01l.2.08c.08.03 8.81 3.43 39.18 3.43c30.46 0 38.5-1.99 38.58-2.01l13.57-3.65l.52 1.93l-13.58 3.65c-.32.09-8.22 2.09-39.09 2.09z" fill="#b7cbd3"/><path d="M59.32 73.67c-25.32 0-32.21-2.06-33.94-2.87c-.9.23-3.34.86-6.64 1.66c-4.28 1.03-8.21 1.19-8.37 1.2l-.07-2c.04 0 3.9-.16 7.98-1.14c4.17-1.01 6.96-1.74 6.99-1.75l.49-.13l.39.32c.14.09 4.97 2.97 37.46 2.7c33.05-.28 38.79-2.59 39.02-2.69l.27-.12l.31.04c.02 0 2.45.42 5.96.42c3.62 0 8.74.14 8.79.15l-.06 2c-.05 0-5.14-.15-8.73-.15c-3.04 0-5.28-.3-6.03-.41c-1.57.52-9.45 2.49-39.51 2.75c-1.5.01-2.94.02-4.31.02z" fill="#b7cbd3"/><path d="M11.76 84.45l-.26-1.98c.03 0 3.35-.44 6.75-1.29c3.4-.85 7.15-2.29 7.18-2.3l.28-.11l.29.07c.11.02 11.35 2.45 38.16 1.87c26.92-.58 38.73-2.45 38.84-2.47l.28-.04l.26.11c.02.01 1.76.72 5.98 1.7c4.34 1.01 8.31 2.04 8.35 2.05l-.5 1.94c-.04-.01-3.98-1.03-8.3-2.04c-3.5-.82-5.36-1.45-6.02-1.7c-1.92.28-14.03 1.92-38.85 2.45c-25.01.54-36.37-1.47-38.34-1.86c-.95.36-4.12 1.51-7.14 2.27c-3.5.87-6.82 1.31-6.96 1.33z" fill="#b7cbd3"/><path d="M116.93 96.78s-5.26-2.34-8.48-3.8a24.216 24.216 0 0 1-4.69-2.81l-.64.55l-.34.02c-.14.01-14.17.74-38.29 1.17c-22.53.4-37.41-.7-39.43-.86l-12.78 5.03l-.73-1.86l13.21-5.2l.24.01c.15.01 15.42 1.31 39.46.87c22.02-.39 35.6-1.04 37.88-1.15l1.44-1.23l.65.6c.02.02 1.84 1.67 4.85 3.04c3.21 1.46 8.46 3.79 8.46 3.79l-.81 1.83z" fill="#b7cbd3"/><path d="M70.2 35.57c-2.1 0-4.3-.01-6.6-.03c-35.84-.29-46.56-1.31-46.66-1.32l.2-1.99c.1.01 10.78 1.02 46.48 1.31c35.61.29 47.58-1.86 47.7-1.88l.37 1.97c-.46.09-10.75 1.94-41.49 1.94z" fill="#b7cbd3"/><path d="M70.8 40.38c-2.22 0-4.56 0-7.05-.01c-36.63-.15-42.75-1.44-42.99-1.49l.43-1.95c.25.05 6.46 1.29 42.57 1.44c36.24.14 43.14-.85 43.2-.86l.31 1.98c-.25.02-6.05.89-36.47.89z" fill="#b7cbd3"/><path d="M104.52 96.46l.37-50.94l11.58-12.58l-2.62-4.36L100.9 42.9l-74.47-.75l-14.44-15.67l-3.74 3.49l15.5 16.12l.19 51.75l-11.58 4.61l-.37 5.48l14.7-6.1l76.84-.75l12.7 6.48l-.12-4.86l-11.59-6.24zm-3.86-.62c-.62.37-72.23.75-72.6.5S27 47.96 27.81 47.15c.62-.62 71.73-.25 73.1.37c.68.31.51 10.98.37 22.79c-.16 12.11-.31 25.34-.62 25.53z" fill="#9a9a9a"/><path d="M5.93 105.72l3.01 3.25s.9-.01 2.11-.25c1.24-.24 2.08-.86 2.3-1.74c.31-1.24-.33-72.02-.33-72.02c.09-1.61-.09-3.32 2.15-3.41c2.24-.09 95.96-.09 97.03-.09s2.69.36 2.69 2.78s-.45 71.83-.36 72.46c.09.63.69 1.5 2.44 1.87c1.85.39 4.2.11 4.2.11l1.25-11.04l-1.39-71.55L9.19 25.04l-3.92 6.19l.66 74.49z" fill="#df0a2b"/><path d="M5.62 24.69c-2.24 2.99-1.7 6.14-1.7 15.02s-.13 64.25 0 65.82c.13 1.57.33 2.62 2.25 3.17c1.39.39 2.75.27 2.75.27s.22-76.83.22-78.01s-.26-3.26 1.96-3.53s103.04.26 104.21.13s3.13 1.04 3.13 2.48s.76 78.74.76 78.74s3.57.26 4.33-1.3c.77-1.57.52-77.31.26-79.4s-1.96-4.57-5.35-5.35s-105.64-.79-107.46-.66s-4.18 1.05-5.36 2.62z" fill="#ff180a"/></svg>
        GOL
      </button>
      <button class='button' onClick="fault('local')">
      <svg width="50px" height="50px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="31.636px" height="31.636px" viewBox="0 0 31.636 31.636" style="enable-background:new 0 0 31.636 31.636;" xml:space="preserve"><g><g><polygon points="15.761,9.771 17.092,11.45 20.704,9.28 19.086,7.741   "/><path d="M31.623,17.509v-0.01l-0.006,0.003c-0.501-0.567-8.354-9.46-12.005-12.382c-3.5-2.693-9.892-2.522-15.854,2.308    L2.934,8.085C2.887,8.12,2.838,8.147,2.793,8.185c-3.449,2.72-3.744,8.097-0.659,12.006c3.084,3.911,8.381,4.876,11.829,2.156    c0.705-0.555,1.416-1.793,1.855-2.535l7.126,8.449l8.555-5.65l0.123-5.073l0.014-0.013C31.633,17.521,31.626,17.513,31.623,17.509    z M29.808,21.906l-4.161,2.542v-1.189l4.161-2.541V21.906z M24.02,21.808l-9.327-11.37c-0.025-0.032-0.045-0.066-0.071-0.099    c-0.064-0.081-0.134-0.152-0.2-0.23l-0.214-0.261l-0.004,0.007C12.351,7.784,9.846,6.676,7.426,6.65    c4.385-2.331,8.731-2.615,11.368-0.506c3.288,2.63,10.38,10.58,11.656,12.019L24.02,21.808z"/></g></g></svg>
        FALTA
      </button>
      <button class='button' onClick="saque('local')">
      <svg  width="50px" height="50px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 63.999 63.999" style="enable-background:new 0 0 63.999 63.999;" xml:space="preserve"><g id="Hockey"><path d="M62.93,42.877c-0.903-1.003-2.247-1.518-3.598-1.379l-18.245,1.893L33.173,30.5L48.814,5.024   c0.289-0.471,0.142-1.087-0.329-1.375c-0.473-0.292-1.087-0.142-1.375,0.329L32,28.589L16.889,3.977   c-0.289-0.47-0.903-0.618-1.376-0.329c-0.47,0.289-0.618,0.905-0.329,1.375L30.826,30.5l-7.914,12.891L4.667,41.498   c-1.347-0.14-2.695,0.375-3.598,1.379c-0.908,1.009-1.268,2.398-0.962,3.713c0.002,0.011,0.005,0.022,0.008,0.034   c0.68,2.873,3.234,4.876,6.224,4.876h13.382c0.01,0,0.02-0.004,0.03-0.004c0.074-0.002,0.149-0.01,0.221-0.029   c0.036-0.009,0.068-0.027,0.102-0.04c0.045-0.017,0.09-0.03,0.132-0.054c0.033-0.018,0.061-0.044,0.091-0.066   c0.038-0.027,0.079-0.051,0.114-0.084c0.037-0.035,0.066-0.079,0.097-0.12c0.021-0.027,0.046-0.049,0.064-0.079L32,32.411   l11.427,18.612c0.019,0.031,0.045,0.054,0.066,0.082c0.031,0.04,0.059,0.083,0.095,0.117c0.036,0.035,0.079,0.06,0.119,0.089   c0.029,0.02,0.055,0.045,0.085,0.062c0.044,0.024,0.092,0.039,0.139,0.056c0.032,0.012,0.063,0.029,0.096,0.038   c0.072,0.019,0.147,0.027,0.222,0.029c0.01,0,0.019,0.004,0.029,0.004h13.382c2.989,0,5.544-2.003,6.224-4.876   c0.003-0.011,0.006-0.022,0.008-0.034C64.198,45.275,63.838,43.886,62.93,42.877z M2.056,46.143c-0.002-0.01-0.005-0.02-0.007-0.03   c-0.147-0.673,0.042-1.38,0.507-1.898c0.476-0.53,1.181-0.806,1.905-0.728l17.267,1.792L19.159,49.5H6.338   C4.275,49.5,2.514,48.12,2.056,46.143z M61.95,46.112c-0.002,0.01-0.005,0.02-0.007,0.03c-0.458,1.977-2.219,3.357-4.282,3.357   H44.84l-2.569-4.221l17.267-1.792c0.718-0.075,1.429,0.198,1.905,0.727C61.908,44.732,62.097,45.44,61.95,46.112z"/><path d="M32,52.5c-3.991,0-7,1.72-7,4c0,2.28,3.009,4,7,4c3.991,0,7-1.72,7-4C39,54.22,35.99,52.5,32,52.5z M32,58.5   c-3.052,0-5-1.185-5-2c0-0.815,1.948-2,5-2c3.052,0,5,1.185,5,2C37,57.316,35.052,58.5,32,58.5z"/></g></svg>
        SAQUE
      </button>
      <button class='button' onClick="(() => {possesion='local'})()">
      POSESIÓN
      </button>
    </div>
    </div>
  </div>`
  bottom.innerHTML += `<div class="center">
  <input id="time" value="${periodTime}" style="display:none;"></input>
      <div class='top'>
        <div class="result">
          <button id='local_result'>0</button>
          <button id='visitor_result'>0</button>
        </div>
        <button class="time" id="timeContainer">
          ${periodTime}
        </button>
      </div>
      <button class='period' id='period' onClick="period()">${periods[0]}</button>
      <div class='mid'></div>
      <div class='bot'>
        <button class='button' id="timeToggle">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g width="50px" height="50px" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="ic_fluent_video_play_pause_24_filled" fill="#212121" fill-rule="nonzero"><path d="M3.65140982,6.61646219 L11.1528787,11.3693959 C11.3672679,11.5052331 11.4827597,11.722675 11.4993749,11.9464385 L11.4984593,7.25 C11.4984593,6.83578644 11.8342458,6.5 12.2484593,6.5 L15.2484593,6.5 C15.6626729,6.5 15.9984593,6.83578644 15.9984593,7.25 L15.9984593,16.75 C15.9984593,17.1642136 15.6626729,17.5 15.2484593,17.5 L12.2484593,17.5 C11.8342458,17.5 11.4984593,17.1642136 11.4984593,16.75 L11.4993494,12.0597632 C11.4826318,12.2835468 11.3670166,12.5009613 11.1525249,12.6366956 L3.65105604,17.3837618 C3.15168144,17.6997752 2.5,17.3409648 2.5,16.75 L2.5,7.25 C2.5,6.65884683 3.15205264,6.30006928 3.65140982,6.61646219 Z M21.2477085,6.50037474 C21.661922,6.50037474 21.9977085,6.83616118 21.9977085,7.25037474 L21.9977085,16.7496253 C21.9977085,17.1638388 21.661922,17.4996253 21.2477085,17.4996253 L18.2477085,17.4996253 C17.8334949,17.4996253 17.4977085,17.1638388 17.4977085,16.7496253 L17.4977085,7.25037474 C17.4977085,6.83616118 17.8334949,6.50037474 18.2477085,6.50037474 L21.2477085,6.50037474 Z" id="🎨-Color"/></g></g></svg>
          PL/PS
        </button>
      </div>
    </div>`
  bottom.innerHTML += `<div class="team visitor">
    <div class="top">
      <span>${visitor.name}</span>
      <img src="${visitor.logo}" />
    </div>
    <div class='mid'>
      <div class='info'>
        <div>
          <span>POSESIÓN: </span>
          <span id='visitor_possesion'>0.00%</span>
        </div>
        <div>
          <span>SAQUES: </span>
          <span id='visitor_saques'>0</span>
        </div>
        <div>
          <span>TIROS: </span>
          <span id='visitor_tiros'>0</span>
        </div>
      </div>
    </div>
    <div class="bot">
      <button class='button' onClick="(() => {possesion='visitor'})()">
        POSESIÓN
      </button>
      <button class='button' onClick="saque('visitor')">
        <svg  width="50px" height="50px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 63.999 63.999" style="enable-background:new 0 0 63.999 63.999;" xml:space="preserve"><g id="Hockey"><path d="M62.93,42.877c-0.903-1.003-2.247-1.518-3.598-1.379l-18.245,1.893L33.173,30.5L48.814,5.024   c0.289-0.471,0.142-1.087-0.329-1.375c-0.473-0.292-1.087-0.142-1.375,0.329L32,28.589L16.889,3.977   c-0.289-0.47-0.903-0.618-1.376-0.329c-0.47,0.289-0.618,0.905-0.329,1.375L30.826,30.5l-7.914,12.891L4.667,41.498   c-1.347-0.14-2.695,0.375-3.598,1.379c-0.908,1.009-1.268,2.398-0.962,3.713c0.002,0.011,0.005,0.022,0.008,0.034   c0.68,2.873,3.234,4.876,6.224,4.876h13.382c0.01,0,0.02-0.004,0.03-0.004c0.074-0.002,0.149-0.01,0.221-0.029   c0.036-0.009,0.068-0.027,0.102-0.04c0.045-0.017,0.09-0.03,0.132-0.054c0.033-0.018,0.061-0.044,0.091-0.066   c0.038-0.027,0.079-0.051,0.114-0.084c0.037-0.035,0.066-0.079,0.097-0.12c0.021-0.027,0.046-0.049,0.064-0.079L32,32.411   l11.427,18.612c0.019,0.031,0.045,0.054,0.066,0.082c0.031,0.04,0.059,0.083,0.095,0.117c0.036,0.035,0.079,0.06,0.119,0.089   c0.029,0.02,0.055,0.045,0.085,0.062c0.044,0.024,0.092,0.039,0.139,0.056c0.032,0.012,0.063,0.029,0.096,0.038   c0.072,0.019,0.147,0.027,0.222,0.029c0.01,0,0.019,0.004,0.029,0.004h13.382c2.989,0,5.544-2.003,6.224-4.876   c0.003-0.011,0.006-0.022,0.008-0.034C64.198,45.275,63.838,43.886,62.93,42.877z M2.056,46.143c-0.002-0.01-0.005-0.02-0.007-0.03   c-0.147-0.673,0.042-1.38,0.507-1.898c0.476-0.53,1.181-0.806,1.905-0.728l17.267,1.792L19.159,49.5H6.338   C4.275,49.5,2.514,48.12,2.056,46.143z M61.95,46.112c-0.002,0.01-0.005,0.02-0.007,0.03c-0.458,1.977-2.219,3.357-4.282,3.357   H44.84l-2.569-4.221l17.267-1.792c0.718-0.075,1.429,0.198,1.905,0.727C61.908,44.732,62.097,45.44,61.95,46.112z"/><path d="M32,52.5c-3.991,0-7,1.72-7,4c0,2.28,3.009,4,7,4c3.991,0,7-1.72,7-4C39,54.22,35.99,52.5,32,52.5z M32,58.5   c-3.052,0-5-1.185-5-2c0-0.815,1.948-2,5-2c3.052,0,5,1.185,5,2C37,57.316,35.052,58.5,32,58.5z"/></g></svg>
        SAQUE
      </button>
      <button class='button' onClick="fault('visitor')">
        <svg width="50px" height="50px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="31.636px" height="31.636px" viewBox="0 0 31.636 31.636" style="enable-background:new 0 0 31.636 31.636;" xml:space="preserve"><g><g><polygon points="15.761,9.771 17.092,11.45 20.704,9.28 19.086,7.741   "/><path d="M31.623,17.509v-0.01l-0.006,0.003c-0.501-0.567-8.354-9.46-12.005-12.382c-3.5-2.693-9.892-2.522-15.854,2.308    L2.934,8.085C2.887,8.12,2.838,8.147,2.793,8.185c-3.449,2.72-3.744,8.097-0.659,12.006c3.084,3.911,8.381,4.876,11.829,2.156    c0.705-0.555,1.416-1.793,1.855-2.535l7.126,8.449l8.555-5.65l0.123-5.073l0.014-0.013C31.633,17.521,31.626,17.513,31.623,17.509    z M29.808,21.906l-4.161,2.542v-1.189l4.161-2.541V21.906z M24.02,21.808l-9.327-11.37c-0.025-0.032-0.045-0.066-0.071-0.099    c-0.064-0.081-0.134-0.152-0.2-0.23l-0.214-0.261l-0.004,0.007C12.351,7.784,9.846,6.676,7.426,6.65    c4.385-2.331,8.731-2.615,11.368-0.506c3.288,2.63,10.38,10.58,11.656,12.019L24.02,21.808z"/></g></g></svg>
        FALTA
      </button>
      <button class='button' onClick="goal('visitor')">
        <svg width="50px" height="50px" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--noto" preserveAspectRatio="xMidYMid meet"><path d="M35.89 98.57c-.01-.14-1.02-14.31-1.02-23.58c0-8.68.13-28.31.14-30.84c-.45-.79-2-3.47-3.33-5.39c-1.62-2.36-4.75-8.47-4.88-8.72l1.78-.91c.03.06 3.2 6.25 4.75 8.5c1.61 2.35 3.47 5.63 3.55 5.77l.13.23v.27c0 .22-.15 21.86-.15 31.09c0 9.2 1.01 23.29 1.02 23.43l-1.99.15z" fill="#b7cbd3"/><path d="M48.84 99.58l-2-.14c0-.02.15-2.2-.15-6.58l-.24-3.55c-.49-7.18-.96-13.96-1.08-23.95c-.14-11.56.11-20.44.14-21.54c-.1-.48-.61-2.78-2.11-6.26c-1.8-4.2-2.11-8.61-2.12-8.8l2-.13c0 .04.31 4.27 1.97 8.14c1.78 4.15 2.24 6.68 2.26 6.79l.02.1v.1c0 .09-.29 9.32-.15 21.56c.12 9.94.58 16.69 1.07 23.84l.24 3.55c.3 4.56.15 6.78.15 6.87z" fill="#b7cbd3"/><path d="M57.35 98.07c-.01-.36-.59-36.56-.73-42.48c-.13-5.46-.02-11.35 0-12.32c-.2-.8-1.18-4.81-1.45-8.06c-.2-2.36-.01-6.52 0-6.7l2 .09c0 .04-.19 4.21 0 6.44c.28 3.38 1.42 7.82 1.43 7.86l.03.13v.14c0 .06-.14 6.47 0 12.36c.14 5.92.72 42.13.73 42.49l-2.01.05z" fill="#b7cbd3"/><path d="M69.47 98.07l-.58-53.93l.01-.06c.02-.17.45-4.16 1.03-7.23c.37-1.92.57-4.65.57-7.7h2c0 3.21-.21 6-.6 8.07c-.53 2.79-.95 6.51-1 7.02l.58 53.81l-2.01.02z" fill="#b7cbd3"/><path d="M82.86 98.64h-2c0-.1 0-9.83-.15-27.29c-.14-17.47-.15-26.92-.15-27.02v-.18l.06-.17c.01-.03 1.01-2.76 1.72-5.59c.73-2.92 2.19-9.04 2.19-9.04l1.95.46s-1.46 6.14-2.19 9.06c-.64 2.56-1.49 4.97-1.72 5.63c0 1.37.01 10.67.15 26.83c.14 17.47.14 27.21.14 27.31z" fill="#b7cbd3"/><path d="M91.66 97.33l-.44-52.51l.11-.22s3.07-5.99 4.68-9.06c1.61-3.07 4.03-6.79 4.14-6.94l1.67 1.09c-.02.04-2.47 3.79-4.04 6.78c-1.42 2.72-3.99 7.72-4.56 8.83l.44 52.02l-2 .01z" fill="#b7cbd3"/><path d="M17.65 104.02l-1.81-.84c.5-1.08 1.81-4.27 1.81-6c0-.79-.02-3.89-.04-7.99c-.04-7.9-.11-19.84-.11-25.73c0-8.81.29-25.69.29-25.86l2 .03c0 .17-.29 17.03-.29 25.82c0 5.89.06 17.82.11 25.72c.02 4.11.04 7.21.04 8c-.01 2.54-1.92 6.68-2 6.85z" fill="#b7cbd3"/><path d="M108.16 101.13c0-.18-.14-17.93 0-27.03c.03-2.14.09-5.12.16-8.47c.2-10.42.5-26.17.29-28.35l1.99-.2c.23 2.3-.05 16.88-.28 28.59c-.06 3.35-.12 6.33-.16 8.46c-.14 9.08 0 26.81 0 26.99l-2 .01z" fill="#b7cbd3"/><path d="M60.05 55.42c-24.91 0-34.43-2.86-34.84-2.98l-.21-.09c-.03-.02-3.19-1.88-6.72-3.29c-3.72-1.49-8.07-4.66-8.25-4.79l1.18-1.61c.04.03 4.32 3.16 7.81 4.55c3.34 1.34 6.28 3.01 6.89 3.36c1.14.32 11.93 3.12 37.7 2.85c25.41-.27 37.92-2.4 39.62-2.72l11.65-8.2l1.15 1.64l-12 8.44l-.21.04c-.12.03-12.68 2.5-40.19 2.79c-1.24 0-2.43.01-3.58.01z" fill="#b7cbd3"/><path d="M64.63 64.02c-28.68 0-38.21-2.95-39.73-3.5c-.89.03-4.44.14-6.26.14c-2.03 0-7.53-.14-7.76-.15l.05-2c.06 0 5.7.15 7.71.15c2 0 6.35-.14 6.39-.15l.22-.01l.2.08c.08.03 8.81 3.43 39.18 3.43c30.46 0 38.5-1.99 38.58-2.01l13.57-3.65l.52 1.93l-13.58 3.65c-.32.09-8.22 2.09-39.09 2.09z" fill="#b7cbd3"/><path d="M59.32 73.67c-25.32 0-32.21-2.06-33.94-2.87c-.9.23-3.34.86-6.64 1.66c-4.28 1.03-8.21 1.19-8.37 1.2l-.07-2c.04 0 3.9-.16 7.98-1.14c4.17-1.01 6.96-1.74 6.99-1.75l.49-.13l.39.32c.14.09 4.97 2.97 37.46 2.7c33.05-.28 38.79-2.59 39.02-2.69l.27-.12l.31.04c.02 0 2.45.42 5.96.42c3.62 0 8.74.14 8.79.15l-.06 2c-.05 0-5.14-.15-8.73-.15c-3.04 0-5.28-.3-6.03-.41c-1.57.52-9.45 2.49-39.51 2.75c-1.5.01-2.94.02-4.31.02z" fill="#b7cbd3"/><path d="M11.76 84.45l-.26-1.98c.03 0 3.35-.44 6.75-1.29c3.4-.85 7.15-2.29 7.18-2.3l.28-.11l.29.07c.11.02 11.35 2.45 38.16 1.87c26.92-.58 38.73-2.45 38.84-2.47l.28-.04l.26.11c.02.01 1.76.72 5.98 1.7c4.34 1.01 8.31 2.04 8.35 2.05l-.5 1.94c-.04-.01-3.98-1.03-8.3-2.04c-3.5-.82-5.36-1.45-6.02-1.7c-1.92.28-14.03 1.92-38.85 2.45c-25.01.54-36.37-1.47-38.34-1.86c-.95.36-4.12 1.51-7.14 2.27c-3.5.87-6.82 1.31-6.96 1.33z" fill="#b7cbd3"/><path d="M116.93 96.78s-5.26-2.34-8.48-3.8a24.216 24.216 0 0 1-4.69-2.81l-.64.55l-.34.02c-.14.01-14.17.74-38.29 1.17c-22.53.4-37.41-.7-39.43-.86l-12.78 5.03l-.73-1.86l13.21-5.2l.24.01c.15.01 15.42 1.31 39.46.87c22.02-.39 35.6-1.04 37.88-1.15l1.44-1.23l.65.6c.02.02 1.84 1.67 4.85 3.04c3.21 1.46 8.46 3.79 8.46 3.79l-.81 1.83z" fill="#b7cbd3"/><path d="M70.2 35.57c-2.1 0-4.3-.01-6.6-.03c-35.84-.29-46.56-1.31-46.66-1.32l.2-1.99c.1.01 10.78 1.02 46.48 1.31c35.61.29 47.58-1.86 47.7-1.88l.37 1.97c-.46.09-10.75 1.94-41.49 1.94z" fill="#b7cbd3"/><path d="M70.8 40.38c-2.22 0-4.56 0-7.05-.01c-36.63-.15-42.75-1.44-42.99-1.49l.43-1.95c.25.05 6.46 1.29 42.57 1.44c36.24.14 43.14-.85 43.2-.86l.31 1.98c-.25.02-6.05.89-36.47.89z" fill="#b7cbd3"/><path d="M104.52 96.46l.37-50.94l11.58-12.58l-2.62-4.36L100.9 42.9l-74.47-.75l-14.44-15.67l-3.74 3.49l15.5 16.12l.19 51.75l-11.58 4.61l-.37 5.48l14.7-6.1l76.84-.75l12.7 6.48l-.12-4.86l-11.59-6.24zm-3.86-.62c-.62.37-72.23.75-72.6.5S27 47.96 27.81 47.15c.62-.62 71.73-.25 73.1.37c.68.31.51 10.98.37 22.79c-.16 12.11-.31 25.34-.62 25.53z" fill="#9a9a9a"/><path d="M5.93 105.72l3.01 3.25s.9-.01 2.11-.25c1.24-.24 2.08-.86 2.3-1.74c.31-1.24-.33-72.02-.33-72.02c.09-1.61-.09-3.32 2.15-3.41c2.24-.09 95.96-.09 97.03-.09s2.69.36 2.69 2.78s-.45 71.83-.36 72.46c.09.63.69 1.5 2.44 1.87c1.85.39 4.2.11 4.2.11l1.25-11.04l-1.39-71.55L9.19 25.04l-3.92 6.19l.66 74.49z" fill="#df0a2b"/><path d="M5.62 24.69c-2.24 2.99-1.7 6.14-1.7 15.02s-.13 64.25 0 65.82c.13 1.57.33 2.62 2.25 3.17c1.39.39 2.75.27 2.75.27s.22-76.83.22-78.01s-.26-3.26 1.96-3.53s103.04.26 104.21.13s3.13 1.04 3.13 2.48s.76 78.74.76 78.74s3.57.26 4.33-1.3c.77-1.57.52-77.31.26-79.4s-1.96-4.57-5.35-5.35s-105.64-.79-107.46-.66s-4.18 1.05-5.36 2.62z" fill="#ff180a"/></svg>
        GOL
      </button>
      <button class='button' onClick="(() => {
        document.querySelector('#visitor_tiros').textContent = Number(document.querySelector('#visitor_tiros').textContent) + 1
      })()">
        <svg width="50px" height="50px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.002 512.002" style="enable-background:new 0 0 512.002 512.002;" xml:space="preserve"><g><path d="M505.317,50.234c4.404-7.865,5.48-16.975,3.032-25.649c-2.449-8.672-8.129-15.874-15.99-20.273    C487.327,1.49,481.634,0,475.893,0c-12.213,0-23.503,6.617-29.473,17.286l-101.478,182.04L243.907,380.567    c-4.736,2.591-26.153,6.597-78.648,5.164c-38.713-1.056-74.277-4.665-82.69-7.303c-7.174-3.135-14.79-4.742-22.647-4.78h-0.271    c-15.201,0-29.509,5.886-40.314,16.593c-10.87,10.769-16.895,25.13-16.965,40.434c-0.092,20.06,10.517,38.937,27.704,49.323    c1.244,0.821,2.689,1.61,4.405,2.408c3.989,1.955,8.22,3.442,12.585,4.424c23.699,6.548,66.059,10.311,107.414,10.311    c16.801,0,33.419-0.629,48.566-1.937c9.885,10.338,23.795,16.797,39.193,16.797h119.05c29.917,0,54.256-24.338,54.256-54.256    c0-29.917-24.338-54.256-54.256-54.256h-52.897l95.457-171.233L505.317,50.234z M361.29,421.566    c19.949,0,36.179,16.23,36.179,36.179c0,19.949-16.23,36.179-36.179,36.179H242.24c-19.949,0-36.179-16.23-36.179-36.179    s16.23-36.179,36.179-36.179H361.29z M287.7,403.489h-45.46c-29.917,0-54.256,24.338-54.256,54.256    c0,7.127,1.394,13.93,3.903,20.171c-48.864,3.125-111.177-0.482-140.206-8.565c-0.159-0.045-0.321-0.084-0.482-0.122    c-3.071-0.676-6.043-1.715-8.831-3.09c-0.067-0.033-0.135-0.065-0.202-0.096c-1.257-0.581-1.913-0.983-2.191-1.173    c-0.136-0.092-0.276-0.181-0.416-0.265c-11.851-7.097-19.174-20.066-19.11-33.849c0.048-10.474,4.172-20.303,11.612-27.675    c7.396-7.327,17.188-11.356,27.591-11.356h0.184c5.491,0.026,10.807,1.171,15.802,3.403c0.253,0.113,0.512,0.215,0.775,0.304    c12.353,4.206,56.005,7.594,91.07,8.439c78.809,1.902,87.204-7.873,90.361-11.553c0.394-0.459,0.741-0.956,1.035-1.485    l97.443-174.8l27.344,15.303L287.7,403.489z M365.125,200.245L462.202,26.1c2.769-4.948,8.016-8.023,13.691-8.023    c2.653,0,5.291,0.692,7.632,2.005c3.652,2.043,6.288,5.387,7.425,9.413s0.638,8.255-1.415,11.923l-97.068,174.128L365.125,200.245z"/></g></svg>
        TIRO
      </button>
    </div>
  </div>`
  console.log(local, visitor, visitorPlayers, localPlayers)
}

async function genData (select) {
  let req = await fetch('https://api.cplv-tv.tk/match')
  const matches = await req.json()
  let match = matches.filter((m) => m.idp === select)
  match = match[0]
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

// eslint-disable-next-line no-unused-vars
function goal (team) {
  runningTime = false
  const panel = document.querySelector('.modal-panel')
  panel.style.display = ''
  let string = '<div class="goal"><span class="title">GOL</span>'
  if (team === 'local') {
    localPlayers.forEach((p) => {
      string += `<div class='player'>
      <img src=${p.img} />
      <span>${p.name}</span>
      </div>`
    })
  } else if (team === 'visitor') {
    visitorPlayers.forEach((p) => {
      string += `<div class='player'>
      <img src=${p.img} />
      <span>${p.name}</span>
      </div>`
    })
  }
  string += '<div class="down"><div class="fields"><div><span>SCORER:<input id="scorer" /></span></div><div>ASSISTS:<input id="assist" /></div></div>'
  string += '<div class="buttons"><button class="close" onClick="closeModal()">CLOSE</button><button class="save" onClick="saveModal(`goal`,`' + team + '`)">SAVE</button></div></div>'
  string += '</div>'
  panel.innerHTML = string
  let i = 0
  document.querySelectorAll('.player').forEach((player) => {
    player.addEventListener('click', () => {
      if (i === 0) {
        document.querySelectorAll('.bg-scorer').forEach((x) => {
          x.classList.toggle('bg-scorer')
        })
        player.classList.toggle('bg-scorer')
        i += 1
        document.querySelector('#scorer').value = player.querySelector('span').textContent
      } else if (i === 1) {
        document.querySelectorAll('.bg-assist').forEach((x) => {
          x.classList.toggle('bg-assist')
        })
        player.classList.toggle('bg-assist')
        i = 0
        document.querySelector('#assist').value = player.querySelector('span').textContent
      }
    })
  })
}

// eslint-disable-next-line no-unused-vars
function closeModal () {
  const panel = document.querySelector('.modal-panel')
  panel.style.display = 'none'
}

// eslint-disable-next-line no-unused-vars
function saveModal (type, team) {
  if (type === 'goal') {
    document.querySelector(`#${team}_result`).textContent = Number(document.querySelector(`#${team}_result`).textContent) + 1
  } else if (type === 'period') {
    document.querySelector('#period').textContent = team
    periodTimeHandler()
  }
  closeModal()
}

// eslint-disable-next-line no-unused-vars
function saque (team) {
  possesion = team
  document.querySelector(`#${team}_saques`).textContent = Number(document.querySelector(`#${team}_saques`).textContent) + 1
}

// eslint-disable-next-line no-unused-vars
function period () {
  let periodStore = document.querySelector('#period').textContent
  const panel = document.querySelector('.modal-panel')
  panel.style.display = ''
  let string = '<div class="period" style="width:50%"><span class="title">PERIODS</span>'
  string += '<div class="period-container" style="margin:20px 0;">'
  periods.forEach((p) => {
    string += `<div class="periods"><span>${p}</span></div>`
  })
  string += '</div>'
  string += '<div class="down" style="align-items:center;justify-content:center;"><div class="buttons"><button class="close" onClick="closeModal()">CLOSE</button><button class="save">SAVE</button></div></div>'
  string += '</div>'
  panel.innerHTML = string
  document.querySelectorAll('.periods').forEach((period) => {
    period.addEventListener('click', () => {
      periodStore = period.querySelector('span').textContent.trim()
    })
  })
  document.querySelector('.save').addEventListener('click', () => {
    saveModal('period', periodStore)
  })
}
// eslint-disable-next-line no-unused-vars
function fault (team) {
  runningTime = false
  const panel = document.querySelector('.modal-panel')
  panel.style.display = ''
  let string = '<div class="fault"><span class="title">FALTA</span>'
  if (team === 'local') {
    localPlayers.forEach((p) => {
      string += `<div class='player'>
      <img src=${p.img} />
      <span>${p.name}</span>
      </div>`
    })
  } else if (team === 'visitor') {
    visitorPlayers.forEach((p) => {
      string += `<div class='player'>
      <img src=${p.img} />
      <span>${p.name}</span>
      </div>`
    })
  }
  string += '<div class="fault-container">'
  faults.forEach((fault) => {
    string += `<div class="faults"><span>${fault}</span></div>`
  })
  string += '</div>'
  string += '<div class="down"><div class="fields"><div><span>PLAYER:<input id="fault" /></span></div><div>TIPO:<input id="type" /></div></div>'
  string += '<div class="buttons"><button class="close" onClick="closeModal()">CLOSE</button><button class="save" onClick="saveModal(`fault`,`' + team + '`)">SAVE</button></div></div>'
  string += '</div>'
  panel.innerHTML = string

  document.querySelectorAll('.faults').forEach((fault) => {
    fault.addEventListener('click', () => {
      document.querySelector('#type').value = fault.querySelector('span').textContent
    })
  })

  document.querySelectorAll('.player').forEach((player) => {
    player.addEventListener('click', () => {
      document.querySelectorAll('.bg-scorer').forEach((x) => {
        x.classList.toggle('bg-scorer')
      })
      player.classList.toggle('bg-scorer')
      document.querySelector('#fault').value = player.querySelector('span').textContent
    })
  })
}

function autoPeriod () {
  const period = document.querySelector('#period').textContent
  document.querySelector('#period').textContent = periods[periods.indexOf(period) + 1]
  periodTimeHandler()
}

function periodTimeHandler () {
  const period = document.querySelector('#period').textContent
  console.log(period, period === 'OT')
  if (period === '1st' || period === '2nd') {
    document.querySelector('#time').value = periodTime
    document.querySelector('#timeContainer').textContent = periodTime
  }
  if (period === 'OT') {
    document.querySelector('#time').value = '05:00'
    document.querySelector('#timeContainer').textContent = '05:00'
  }
}
