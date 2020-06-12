export const AuthReducer = (state = [], action) => {
    switch (action.type) {
      case 'TOGGLE_AUTH':
        return !state;
      case 'INIT':
        console.log(state)
        return state;
      default:
        return state;
    }
  }