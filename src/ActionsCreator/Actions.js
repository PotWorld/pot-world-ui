export const addToWishlist = (id) => {
    return {
        type: "Add_ITEM",
        selectedItemId: id,
    }
}

export const removeFromWishList = (id) => {
    return {
        type: "REMOVE_ITEM",
        selectedItemId: id,
    }
}
