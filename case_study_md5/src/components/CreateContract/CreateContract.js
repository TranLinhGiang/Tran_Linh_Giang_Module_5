import "./CreateContract.css"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {Link} from "react-router-dom";
import * as React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
function CreateContract() {
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
                        <h3>Thêm mới Hợp đồng</h3>
                        <Grid container spacing={3}>

                            <Grid item xs={12} >
                                <label className="color">Ngày làm hợp đồng</label>
                                <br/>
                                <input className="input dates" type="date"></input>

                            </Grid>
                            <Grid item xs={12} >
                                <label className="color">Ngày kết thúc hợp đồng</label>
                                <br/>
                                <input className="input dates" type="date"></input>

                            </Grid>
                            <Grid item xs={12}>
                                <label className="color">Ngày kết thúc hợp đồng</label>
                                <br/>
                                <input className="input dates" type="number"></input>

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

export default CreateContract;