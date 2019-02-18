import Honk from '@honkjs/honk';
import injector from '@honkjs/injector';
import { createStore } from '@honkjs/store';
import { coolApiAction } from './api';

const initialState = {
  count: 0,
};

const store = createStore(initialState);

const honk = new Honk()
  .use(injector())
  .use((app, next) => {
    app.services.store = store;
    app.services.url = 'http://localhost:5000';
    return next;
  });

function increase(amount: number) {
  return ({ store, url }) => {
    coolApiAction(url).then(() => {
      store.setState((state) => {
        state.count += amount;
        return state;
      });
    });
  };
}

const unsub = store.subscribe(() => console.log('HONK', store.getState()));

honk.honk(increase(1));

honk.honk(increase(5));

// unsub();
