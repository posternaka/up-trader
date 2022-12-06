import { createStore } from 'redux';
import { reducers } from './reducers/index';

const store = createStore(reducers);

const localStorageListener = () => {
    const currentState = store.getState();
    localStorage.setItem('value', JSON.stringify(currentState.value));
    localStorage.setItem('index', JSON.stringify(currentState.index));
}

store.subscribe(localStorageListener);

export default store;

