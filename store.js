import { useMemo } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import ProductReducers from './redux/reducers/index'

let store

const initialState = {
    productList: [
        { id: 1, title: "Iphone"},
        { id: 2, title: "Ipad"},
        { id: 3, title: "Ipod"}
      ],
}

function initStore(preloadedState = initialState) {
    return createStore(
        ProductReducers,
        preloadedState,
        composeWithDevTools(applyMiddleware())
    )
  }

  export const initializeStore = (preloadedState) => {
    let _store = initStore(preloadedState)
    if (preloadedState && store) {
      _store = initStore({
        ...store.getState(),
        ...preloadedState,
      })
      store = undefined
    }
  
    if (typeof window === 'undefined') return _store
    if (!store) store = _store
    return _store
  }
  
  export function useStore(initialState) {
    const store = useMemo(() => initializeStore(initialState), [initialState])
    return store
  }