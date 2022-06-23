import starWarsAPI from './api/starWarsAPI';

export default class Controller {
  constructor(view) {
    this.model = starWarsAPI;
    this.view = view;
    this.view.bindToggleCharactersList(this.hadleToggleCharactersList);
    this.onLoad();
  }

  async onLoad() {
    const films = await this.model.fetchFilms();
    this.view.displayFilms(films);
  }

  hadleToggleCharactersList = async (filmUrl) => {
    const characters = await this.model.fetchCharacters(filmUrl);
    return characters;
  };
}
