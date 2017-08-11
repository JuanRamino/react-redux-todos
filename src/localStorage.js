export const loadState = () => {
  // Può fallire se l'utente non da i permessi all'applicazione per leggere nel localStorage
  try {
    const serilizedState = localStorage.getItem('state');
    if (serilizedState === null) {
      return undefined;
    }
    return JSON.parse(serilizedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serilizedState = JSON.stringify(state);
    localStorage.setItem('state', serilizedState);
  } catch (err) {
    // Maybe log in application
  }
};
