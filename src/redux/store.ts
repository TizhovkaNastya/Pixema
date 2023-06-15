import { createStore, combineReducers, applyMiddleware } from 'redux';
import { userReducer } from './reducers/user_reduser';
import createSagaMiddleware from 'redux-saga'
import { watcherUser } from './action-creators/user_action_creators';
import { all } from 'redux-saga/effects';
import { watcherMovie } from './action-creators/movie_action_creators';
import { moviesReducer } from './reducers/movie_reduser';


const sagaMiddleware = createSagaMiddleware();
function* rootSaga(){
  yield all([
    watcherUser(),
    watcherMovie()
  ])
}

const store =  createStore(combineReducers({ user: userReducer, movies: moviesReducer }), applyMiddleware(sagaMiddleware));

function handleStoreChange() {
    const state = store.getState();
    localStorage.setItem('localState', JSON.stringify(state));
  
  }
  
 store.subscribe(handleStoreChange)
  

export default store

sagaMiddleware.run(rootSaga);