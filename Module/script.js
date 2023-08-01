function createStore(reducer) {
  let state = reducer(undefined, {}); //стартова ініціалізація стану, запуск редьюсера зі state === undefined
  let cbs = []; //масив передплатників

  const getState = () => state; //функція, що повертає змінну із замикання
  const subscribe = (cb) => (
    cbs.push(cb), //запам'ятовуємо передплатників у масиві
    () => (cbs = cbs.filter((c) => c !== cb))
  ); //повертаємо функцію unsubscribe, яка видаляє передплатника зі списку

  const dispatch = (action) => {
    if (typeof action === "function") {
      //якщо action – не об'єкт, а функція
      return action(dispatch, getState); //запускаємо цю функцію і даємо їй dispatch і getState для роботи
    }
    const newState = reducer(state, action); //пробуємо запустити редьюсер
    if (newState !== state) {
      //перевіряємо, чи зміг ред'юсер обробити action
      state = newState; //якщо зміг, то оновлюємо state
      for (let cb of cbs) cb(); //та запускаємо передплатників
    }
  };

  return {
    getState, //додавання функції getState в результуючий об'єкт
    dispatch,
    subscribe, //додавання subscribe в об'єкт
  };
}

function promiseReducer(
  state = {},
  { type, status, payload, error, promiseName }
) {
  if (type === "PROMISE") {
    return {
      ...state,
      [promiseName]: { status, payload, error },
    };
  }
  return state;
}

function actionPending(promiseName) {
  return {
    type: "PROMISE",
    status: "PENDING",
    promiseName,
  };
}

function actionFulfilled(promiseName, payload) {
  return {
    type: "PROMISE",
    status: "FULFILLED",
    payload,
    promiseName,
  };
}

function actionRejected(promiseName, error) {
  return {
    type: "PROMISE",
    status: "REJECTED",
    error,
    promiseName,
  };
}

function actionPromise(promiseName, promise) {
  return async (dispatch) => {
    dispatch(actionPending(promiseName));

    try {
      const payload = await promise;
      dispatch(actionFulfilled(promiseName, payload));
      return payload;
    } catch (error) {
      dispatch(actionRejected(promiseName, error));
      throw error;
    }
  };
}

// const store = createStore(promiseReducer)

// store.subscribe(() => console.log(store.getState()))

// store.dispatch(actionPromise('luke', fetch("https://swapi.dev/api/people/1").then(res => res.json())))
// store.dispatch(actionPromise('tatooine', fetch("https://swapi.dev/api/planets/1").then(res => res.json())))

function authReducer(state = {}, action) {
  switch (action.type) {
    case "AUTH_LOGIN":
      try {
        const { token } = action;
        const payload = parseJwt(token);
        return { token, payload };
      } catch (error) {
        return {};
      }
    case "AUTH_LOGOUT":
      return {};
    default:
      return state;
  }
}

function parseJwt(token) {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const decodedToken = JSON.parse(atob(base64));
  return decodedToken;
}

//   const actionAuthLogin  = token => ({type: 'AUTH_LOGIN', token})
//   const actionAuthLogout = ()    => ({type: 'AUTH_LOGOUT'})

//   const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOiI2Mzc3ZTEzM2I3NGUxZjVmMmVjMWMxMjUiLCJsb2dpbiI6InRlc3Q1IiwiYWNsIjpbIjYzNzdlMTMzYjc0ZTFmNWYyZWMxYzEyNSIsInVzZXIiXX0sImlhdCI6MTY2ODgxMjQ1OH0.t1eQlRwkcP7v9JxUPMo3dcGKprH-uy8ujukNI7xE3A0"

//   const store = createStore(authReducer)
//   store.subscribe(() => console.log(store.getState()))

//   store.dispatch(actionAuthLogin(token))
//   /*{
//       token: "eyJhbGc.....",
//       payload: {
//         "sub": {
//           "id": "6377e133b74e1f5f2ec1c125",
//           "login": "test5",
//           "acl": [
//             "6377e133b74e1f5f2ec1c125",
//             "user"
//           ]
//         },
//         "iat": 1668812458
//       }
//   }*/
//   store.dispatch(actionAuthLogout()) // {}

function cartReducer(state = {}, action) {
  switch (action.type) {
    case "CART_ADD":
      const { _id, price } = action.good;
      const count = action.count;
      return {
        ...state,
        [_id]: {
          good: { _id, price },
          count: (_id in state ? state[_id].count : 0) + count,
        },
      };
    case "CART_SUB":
      const { [action.good._id]: deletedItem, ...updatedState } = state;
      const updatedCount = (deletedItem?.count || 0) - action.count;
      return updatedCount > 0
        ? {
            ...updatedState,
            [action.good._id]: { count: updatedCount, good: action.good },
          }
        : updatedState;
    case "CART_DEL":
      const { [action.good._id]: deletedItem2, ...updatedState2 } = state;
      return updatedState2;
    case "CART_SET":
      return {
        ...state,
        [action.good._id]: { count: action.count, good: action.good },
      };
    case "CART_CLEAR":
      return {};
    default:
      return state;
  }
}

const actionCartAdd = (good, count = 1) => ({ type: "CART_ADD", count, good });
const actionCartSub = (good, count = 1) => ({ type: "CART_SUB", count, good });
const actionCartDel = (good) => ({ type: "CART_DEL", good });
const actionCartSet = (good, count = 1) => ({ type: "CART_SET", count, good });
const actionCartClear = () => ({ type: "CART_CLEAR" });

const good1 = { _id: "1", name: "Product 1", price: 10 };
const good2 = { _id: "2", name: "Product 2", price: 15 };

// const store = createStore(cartReducer);

// store.subscribe(() => console.log(store.getState()));

// console.log(store.getState()); // {}

// store.dispatch(actionCartAdd({ _id: 'пиво', price: 50 }));
// // {пиво: {good: {_id: 'пиво', price: 50}, count: 1}}
// store.dispatch(actionCartAdd({ _id: 'чіпси', price: 75 }));
// // {
// //   пиво: {good: {_id: 'пиво', price: 50}, count: 1},
// //   чіпси: {good: {_id: 'чіпси', price: 75}, count: 1},
// // }
// store.dispatch(actionCartAdd({ _id: 'пиво', price: 50 }, 5));
// // {
// //   пиво: {good: {_id: 'пиво', price: 50}, count: 6},
// //   чіпси: {good: {_id: 'чіпси', price: 75}, count: 1},
// // }
// store.dispatch(actionCartSet({ _id: 'чіпси', price: 75 }, 2));
// // {
// //   пиво: {good: {_id: 'пиво', price: 50}, count: 6},
// //   чіпси: {good: {_id: 'чіпси', price: 75}, count: 2},
// // }

// store.dispatch(actionCartSub({ _id: 'пиво', price: 50 }, 4));
// // {
// //   пиво: {good: {_id: 'пиво', price: 50}, count: 2},
// //   чіпси: {good: {_id: 'чіпси', price: 75}, count: 2},
// // }

// store.dispatch(actionCartDel({ _id: 'чіпси', price: 75 }));
// // {
// //   пиво: {good: {_id: 'пиво', price: 50}, count: 2},
// // }

// store.dispatch(actionCartClear()); // {}

const gqlRootCats = () =>
  gql(`
    query roots {
      CategoryFind(query: { parent: null }) {
        _id
        name
      }
    }
  `);

const gqlCategoryWithGoodsAndImages = (categoryId) =>
  gql(`
    query categoryWithGoods($categoryId: MongoID!) {
      CategoryFindOne(query: { _id: $categoryId }) {
        _id
        name
        goods {
          _id
          name
        }
        images {
          _id
          url
        }
        subcategories {
          _id
          name
        }
      }
    }
  `);

const gqlGoodWithDescriptionAndImages = (goodId) =>
  gql(`
    query goodWithDescription($goodId: MongoID!) {
      GoodFindOne(query: { _id: $goodId }) {
        _id
        name
        description
        images {
          _id
          url
        }
      }
    }
  `);

const gqlRegisterUser = (login, password) =>
  gql(`
    mutation registerUser($login: String!, $password: String!) {
      UserUpsert(record: { login: $login, password: $password }) {
        record {
          _id
          login
        }
      }
    }
  `);

const gqlLoginUser = (login, password) =>
  gql(`
    query loginUser($login: String!, $password: String!) {
      login(login: $login, password: $password)
    }
  `);

const gqlOrderHistory = () =>
  gql(`
    query orderHistory {
      OrderFind {
        _id
        name
      }
    }
  `);

const gqlPlaceOrder = (orderGoods) =>
  gql(`
    mutation placeOrder($orderGoods: [OrderGoodsInput!]!) {
      OrderUpsert(record: { orderGoods: $orderGoods }) {
        record {
          _id
        }
      }
    }
  `);

const actionFullOrder = () => async (dispatch, getState) => {
  const cartState = getState().cart;

  const orderGoods = Object.keys(cartState).map((goodId) => ({
    good: { _id: goodId },
    count: cartState[goodId].count,
  }));

  try {
    const response = await actionPromise(
      "placeOrder",
      gqlPlaceOrder(orderGoods)
    );

    dispatch(actionCartClear());
  } catch (error) {
    console.error("Error placing order:", error.message);
  }
};

const getGQL =
  (url) =>
  (query, variables = {}, getState) => {
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getState().auth?.token || ""}`,
      },
      body: JSON.stringify({ query, variables }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data.errors) {
          throw new Error(data.errors);
        }
        return data.data[Object.keys(data.data)[0]];
      })
      .catch((error) => {
        throw new Error(`GraphQL request failed: ${error.message}`);
      });
  };

const gql = getGQL("https://your-graphql-server-url");

const actionRootCats = () =>
  actionPromise("rootCats", gql(`query roots { ... }`, {}, getState));

function localStoredReducer(originalReducer, localStorageKey) {
  const isLocalStorageAvailable =
    typeof window !== "undefined" && window.localStorage;

  const initialState =
    isLocalStorageAvailable && localStorage.getItem(localStorageKey)
      ? JSON.parse(localStorage.getItem(localStorageKey))
      : {};

  function wrapper(state = initialState, action) {
    const nextState = originalReducer(state, action);

    if (isLocalStorageAvailable) {
      localStorage.setItem(localStorageKey, JSON.stringify(nextState));
    }

    return nextState;
  }

  return wrapper;
}

const decoratedCartReducer = localStoredReducer(cartReducer, 'cart');
const store = createStore(decoratedCartReducer);

store.subscribe(() => console.log(store.getState()));

store.dispatch(actionCartAdd({ _id: 'пиво', price: 50 }));
store.dispatch(actionCartAdd({ _id: 'чіпси', price: 75 }));

