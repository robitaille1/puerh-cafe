import React from 'react'

export default React.createContext({
  collections: [],
  teas: [],
  sessions: [],
  addCollection: () => {},
  addTea: () => {},
  addSession: () => {},
  deleteCollection: () => {},
  deleteTea: () => {},
  deleteSession: () => {},
  updateTea: () => {},
  updateSession: () => {}
})