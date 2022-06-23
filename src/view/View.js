/* eslint-disable object-curly-newline */
import Character from './characters';
import { FilmsContainer, Film } from './films';

export default class View {
  constructor(mount) {
    this.mount = typeof mount === 'string' ? document.querySelector(mount) : mount;
    this.films = FilmsContainer();
    this.filmsList = this.films.querySelector('.star-wars__films');
    this.mount.append(this.films);
  }

  displayFilms(films) {
    while (this.filmsList.firstChild) {
      this.filmsList.removeChild(this.filmsList.firstChild);
    }

    films.forEach((movie) => {
      // eslint-disable-next-line camelcase
      const { title, director, release_date, url } = movie;
      this.filmsList.append(Film(title, director, release_date, url));
    });
  }

  bindToggleCharactersList(handler) {
    this.filmsList.addEventListener('click', async (e) => {
      const { target } = e;
      if (target.className === 'dropdown-toggle') {
        const parentArticle = target.parentElement.closest('article');
        const characterList = parentArticle.querySelector('.characters-list');
        if (characterList.firstChild) {
          while (characterList.firstChild) {
            characterList.removeChild(characterList.firstChild);
          }
          return;
        }
        const filmUrl = parentArticle.getAttribute('data-url');
        const response = await handler(filmUrl);
        const [characters] = response;

        characters.forEach((r) => {
          const [character] = r;
          // eslint-disable-next-line camelcase
          const { name, height, birth_year, gender } = character;
          characterList.append(Character(name, height, gender, birth_year));
        });
      }
    });
  }
}
