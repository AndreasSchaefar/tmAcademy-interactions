import FetchAPI from './fetchAPI';

class StarWarsApi extends FetchAPI {
  constructor(url) {
    super(url);
    this.films = 'films/';
  }

  async fetchFilms() {
    const films = await this.fetch(this.url + this.films);
    const [response, error] = films;
    if (!error) {
      const { results } = await response;
      return results;
    }
    return error;
  }

  fetchCharacters = async (filmUrl) => {
    const film = await this.fetch(filmUrl);
    const [response, error] = film;
    if (error) {
      return [null, new Error('something went terribly wrong')];
    }
    const { characters } = response;
    const fetchedCharacters = await this.fetchAll(characters);
    return [fetchedCharacters, null];
  };
}

export default new StarWarsApi('https://swapi.py4e.com/api/');
