import { applyMiddleware } from 'redux';

import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';



export default (history, reduxSagaMonitorOptions) => {

    const sagaMiddleware = createSagaMiddleware();

    // Create the store with two middlewares
    // 1. sagaMiddleware: Makes redux-sagas work
    // 2. routerMiddleware: Syncs the location/URL path to the state
    const middlewares = [sagaMiddleware, routerMiddleware(history)];

    const enhancers = [applyMiddleware(...middlewares)];

    return {
        sagaMiddleware,
        enhancers
    }
}
