const textReducer = (state, action) => {
  switch (action.type) {
      case 'ADD_TEXT':
          return {
              ...state,
              texts: [...state.texts, action.payload],
          };
      case 'REMOVE_TEXT':
          return {
              ...state,
              texts: state.texts.filter((_, index) => index !== action.payload),
          };
      default:
          return state;
  }
};

export default textReducer;
