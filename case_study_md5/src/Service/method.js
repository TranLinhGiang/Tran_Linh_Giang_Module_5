import axios from "axios";
export const getAllCustomerList= async () => {
    try {
        let rs = await axios.get("http://localhost:8080/customerList")
        return rs.data
    }catch (e){
        return undefined
    }
}