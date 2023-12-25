import "./CreateCustomer.css"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {Link} from "react-router-dom";
import * as React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
function CreateCustomer() {
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
                <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                    <React.Fragment>
                        <h3>Thêm mới Khách hàng</h3>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="firstName"
                                    name="firstName"
                                    label="Họ tên khách hàng"
                                    fullWidth
                                    autoComplete="given-name"
                                    variant="standard"
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="address1"
                                    name="address1"
                                    label="Số chứng minh nhân dân"
                                    fullWidth
                                    autoComplete="shipping address-line1"
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="state"
                                    name="state"
                                    label="Số điện thoại"
                                    fullWidth
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="state"
                                    name="state"
                                    label="Email"
                                    fullWidth
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <label className="color">Ngày sinh</label>
                                <br/>
                                <input className="input dates" type="date"></input>

                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <label className="color">Giới tính</label>
                                <select className="input form-control">
                                    <option value="">--Hãy chọn giới tính--</option>
                                    <option value="csharp">Nam</option>
                                    <option value="cpp">Nữ</option>
                                    <option value="php">LGBT</option>

                                </select>
                            </Grid>

                            <Grid item xs={12} >
                                <label className="color">Loại khách hàng</label>
                                <select  className="input form-control">
                                    <option value="">--Hãy chọn loại khách--</option>
                                    <option value="csharp">Diamond</option>
                                    <option value="cpp">Platinium</option>
                                    <option value="php">Gold</option>
                                    <option value="ruby">Silver</option>
                                    <option value="js">Member</option>
                                </select>
                            </Grid>

                            <Grid item xs={12} >
                                <TextField
                                    required
                                    id="country"
                                    name="country"
                                    label="Địa chỉ"
                                    fullWidth
                                    autoComplete="shipping country"
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <button className="save btn btn-success">Lưu</button>
                            </Grid>
                        </Grid>
                    </React.Fragment>
                </div>
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
            </div>
            <div>
                <Footer/>
            </div>
        </>
    )
}

export default CreateCustomer;