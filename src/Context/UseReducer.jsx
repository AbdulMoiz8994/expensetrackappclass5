export const createReducer=((state,action) =>{
   switch (action.type) {
       case "AddTransaction":
           return  [action.payload, ...state]
        case "DelTransaction":   
        return [...state, state.filter((values) => values.id !== action.payload)]
       default:
           return state;
   }
})