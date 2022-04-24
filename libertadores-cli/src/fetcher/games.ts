import {launch} from 'puppeteer'

export type ParsedTyped = {
  isHeader: boolean
  date?: string | null
  round?: string | null
  teamOne?: string | null
  teamOneResult?: string | null
  teamTwo?: string | null
  teamTwoResult?: string | null
  gameSite?: string | null
}

const fetchDataFromConmebol = async () => {
  const browser = await launch()
  const page = await browser.newPage()

  await page.goto('http://www.conmebol.com/es/copa-libertadores-2019/fixture', {
    waitUntil: 'load',
    timeout: 60_000,
  })

  await page.waitForSelector('.Opta-fixtures-list li table tbody')

  const parsedGames = await page.evaluate(() => {
    const elements = [...document.querySelectorAll('.Opta-fixtures-list li table tbody')]

    return elements.map(element => {
      const isHeader = element.className === ''
      const parsed: ParsedTyped = {
        isHeader,
      }

      if (isHeader) {
        const headerElements = element.querySelectorAll('span')

        parsed.date = headerElements[0].textContent
        parsed.round = headerElements[1].textContent
      } else {
        const matchElements = element.querySelectorAll('td')

        parsed.teamOne = matchElements[1].textContent
        parsed.teamOneResult = matchElements[3]?.textContent?.trim()

        parsed.teamTwo = matchElements[7].textContent
        parsed.teamTwoResult = matchElements[5]?.textContent?.trim()

        if (
          parsed.teamOneResult?.length &&
          parsed.teamTwoResult?.length &&
          matchElements[10].children[0] instanceof HTMLAnchorElement
        ) {
          parsed.gameSite = matchElements[10].children[0].href
        }
      }

      return parsed
    })
  })

  await browser.close()

  return parsedGames
}

const allGames = async (): Promise<ParsedTyped[]>  => fetchDataFromConmebol()

const mockAllGames = async (): Promise<ParsedTyped[]> => {
  return Promise.resolve([
    {
      isHeader: true,
      date: 'jueves 18 de abril',
      round: 'Ronda 4',
    },
    {
      isHeader: false,
      teamOne: 'Team1',
      teamOneResult: '1',
      teamTwo: 'Team2',
      teamTwoResult: '3',
      gameSite: 'https://www.example1.com',
    },
    {
      isHeader: true,
      date: 'jueves 25 de abril',
      round: 'Ronda 5',
    },
    {
      isHeader: false,
      teamOne: 'Team3',
      teamOneResult: '2',
      teamTwo: 'Team4',
      teamTwoResult: '4',
      gameSite: 'https://www.example2.com',
    },
    {
      isHeader: false,
      teamOne: 'Team4',
      teamOneResult: '',
      teamTwo: 'Team5',
      teamTwoResult: '',
    },
  ])
}

export {
  allGames,
  mockAllGames,
}
