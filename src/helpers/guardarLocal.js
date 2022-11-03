export const guardarLocalStorage = (clave, newPeli) => {
  const data = JSON.parse(localStorage.getItem(clave));
  if (Array.isArray(data)) {
    data.push(newPeli);
    localStorage.setItem(clave, JSON.stringify(data));
  } else {
    localStorage.setItem(clave, JSON.stringify([newPeli]));
  }

  return newPeli;
};

export const getData = () => {
  const data = JSON.parse(localStorage.getItem("peliculas"));
  if (Array.isArray(data)) {
    return data;
  }

  return [];
};
