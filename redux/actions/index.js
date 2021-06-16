export function getProductsList(params){
    return{
        type: 'GET_PRODUCT_LIST',
        payload: params,
    }
}