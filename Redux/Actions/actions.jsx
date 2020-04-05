export const actionTypes = {
    ADD_BUSINESS: 'ADD_BUSINESS'
}

export const addBusiness = () => ({
    type: actionTypes.ADD_BUSINESS,
    // return (dispatch) {
    //     fetch("auth_URL", {
    //         method: "GET",
    //         headers: {}
    //       })
    //     .then(r=> r.json())
    //     .then(res => {
    //         dispatch( { 
    //             type: addBusiness,
    //             payload: {
    //                 businessList: res.data.topCategories,
    //             }
    //         }) 
    //     })
    // }
})


