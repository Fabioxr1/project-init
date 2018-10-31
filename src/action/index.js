import axios from 'axios';

export const ACTION_FETCH_COIN = 'ACTION_FETCH_COIN';
export const ACTION_CLICK_SORT = 'ACTION_CLICK_SORT';
export const ACTION_SET_GRAFIC_COIN = 'ACTION_SET_GRAFIC_COIN';
export const ACTION_FETCH_POSTS = 'ACTION_FETCH_POSTS';
export const ACTION_FETCH_POSTID = 'ACTION_FETCH_POSTID';

export function fetchPostWpById(id){
    const request = axios.get(`https://headless.borseperdonna.it/wp-json/wp/v2/posts/${id}/?_embed`);
    return (dispatch) => {
        request.then((response) => {
            dispatch({
                type: ACTION_FETCH_POSTID,
                payload: response
            })
        })
    }
}

export function fetchPostsWp() {
    const request = axios.get('https://headless.borseperdonna.it/wp-json/wp/v2/posts/?_embed');
    return (dispatch) => {
        request.then((response) => {
            dispatch({
                type: ACTION_FETCH_POSTS,
                payload: response
            })
        })
    }
}

export function fetchCardanoCoin() {
    const request = axios.get('https://api.coinmarketcap.com/v1/ticker/?convert=EUR&limit=20');
    return (dispatch) => {
        request.then((response) => {
            dispatch({
                type: ACTION_FETCH_COIN,
                payload: response
            })
        })
    }
}

export function onClickSort(data) {
    return (dispatch) => {
        dispatch({
            type: ACTION_CLICK_SORT,
            event: data
        })
    }
}
export function fetchByUniqueCoin(id) {
    const request = axios.get(`https://api.coinmarketcap.com/v1/ticker/${id}/?convert=EUR`);
    return (dispatch) => {
        request.then((response) => {
            dispatch({
                type: ACTION_SET_GRAFIC_COIN,
                payload: response
            })
        })
    }
}