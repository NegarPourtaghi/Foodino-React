
const initialState={
    selectedItems:[],
    itemsCounter:0,
    total:0,
    checkout:false,
    likedItems:[],
    LikedCounter:0

}
const SumItems=(item)=>{
    const itemsCounter=item.reduce((total, product) => total+product.quantity ,0)
    const total=item.reduce((total,product) => total + product.price*product.quantity,0)
    return {total,itemsCounter}

}
const cartReducer=(state = initialState, action)=>{
    switch (action.type) {
        case "ADD_ITEM":
            if(!state.selectedItems.find(item => item.id === action.payload.id)){
                state.selectedItems.push({
                    ...action.payload,
                    quantity:1
                })
                return{
                    ...state,
                    selectedItems:[...state.selectedItems],
                    ...SumItems(state.selectedItems),
                    checkout:false
                }
            }  
        case "LIKED":
            if(!state.likedItems.find (item => item.id === action.payload.id)){
                state.likedItems.push({...action.payload})

                return{
                    ...state,
                    likedItems:[...state.likedItems],
                }
            }

        case "REMOVE_ITEM":
            const newItems=state.selectedItems.filter(item => item.id !== action.payload.id)
            return{
                ...state,
                selectedItems:[...newItems],
                ...SumItems(state.selectedItems)

            }
         
        case "INCREASE":
            const IndexI=state.selectedItems.findIndex(item => item.id === action.payload.id)
            state.selectedItems[IndexI].quantity++;

            return{
                ...state,
                ...SumItems(state.selectedItems),

            }

        case "DECREASE":
            const IndexD=state.selectedItems.findIndex(item => item.id === action.payload.id)
            state.selectedItems[IndexD].quantity--;
            return{
                ...state,
                ...SumItems(state.selectedItems),

            }
        case "LIKED":
            if(!state.liked.find(item => item.id === action.payload.id)){
                state.liked.push({
                    ...action.payload,

                })
                
            }
            return{
                ...state,
                liked:[...state.liked]
                
            }
        case "CLEAR":
            return{
                selectedItems:[],
                itemsCounter:0,
                total:0,
                checkout:false,
            }
        
        case "CHECKOUT":
            return{
                selectedItems:[],
                itemsCounter:0,
                total:0,
                checkout:true,
            }
        default:
            return state;
    }
}



export default cartReducer;