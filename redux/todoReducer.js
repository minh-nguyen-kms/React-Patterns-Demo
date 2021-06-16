import { useReducer } from 'react';

const initialState = {
  items: [],
};

const reducer = (
  state,
  { type, payload },
) => {
  switch (type) {
    case 'addItem':
      return {
        ...state,
        items: [...state.items, payload],
      };

    default:
      throw new Error('unhandle action');
  }
};

const buildDispatchers = (dispatch) => ({
  addItem: (payload) =>
    dispatch({
      type: 'addItem',
      payload,
    }),
});

function useToDoReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const dispatchers = buildDispatchers(dispatch);

  return [state, dispatchers];
}

export { useToDoReducer };
