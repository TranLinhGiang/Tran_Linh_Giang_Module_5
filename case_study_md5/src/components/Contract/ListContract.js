import "./ListContract.css"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {Link} from "react-router-dom";
import * as React from "react";
import Grid from "@mui/material/Grid";
import Table from "react-bootstrap/Table";
import {useEffect} from "react";

function ListContract() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
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
                        <h3>Danh sách các hợp đồng tại Furama</h3>
                        <Grid container spacing={3}>
                            <Table className="table" >
                                <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Tên hợp đồng</th>
                                    <th>Sửa</th>
                                    <th>Xóa</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Dịch vụ 1</td>
                                    <td>
                                        <Link to={"/edit-contract"}>
                                            <button className="btn btn-primary">Sửa</button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button className="btn btn-danger">Xóa</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Dịch vụ 2</td>
                                    <td>
                                        <Link to={"/edit-contract"}>
                                            <button className="btn btn-primary">Sửa</button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button className="btn btn-danger">Xóa</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Dịch vụ 3</td>
                                    <td>
                                        <Link to={"/edit-contract"}>
                                            <button className="btn btn-primary">Sửa</button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button className="btn btn-danger">Xóa</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Dịch vụ 4</td>
                                    <td>
                                        <Link to={"/edit-contract"}>
                                            <button className="btn btn-primary">Sửa</button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button className="btn btn-danger">Xóa</button>
                                    </td>
                                </tr>

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

export default ListContract;