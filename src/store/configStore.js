import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducer/common/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";

const composeEnhancers = composeWithDevTools({});

const middlewares = [thunk];

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);

  middlewares.push();
}

function confiqureStore() {
  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares))
  );
}

export const store = confiqureStore();

function configurePersistStore() {
  return persistStore(store);
}

const persistor = configurePersistStore();

persistor.persist();

export { persistor };

// persistor.purge();
