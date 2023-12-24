import React from "react";
import "./Header.css"
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

function Header() {
    return (
        <div className="tong col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                <img className="logo" src="https://ib.vib.com.vn/banners/Promotion/20220621154454143_furama.png"/>
            </div>
            <div className="map col-xs-2 col-sm-2 col-md-2 col-lg-2">
                <h6 className="front"><FmdGoodIcon/> 103 – 105 Đường Võ Nguyên Giáp, Phường Khuê Mỹ,Quận Ngũ hành Sơn, Tp. Đà Nẵng, Việt Nam</h6>
                <h6 className="front">7.0 km từ Sân bay Quốc tế Đà Nẵng</h6>
            </div>
            <div className="phone col-xs-2 col-sm-2 col-md-2 col-lg-2">
                <h6 className="front"><PhoneIcon/>0814742505</h6>
                <h6 className="front"><EmailIcon/> gt07839@gmail.com</h6>
            </div>
        </div>
    );
};
export default Header;


