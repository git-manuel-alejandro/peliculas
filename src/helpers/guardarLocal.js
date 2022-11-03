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
