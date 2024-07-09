    const IsInCart=(state,id)=>{
    const result =!!state.selectedItems.find(item => item.id === id)
    return result
    }

    const CheckQuantity=(state,id)=>{
        const Index=state.selectedItems.findIndex(item => item.id === id)
        if(Index === -1)
            {
                return false;
            }
            else{
            return state.selectedItems[Index].quantity
        }
    }
    const CheckIfIsLiked=(state, id)=>{
        const result=!!state.likedItems.find(item => item.id === id)
        return result;

    }

export {IsInCart , CheckQuantity, CheckIfIsLiked}