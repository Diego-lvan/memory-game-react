export const isAlreadyFlipped = (id, remainig) => {
  if (remainig.filter((char) => char.id === id).length === 0) {
    return true;
  }
  return false;
};
