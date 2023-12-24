import "./ListCustomer.css"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {Link} from "react-router-dom";
import * as React from "react";
import Grid from "@mui/material/Grid";
import Table from 'react-bootstrap/Table';
function ListCustomer() {
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
                        <h3>Danh sách phòng</h3>
                        <Grid container spacing={3}>
                            <Table className="table" >
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
                                <tr>
                                    <td>1</td>
                                    <td>Trần Linh Giang</td>
                                    <td>044202222337</td>
                                    <td>0814742505</td>
                                    <td>gt07839@gmaiil.com</td>
                                    <td>04/01/2002</td>
                                    <td>Nam</td>
                                    <td>Gold</td>
                                    <td>Quảng Bình</td>
                                    <td>
                                        <button className="btn btn-primary">Sửa</button>
                                    </td>
                                    <td>
                                        <button className="btn btn-danger">Xóa</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Trương Minh Thuận</td>
                                    <td>044208222367</td>
                                    <td>0454742507</td>
                                    <td>thuantm123@gmaiil.com</td>
                                    <td>04/01/1996</td>
                                    <td>Nam</td>
                                    <td>Sliver</td>
                                    <td>Quảng Trị</td>
                                    <td>
                                        <button className="btn btn-primary">Sửa</button>
                                    </td>
                                    <td>
                                        <button className="btn btn-danger">Xóa</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Đinh Quốc Tuấn</td>
                                    <td>044208222367</td>
                                    <td>0454742507</td>
                                    <td>tuan123@gmaiil.com</td>
                                    <td>04/01/1996</td>
                                    <td>Nam</td>
                                    <td>Sliver</td>
                                    <td>TP.HCM</td>
                                    <td>
                                        <button className="btn btn-primary">Sửa</button>
                                    </td>
                                    <td>
                                        <button className="btn btn-danger">Xóa</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Nguyễn Tiến Anh</td>
                                    <td>044208222367</td>
                                    <td>0454742507</td>
                                    <td>anh123@gmaiil.com</td>
                                    <td>04/01/1996</td>
                                    <td>Nam</td>
                                    <td>Sliver</td>
                                    <td>Hà Nội</td>
                                    <td>
                                        <button className="btn btn-primary">Sửa</button>
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

export default ListCustomer;