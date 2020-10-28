import req from '../plugins/http.js'

let api_url = 'rockayumitw'

console.log(req)


// export const apiTestData = params => req.get(`api/${api_url}/admin/products?page=1`)

// 此處的instance為我們create的實體
export default function(method, url, data = null, config) {
    method = method.toLowerCase();
    console.log(method)
    switch (method) {
    case "post":
        return req.post(url, data, config);
    case "get":
        return req.get(url, { params: data });
    case "delete":
        return req.delete(url, { params: data });
    case "put":
        return req.put(url, data);
    case "patch":
        return req.patch(url, data);
    default:
        console.log(`未知的 method: ${method}`);
        return false;
    }
}

export const signin = (params)=>{
    console.log('tt')
    return req.post(`/admin/signin`, params)
}


// export const signin = params => req.post(`api/${api_url}/admin/signin`,params)

// export const apiTestData = () => req.get('/users/')

//const apiTestData = params => req.post(`/users/${param}`)

// export const signin = param => req.post(`/signin/${param}`)

// export const getProductsAdmin = () => req.get('/users/')

// export const apiTestData = () => req('get', '/users')
// export const apiUserLogin = params => req('post', '/WebLogin/Login', params)

