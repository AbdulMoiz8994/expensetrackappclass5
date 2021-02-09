export const createReducer=((state,action) =>{
   switch (action.type) {
       case "AddTransaction":
           return {
               transactions: [action.payload, ...state]}
       default:
           return state;
   }
})