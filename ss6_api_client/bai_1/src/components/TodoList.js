import React from "react";
import {useState, useEffect} from "react";
import * as method from "../service/method"

function TodoList() {
    const [todoList, setTodoList] = useState([]);

    const getAll = async () => {
        let data = await method.getAllTodoList();
        setTodoList(data);
    }

    useEffect(() => {
        getAll();
    }, []);


    return (
        <>
            <h1>List Post</h1>
            <table className="table">
                <thead className="table-dark">
                <tr>
                    <td scope="col">ID</td>
                    <td scope="col">Name</td>
                </tr>
                </thead>
                <tbody>
                {todoList.map(item => (
                    <tr key={item.id}>
                        <td scope="col">{item.id}</td>
                        <td className="title" scope="col">{item.name}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}
export default TodoList;