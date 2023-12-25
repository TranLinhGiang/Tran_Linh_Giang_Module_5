import React from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Body.css"
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import PersonIcon from '@mui/icons-material/Person';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ListAltIcon from '@mui/icons-material/ListAlt';
import FormatListNumberedRtlIcon from '@mui/icons-material/FormatListNumberedRtl';
import ListIcon from '@mui/icons-material/List';
import Card from 'react-bootstrap/Card';
import "./message.css"
import {Link} from "react-router-dom"
function Body() {
    return (
        <>
            {/*sidebar*/}
            <div className=" total col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className=" col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <div className="sidebar">
                            <Link to={"/create-service"}><Button className="but" variant="success"><p><PlaylistAddIcon/>Thêm mới dịch vụ</p></Button>{' '}</Link>
                            <Link to={"/create-customer"} ><Button className="but" variant="success"><p><PersonIcon/> Thêm mới khách hàng</p></Button>{' '}</Link>
                            <Link to={"/create-contract"}>  <Button className="but" variant="success"><p><LibraryBooksIcon/> Thêm mới hợp đồng</p></Button>{' '}</Link>
                            <Link to={"/list-customer"}>  <Button className="but" variant="success"><p><ListAltIcon/> Danh sách khách hàng</p></Button>{' '}</Link>
                            <Link to={"/list-contract"}> <Button className="but" variant="success"><p><FormatListNumberedRtlIcon/> Danh sách hợp đồng</p></Button>{' '}</Link>
                            <Link to={"/list-service"}> <Button className="but" variant="success"><p><ListIcon/>Danh sách các dịch vụ</p></Button>{' '}</Link>

                        </div>
                    </div>
                {/*sidebar*/}
                <div className=" card-body col-xs-8 col-sm-8 col-md-8 col-lg-8">
                    <a id="myBtn2" className="zom"
                    href="https://www.facebook.com/"
                    >
                    <img src='data:image/jpeg;base64,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' width='40px'/>
                    </a>

                    <div className="card">
                        <Card style={{width: '18rem'}}>
                            <img className=""
                                 src="https://furamavietnam.com/wp-content/uploads/2018/11/Vietnam_Danang_Furama_Ocean-Studio-Suite.jpg"/>
                            <Card.Body>
                                <Card.Text>
                                    <h5 className="card-title">OCEAN SUITE</h5>
                                    <p className="card-text">Room size: 85.5 m<sup>2</sup></p>
                                </Card.Text>
                                <Button variant="primary">Xem chi tiết phòng</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="card">
                        <Card style={{width: '18rem'}}>
                            <img className=""
                                 src="https://furamavietnam.com/wp-content/uploads/2018/11/Vietnam_Danang_Furama_Ocean-Studio-Suite.jpg"/>
                            <Card.Body>
                                <Card.Text>
                                    <h5 className="card-title">OCEAN SUITE</h5>
                                    <p className="card-text">Room size: 85.5 m<sup>2</sup></p>
                                </Card.Text>
                                <Button variant="primary">Xem chi tiết phòng</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="card">
                        <Card style={{width: '18rem'}}>
                            <img className=""
                                 src="https://furamavietnam.com/wp-content/uploads/2018/11/Vietnam_Danang_Furama_Ocean-Studio-Suite.jpg"/>
                            <Card.Body>
                                <Card.Text>
                                    <h5 className="card-title">OCEAN SUITE</h5>
                                    <p className="card-text">Room size: 85.5 m<sup>2</sup></p>
                                </Card.Text>
                                <Button variant="primary">Xem chi tiết phòng</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="card">
                        <Card style={{width: '18rem'}}>
                            <img className=""
                                 src="https://furamavietnam.com/wp-content/uploads/2018/11/Vietnam_Danang_Furama_Ocean-Studio-Suite.jpg"/>
                            <Card.Body>
                                <Card.Text>
                                    <h5 className="card-title">OCEAN SUITE</h5>
                                    <p className="card-text">Room size: 85.5 m<sup>2</sup></p>
                                </Card.Text>
                                <Button variant="primary">Xem chi tiết phòng</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="card">
                        <Card style={{width: '18rem'}}>
                            <img className=""
                                 src="https://furamavietnam.com/wp-content/uploads/2018/11/Vietnam_Danang_Furama_Ocean-Studio-Suite.jpg"/>
                            <Card.Body>
                                <Card.Text>
                                    <h5 className="card-title">OCEAN SUITE</h5>
                                    <p className="card-text">Room size: 85.5 m<sup>2</sup></p>
                                </Card.Text>
                                <Button variant="primary">Xem chi tiết phòng</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="card">
                        <Card style={{width: '18rem'}}>
                            <img className=""
                                 src="https://furamavietnam.com/wp-content/uploads/2018/11/Vietnam_Danang_Furama_Ocean-Studio-Suite.jpg"/>
                            <Card.Body>
                                <Card.Text>
                                    <h5 className="card-title">OCEAN SUITE</h5>
                                    <p className="card-text">Room size: 85.5 m<sup>2</sup></p>
                                </Card.Text>
                                <Button variant="primary">Xem chi tiết phòng</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="card">
                        <Card style={{width: '18rem'}}>
                            <img className=""
                                 src="https://furamavietnam.com/wp-content/uploads/2018/11/Vietnam_Danang_Furama_Ocean-Studio-Suite.jpg"/>
                            <Card.Body>
                                <Card.Text>
                                    <h5 className="card-title">OCEAN SUITE</h5>
                                    <p className="card-text">Room size: 85.5 m<sup>2</sup></p>
                                </Card.Text>
                                <Button variant="primary">Xem chi tiết phòng</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="card">
                        <Card style={{width: '18rem'}}>
                            <img className=""
                                 src="https://furamavietnam.com/wp-content/uploads/2018/11/Vietnam_Danang_Furama_Ocean-Studio-Suite.jpg"/>
                            <Card.Body>
                                <Card.Text>
                                    <h5 className="card-title">OCEAN SUITE</h5>
                                    <p className="card-text">Room size: 85.5 m<sup>2</sup></p>
                                </Card.Text>
                                <Button variant="primary">Xem chi tiết phòng</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="card">
                        <Card style={{width: '18rem'}}>
                            <img className=""
                                 src="https://furamavietnam.com/wp-content/uploads/2018/11/Vietnam_Danang_Furama_Ocean-Studio-Suite.jpg"/>
                            <Card.Body>
                                <Card.Text>
                                    <h5 className="card-title">OCEAN SUITE</h5>
                                    <p className="card-text">Room size: 85.5 m<sup>2</sup></p>
                                </Card.Text>
                                <Button variant="primary">Xem chi tiết phòng</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Body;