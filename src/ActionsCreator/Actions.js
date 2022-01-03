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

export const changePopoverState = (componentName = null) => {
    return {
        type: componentName,
    }
}

export const searchProducts = (searchInput) => {
    return {
        type: "SEARCH_PRODUCT",
        searchInput,
    }
}
