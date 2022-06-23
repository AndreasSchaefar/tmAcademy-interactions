function FilmsContainer() {
  const article = document.createElement('article');
  const h1 = document.createElement('h1');
  const ul = document.createElement('ul');
  article.className = 'star-wars';
  h1.textContent = 'Star Wars Films';
  ul.className = 'star-wars__films';
  article.append(h1, ul);
  return article;
}

function Film(title, director, releaseDate, url) {
  const article = document.createElement('article');
  const h2 = document.createElement('h2');
  const directorP = document.createElement('p');
  const releaseDateP = document.createElement('p');
  const section = document.createElement('section');
  const div = document.createElement('div');
  const button = document.createElement('button');
  const ul = document.createElement('ul');

  article.className = 'film';
  article.dataset.url = url;
  h2.textContent = title;
  h2.className = 'film__title';
  directorP.className = 'film__director';
  directorP.textContent = `Director: ${director}`;
  releaseDateP.className = 'film__release-date';
  releaseDateP.textContent = `Release Date: ${releaseDate}`;
  section.className = 'film__characters';
  div.className = 'dropdown';
  div.textContent = 'Characters';
  button.className = 'dropdown-toggle';
  button.textContent = 'toggle';
  ul.className = 'characters-list';

  section.append(div, button, ul);
  article.append(h2, directorP, releaseDateP, section);
  return article;
}

export { Film, FilmsContainer };
