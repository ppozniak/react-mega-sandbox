export const loadState = (state) => {
  try {
    const serializedData = localStorage.getItem('state');
    return serializedData !== null ? JSON.parse(serializedData) : undefined; 
  } catch(err) {
    console.warning('Error when loading state:', err);
    return undefined;
  }
}

export const saveState = (state) => {
  try {
    const serializedData = JSON.stringify(state);
    localStorage.setItem('state', serializedData);
  } catch(err) {
    console.warning('Error when saving state:', err);
  }
}