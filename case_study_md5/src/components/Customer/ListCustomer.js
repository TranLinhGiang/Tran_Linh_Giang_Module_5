import "./ListCustomer.css"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {Link} from "react-router-dom";
import * as React from "react";
import Grid from "@mui/material/Grid";
import Table from 'react-bootstrap/Table';
import {useEffect} from "react";
import {useState} from "react";
import * as method from "../../Service/method";

function ListCustomer() {
    const [customerList, setCustomerList] = useState([]);

    const getAll = async () => {
        let data = await method.getAllCustomerList();
        setCustomerList(data);
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    useEffect(() => {
        getAll()
    }, []);
    return (
        <>
            <div>
                <Header/>
            </div>
            <div className="body-form col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">

                    <Link to={"/"}>
                        <button className=" back btn btn-success">Trở về trang chủ</button>
                    </Link>

                </div>
                <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                    <React.Fragment>
                        <h3>Danh sách khách hàng</h3>
                        <Grid container spacing={3}>
                            <Table className="table">
                                <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Họ và tên</th>
                                    <th>CCCD</th>
                                    <th>SĐT</th>
                                    <th>Email</th>
                                    <th>Ngày sinh</th>
                                    <th>Giới tính</th>
                                    <th>Loại khách hàng</th>
                                    <th>Địa chỉ</th>
                                    <th>Sửa</th>
                                    <th>Xóa</th>
                                </tr>
                                </thead>
                                <tbody>
                                {customerList.map((item,index )=> (
                                    <tr key={item.id}>
                                        <td>{index+1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.identity}</td>
                                        <td>{item.numberPhone}</td>
                                        <td>{item.email}</td>
                                        <td>{item.dateOfBirth}</td>
                                        <td>{item.gender}</td>
                                        <td>{item.customerType}</td>
                                        <td>{item.address}</td>
                                        <td>
                                            <Link to={"/edit-customer"}>
                                                <button className="btn btn-primary">Sửa</button>
                                            </Link>
                                        </td>
                                        <td>
                                            <button className="btn btn-danger">Xóa</button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </Table>
                        </Grid>
                    </React.Fragment>
                </div>

            </div>
            <div>
                <Footer/>
            </div>
        </>
    )
}

export default ListCustomer;