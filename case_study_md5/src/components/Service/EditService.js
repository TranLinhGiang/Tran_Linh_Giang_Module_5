import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {Link} from "react-router-dom";
import * as React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import {useEffect} from "react";

function EditService() {
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

                    <Link to={"/list-service"}>
                        <button className=" back btn btn-success">Trở về danh sách</button>
                    </Link>

                </div>
                <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                    <React.Fragment>
                        <h3>Chỉnh sửa dịch vụ</h3>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="firstName"
                                    name="firstName"
                                    label="Tên dịch vụ"
                                    fullWidth
                                    autoComplete="given-name"
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="lastName"
                                    name="lastName"
                                    label="Diện tích sử dụng"
                                    fullWidth
                                    autoComplete="family-name"
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="address1"
                                    name="address1"
                                    label="Diện tích hồ bơi"
                                    fullWidth
                                    autoComplete="shipping address-line1"
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="state"
                                    name="state"
                                    label="Chi phí thuê"
                                    fullWidth
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <label className="color">Số tầng</label>
                                <select className="input form-control">
                                    <option className="color" value="">--Hãy chọn tiêu chuẩn phòng--</option>
                                    <option value="csharp">Phòng Bungalow</option>
                                    <option value="cpp">Phòng Standard (STD)</option>
                                    <option value="php">Phòng Deluxe (DLX)</option>
                                    <option value="ruby">Phòng Suite (SUT)</option>
                                    <option value="js">Phòng Junior Suite</option>
                                    <option value="dart">Phòng Executive</option>
                                </select>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <label className="color">Tiêu chuẩn phòng</label>
                                <select  className="input form-control">
                                    <option value="">--Hãy chọn tiêu chuẩn phòng--</option>
                                    <option value="csharp">Phòng Bungalow</option>
                                    <option value="cpp">Phòng Standard (STD)</option>
                                    <option value="php">Phòng Deluxe (DLX)</option>
                                    <option value="ruby">Phòng Suite (SUT)</option>
                                    <option value="js">Phòng Junior Suite</option>
                                    <option value="dart">Phòng Executive</option>
                                </select>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <label className="color">Số lượng người</label>
                                <select className="input form-control">
                                    <option value="">--Hãy chọn số lượng người--</option>
                                    <option value="csharp">1</option>
                                    <option value="cpp">2</option>
                                    <option value="php">3</option>
                                    <option value="ruby">4</option>
                                    <option value="js">5</option>
                                    <option value="dart">6</option>
                                </select>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <label className="color"> Kiểu thuê</label>
                                <select className="input form-control">
                                    <option value="">--Hãy chọn kiểu thuê--</option>
                                    <option value="csharp">Theo giờ</option>
                                    <option value="cpp">Theo ngày</option>
                                    <option value="php">Theo tháng</option>
                                    <option value="ruby">Theo năm</option>
                                </select>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="country"
                                    name="country"
                                    label="Mô tả tiện nghi khác"
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
export default EditService;