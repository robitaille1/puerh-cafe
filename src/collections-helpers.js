export const countTeasForCollection = (teas=[], collectionId) =>
  teas.filter(tea => tea.collectionid === collectionId).length

  export const getTeasForCollection = (teas=[], collectionId) => (
    (!collectionId)
      ? teas
      // eslint-disable-next-line
      : teas.filter(tea => tea.collectionid == collectionId)
  )

  export const getCollection = (collections=[], collectionId) =>
  // eslint-disable-next-line
    collections.filter(collection => collection.id == collectionId)

  export const getTea = (teas=[], teaId) =>
// eslint-disable-next-line
  teas.filter(tea => tea.id == teaId)

  export const getSession = (sessions=[], sessionId) =>
// eslint-disable-next-line
  sessions.filter(session => session.id == sessionId)

  export const getSessionsForTea = (sessions=[], teaId) => (
    (!teaId)
      ? sessions
      // eslint-disable-next-line
      : sessions.filter(session => session.teaid == teaId)
  )

  export const findTeaId = (teas=[], teaName) =>
// eslint-disable-next-line
  teas.find(tea => tea.name == teaName)

  export const findCollectionId = (collections=[], collectionName) =>
// eslint-disable-next-line
  collections.find(collection => collection.name == collectionName)