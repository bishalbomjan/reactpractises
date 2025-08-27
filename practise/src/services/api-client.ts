import { CanceledError } from "axios"
import axios from 'axios'

export {CanceledError}
export default axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
    // headers:{             
    //     'api-key':'...'     this part is not needed now
    // } this header will be pass to every http request sometimes
    // that is necessary, for eg some backend require us to send an api key
    // with every http request.
    // if there is such a requirement we can pass 'api-key' as shown 
})
