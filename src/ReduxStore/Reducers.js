import { combineReducers } from "redux";
const PopoverComponentState = {
    EDIT_PROFILE: false,
};

const shopItems = [
    {id: 1, name: "bouquet flower", path:"/images/bouquet_flowers_flower.jpg",info: "buy as soon as possible"},
    {id: 2, name: "cactus green pot", path:"/images/cactus_in_green_pot.jpg", info: "we have a lot"},
    {id: 3, name: "purple flower", path:"/images/flower_flowers_purple_flowers.jpg", info: "good for bussiness"},
    {id: 4, name: "sum flower", path:"/images/flower_flowers_sunflower.jpg", info: "have very long leaves"},
    {id: 5, name: "flower pot", path:"/images/flower_pot.jpg", info: "good for digestion"},
    {id: 6, name: "flower", path:"/images/flower.jpg", info: "good for digestion"},
    {id: 7, name: "paniculata flame flower", path:"/images/high_perennial_phlox_phlox_paniculata_flame_flower_panicle.jpg", info: "good for digestion"},
    {id: 8, name: "white green pot", path:"/images/large_white_garden_pot.jpg", info: "good for digestion"},
    {id: 9, name: "lavender pot", path:"/images/lavender_pot.jpg", info: "good for digestion"},
    {id: 10, name: "old table with flower decoration", path:"/images/old_table_with_flower_decoration.jpg", info: "good for digestion"},
    {id: 11, name: "cherry flower", path:"/images/ornamental_cherry_flowering_twig_bud.jpg", info: "good for digestion"},
    {id: 12, name: "spring flower", path:"/images/pansy_flower_spring_flowers.jpg", info: "good for digestion"},
    {id: 13, name: "pink flower", path:"/images/pink_flowers.jpg", info: "good for digestion"},
    {id: 14, name: "poppy red flower", path:"/images/poppy_flower_red_poppy.jpg", info: "good for digestion"},
    {id: 15, name: "potted plant", path:"/images/potted_plant.jpg", info: "good for digestion"},
    {id: 16, name: "purple flower buds", path:"/images/purple_flower_azalea_buds_buds.jpg", info: "good for digestion"},
    {id: 17, name: "purple pentunia flower", path:"/images/purple_purple_petunia_flower.jpg", info: "good for digestion"},
    {id: 18, name: "tulip flower", path:"/images/tulips_our_flower.jpg", info: "good for digestion"},
    {id: 19, name: "various flowers", path:"/images/various_flowers.jpg", info: "good for digestion"},
    {id: 20, name: "white spotted flowers", path:"/images/white_spotted_flowers.jpg", info: "good for digestion"},
    {id: 21, name: "meadow hoary plantain", path:"/images/wild_flower_meadow_meadow_hoary_plantain.jpg", info: "good for digestion"},
]

let wishlist = [
    {id: 1, name: "bouquet flower", path:"/images/bouquet_flowers_flower.jpg",info: "buy as soon as possible"},
    {id: 2, name: "cactus green pot", path:"/images/cactus_in_green_pot.jpg", info: "we have a lot"},
    {id: 3, name: "purple flower", path:"/images/flower_flowers_purple_flowers.jpg", info: "good for bussiness"},
    {id: 4, name: "sum flower", path:"/images/flower_flowers_sunflower.jpg", info: "have very long leaves"},
    {id: 5, name: "flower pot", path:"/images/flower_pot.jpg", info: "good for digestion"},
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

const changePopoverComponentState = (initialState = PopoverComponentState, action) => {
    const newState = Object.assign({}, initialState);
    if(action.type === "OPEN_EDIT_PROFILE") {
        newState['EDIT_PROFILE'] = true;
    }
    if(action.type === "CLOSE_EDIT_PROFILE") {
        newState['EDIT_PROFILE'] = false;
    }
    return newState;
}

const getAllShopItems = (initialItems = shopItems, action) => {
    if (action.type === "SEARCH_PRODUCT" && action.searchInput) {
        return shopItems.filter((item) => item.name.includes(action.searchInput)); 
    }
    return initialItems;
}

export default combineReducers({
    allItems: getAllShopItems,
    wishlistBag: wishlistBag,
    changePopoverState: changePopoverComponentState,
    searchProducts: getAllShopItems,
});
