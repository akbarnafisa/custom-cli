import {ParsedTyped} from '../../../src/fetcher/games'

async function allGames(): Promise<ParsedTyped[]> {
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
}
