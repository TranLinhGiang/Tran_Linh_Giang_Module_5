import React from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Body.css"
import Dropdown from 'react-bootstrap/Dropdown';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import PersonIcon from '@mui/icons-material/Person';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ListAltIcon from '@mui/icons-material/ListAlt';
import FormatListNumberedRtlIcon from '@mui/icons-material/FormatListNumberedRtl';
import ListIcon from '@mui/icons-material/List';
import Card from 'react-bootstrap/Card';
import "./message.css"
import {Link} from "react-router-dom"
import phongngu1 from "../../img/phongngu1.jpg";
import message from "../../img/message.jpg";
import phongngu2 from "../../img/phongngu2.jpg";
import phongngu3 from "../../img/phongngu3.jpg";
import phongngu4 from "../../img/phongngu4.jpg";
import phongngu5 from "../../img/phongngu5.jpg";
import phongngu6 from "../../img/phongngu6.jpg";

function Body() {
    return (
        <>
            {/*sidebar*/}
            <div className=" total col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className=" col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <div className="sidebar">
                        <div>
                            <Dropdown>
                                <Dropdown.Toggle style={{width: "100%"}} variant="success" id="dropdown-basic">
                                            <p className="addService">
                                                   <PlaylistAddIcon/>
                                            Thêm mới dịch vụ
                                            </p>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Link to={"/create-villa"}><Button className="add"><p>Villa</p></Button>{' '}</Link>
                                    <Link to={"/create-home"}><Button className="add"><p>Home</p></Button>{' '}</Link>
                                    <Link to={"/create-room"}><Button className="add"><p>Room</p></Button>{' '}</Link>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <Link to={"/create-customer"}><Button className="but" variant="success"><p><PersonIcon/> Thêm
                            mới khách hàng</p></Button>{' '}</Link>
                        <Link to={"/create-contract"}> <Button className="but" variant="success"><p>
                            <LibraryBooksIcon/> Thêm mới hợp đồng</p></Button>{' '}</Link>
                        <Link to={"/list-customer"}> <Button className="but" variant="success"><p><ListAltIcon/> Danh
                            sách khách hàng</p></Button>{' '}</Link>
                        <Link to={"/list-contract"}> <Button className="but" variant="success"><p>
                            <FormatListNumberedRtlIcon/> Danh sách hợp đồng</p></Button>{' '}</Link>
                        <Link to={"/list-service"}> <Button className="but" variant="success"><p><ListIcon/>Danh sách
                            các dịch vụ</p></Button>{' '}</Link>

                    </div>
                </div>
                {/*sidebar*/}
                <div className=" card-body col-xs-8 col-sm-8 col-md-8 col-lg-8">
                    <a id="myBtn2" className="zom"
                       href="https://www.facebook.com/"
                    >
                        <img src={message} width='40px'/>
                    </a>

                    <div className="card">
                        <Card style={{width: '18rem'}}>
                            <img className="pictureCard"
                                 src={phongngu1}/>
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
                            <img className="pictureCard"
                                 src={phongngu2}/>
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
                            <img className="pictureCard"
                                 src={phongngu3}/>
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
                            <img className="pictureCard"
                                 src={phongngu4}/>
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
                            <img className="pictureCard"
                                 src={phongngu5}/>
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
                            <img className="pictureCard"
                                 src={phongngu6}/>
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
                            <img className="pictureCard"
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
                            <img className="pictureCard"
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
                            <img className="pictureCard"
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