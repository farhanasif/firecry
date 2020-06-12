export const AuthReducer = (state = [], action) => {
    switch (action.type) {
      case 'TOGGLE_AUTH':
        console.log('DISPATCH TOGGLE_AUTH')
        return !state;
      case 'LOAD':
        console.log('DISPATCH LOAD : '+action.data)
        return state;
      default:
        return state;
    }
  }