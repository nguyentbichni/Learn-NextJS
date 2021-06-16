// const initialState = {
//     productList: [
//         { id: 1, title: "Iphone"},
//         { id: 2, title: "Ipad"},
//         { id: 3, title: "Ipod"}
//       ],
// }
export default function ProductReducers (state = initialState, actions){
    switch(actions.type){
        case 'GET_PRODUCT_LIST':{
            return{
                ...state,
                productList: [
                    ...actions.payload
                ]
            }
        }
        default:{
            return state
        };
    }
}