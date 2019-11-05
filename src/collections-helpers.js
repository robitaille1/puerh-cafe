
export const countTeasForCollection = (teas=[], collectionId) =>
  teas.filter(tea => tea.collectionId === collectionId).length
