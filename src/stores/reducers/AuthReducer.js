export const AuthReducer = (state = [], action) => {
    switch (action.type) {
      case 'TOGGLE_AUTH':
        console.log('DISPATCH TOGGLE_AUTH')
        return !state;
      case 'LOAD':
        console.log('DISPATCH LOAD : '+action.data)
        return state;
      case 'SIGNIN':
        return {...state, user: action.paylad}
      case 'LOGIN':
        return {...state, user: action.paylad}
      case 'LOGOUT':
        return {...state, user: action.paylad}
      default:
        return state;
    }
  }