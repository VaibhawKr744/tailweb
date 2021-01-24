export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";

export const getAllProducts = () => {
    return dispatch => {
        fetch('https://gorest.co.in/public-api/products')
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                dispatch({type: GET_ALL_PRODUCTS, payload: data.data});
            })
            .catch((error) => {
                console.error('Error:', error);
                dispatch({type: GET_ALL_PRODUCTS, payload: []});
            });
    };
};