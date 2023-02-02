export default function filterFilmsByDirector(list, director) {
  return director ? list.filter((film) => film.director === director) : list;
}

export function getListOf(list, prop) {
  return [...new Set(list.map(item => item[prop]))];
}