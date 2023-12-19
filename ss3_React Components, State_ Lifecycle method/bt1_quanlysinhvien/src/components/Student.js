import "./Student.css";
const student=[{
    id:1,
    name:"Nguyen Van A",
    address:"Ha Noi",
},{
    id:2,
    name:"Nguyen Van B",
    address:"Ha Noi",
},{
    id:3,
    name:"Nguyen Van C",
    address:"Ha Noi",
},{
    id:4,
    name:"Nguyen Van D",
    address:"Ha Noi",
},{
    id:5,
    name:"Nguyen Van E",
    address:"Ha Noi",
}]
function Student(){
    return (
        <table>
            <tr>
            
                <th>id</th>
                <th>name</th>
                <th>address</th>
                
            </tr>
            {student.map(student =>(
                <tr key={student.id}>
                    <td>{student.id}</td>
                    <td> {student.name}</td>
                    <td> {student.address}</td>
                </tr>
            )
            )}
        </table>
    )
    
}
export default Student;