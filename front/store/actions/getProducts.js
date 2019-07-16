import { ADD_PRODUCT, ADD_PRODUCTS } from "../../utils/constants"
import Axios from "axios";
import store from "../../store/index"

export const addProducts = (products) => ({
    type: ADD_PRODUCTS,
    products
})

export const addProduct = (product) => ({
    type: ADD_PRODUCT,
    product
})

export const fetchProducts = () =>
    (dispatch) =>
        Axios.get(`/api/products/all`)
            .then(products => dispatch(addProducts(products.data)))

export const fetchProductsByName = (name) =>
    Axios.get(`/api/products/${name}`)
        .then(products => store.dispatch(addProducts(products.data)))

export const filterProductsByCat = (name) =>
    (dispatch) =>
        Axios.get(`/api/categories/${name}`)
            .then(products => dispatch(addProducts(products.data)))

export const fetchProductsById = (id) =>
    Axios.get(`/api/products/${id}`)
        .then(product => store.dispatch(addProduct(product)))

export const fetchProductReviewsById = (id) =>
    Axios.get(`/api/reviews/${id}`)
        .then(product => store.dispatch(addProduct(product.data)))

export const updateProductStock = (stockAndId) =>
    Axios.post(`/api/products/update/stock`, stockAndId)
        .then(products => store.dispatch(addProducts(products.data)))

//ver si es necesario
export const product = (product) => {
    return function (dispatch) {
        Axios.post('/api/products/add', { product })
            .then(product => store.dispatch(product))
    }
}