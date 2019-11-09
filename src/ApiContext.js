import React from 'react'

export default React.createContext({
  collections: [],
  teas: [],
  Sessions: [],
  addCollection: () => {},
  addTea: () => {},
  addSession: () => {},
  deleteCollection: () => {},
  deleteTea: () => {},
  deleteSession: () => {},
  updateTea: () => {},
  updateSession: () => {}
})