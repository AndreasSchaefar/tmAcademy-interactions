export default function Character(name, height, gender, birthYear) {
  const article = document.createElement('article');
  const h3 = document.createElement('h3');
  const heightPara = document.createElement('p');
  const genderPara = document.createElement('p');
  const birthYearPara = document.createElement('p');

  h3.className = 'character__name';
  h3.textContent = name;
  heightPara.className = 'character__name';
  heightPara.textContent = `Height: ${height}`;
  genderPara.className = 'character__gender';
  genderPara.textContent = `Gender: ${gender}`;
  birthYearPara.className = 'character__birth-year';
  birthYearPara.textContent = `Birth year: ${birthYear}`;

  article.className = 'character';
  article.append(h3, heightPara, genderPara, birthYearPara);
  return article;
}
