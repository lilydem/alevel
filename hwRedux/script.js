const initialState = {
  kiosk: {
    beer: { name: "Пиво", price: 100, quantity: 50 },
    chips: { name: "Чіпси", price: 50, quantity: 100 },
    chocolate: { name: "Шоколад", price: 70, quantity: 80 },
  },
  cash: 10000,
};

function kioskReducer(state = initialState, action) {
  switch (action.type) {
    case "BUY_ITEM":
      const { item, quantity, cost } = action.payload;
      const currentQuantity = state.kiosk[item].quantity;
      const currentCash = state.cash;

      if (currentQuantity >= quantity && currentCash >= cost) {
        return {
          ...state,
          kiosk: {
            ...state.kiosk,
            [item]: {
              ...state.kiosk[item],
              quantity: currentQuantity - quantity,
            },
          },
          cash: currentCash - cost,
        };
      } else {
        return state;
      }

    default:
      return state;
  }
}

const store = {
  state: initialState,
  dispatch(action) {
    this.state = kioskReducer(this.state, action);
    this.listeners.forEach((listener) => listener());
  },
  listeners: [],
  subscribe(listener) {
    this.listeners.push(listener);
  },
  getState() {
    return this.state;
  },
};

function updateDOM() {
  const kiosk = store.getState().kiosk;
  const cash = store.getState().cash;

  const itemsContainer = document.getElementById("items-container");
  itemsContainer.innerHTML = "";
  for (const item in kiosk) {
    const itemDiv = document.createElement("div");
    itemDiv.innerHTML = `
        <p>${kiosk[item].name}</p>
        <p>Кількість: ${kiosk[item].quantity}</p>
        <p>Ціна: ${kiosk[item].price} грн</p>
        <label for="${item}-quantity">Кількість:</label>
        <input type="number" id="${item}-quantity" min="1" max="${kiosk[item].quantity}">
        <button onclick="handleBuy('${item}')">Купити</button>
      `;
    itemsContainer.appendChild(itemDiv);
  }

  document.getElementById("money-input").value = cash;

  document.title = `Каса: ${cash} грн`;
}

store.subscribe(updateDOM);

function handleBuy(item) {
  const quantity = parseInt(
    document.getElementById(`${item}-quantity`).value,
    10
  );
  const cost = quantity * store.getState().kiosk[item].price;

  store.dispatch({
    type: "BUY_ITEM",
    payload: {
      item,
      quantity,
      cost,
    },
  });
}

document.addEventListener('DOMContentLoaded', () => {

updateDOM();});
