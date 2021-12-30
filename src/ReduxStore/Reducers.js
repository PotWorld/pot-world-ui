import { combineReducers } from "redux";
const PopoverComponentState = {
    EDIT_PROFILE: false,
};

const shopItems = () => {
    return [
        {id: 1, name: "bouquet flower", path:"/images/bouquet_flowers_flower.jpg",info: "buy as soon as possible"},
        {id: 2, name: "cactus green pot", path:"/images/cactus_in_green_pot.jpg", info: "we have a lot"},
        {id: 3, name: "purple flower", path:"/images/flower_flowers_purple_flowers.jpg", info: "good for bussiness"},
        {id: 4, name: "sum flower", path:"/images/flower_flowers_sunflower.jpg", info: "have very long leaves"},
        {id: 5, name: "sun flower", path:"/images/flower_pot.jpg", info: "good for digestion"},
    ]
}

let wishlist = [
    {id: 1, name: "this is mango plant", info: "buy as soon as possible"},
    {id: 2, name: "this is peach planet", info: "we have a lot"},
    {id: 3, name: "this is money plant", info: "good for bussiness"},
    {id: 4, name: "this is banana plant", info: "have very long leaves"},
];

const wishlistBag = (a=null, action) => {
    if(action && action.type === "REMOVE_ITEM") {
        wishlist = wishlist.filter(item => item.id !== action.selectedItemId)
    }
    if(action && action.type === "Add_ITEM") {
        const findItems = shopItems().find(item => item.id === action.selectedItemId);
        console.log(findItems);
        if(findItems && !wishlist.find(item => item.id === findItems.id)){
            wishlist.push(findItems);
        }
    }
    return wishlist;
}


const changePopoverComponentState = (a=null, action) => {
    if(action.type === "OPEN_EDIT_PROFILE") {
        PopoverComponentState['EDIT_PROFILE'] = true;
    }
    if(action.type === "CLOSE_EDIT_PROFILE") {
        PopoverComponentState['EDIT_PROFILE'] = false;
    }
    return PopoverComponentState;
}



export default combineReducers({
    allItems: shopItems,
    wishlistBag: wishlistBag,
    changePopoverState: changePopoverComponentState,
});