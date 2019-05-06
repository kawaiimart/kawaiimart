import axios from 'axios';


export const createCart = (cart) => {
    return axios.post('/api/cartstorage', cart)
    .then(res => {
        return res.data
    })
}

