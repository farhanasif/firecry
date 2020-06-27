export const quizReducer = (state = [], action) => {
    switch (action.type) {
      case 'INIT':
        if(action.data){
          return [...state, ...action.data];
        }
        else{
          return [];
        }
      default:
        return state;
    }
  }