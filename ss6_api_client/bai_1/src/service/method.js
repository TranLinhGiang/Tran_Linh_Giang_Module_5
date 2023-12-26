import axios from "axios";

export const getAllTodoList= async () => {
    try {
        let rs = await axios.get("http://localhost:3000/todoList")
        return rs.data
    }catch (e){
        return undefined
    }
}