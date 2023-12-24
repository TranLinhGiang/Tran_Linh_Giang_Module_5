import "./Footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';

function Footer() {
    return (
        <>
            <div className="footers col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <h4 className="f-title f_600 t_color f_size_18">Liên lạc</h4>
                    <p>Đừng bỏ lỡ bất kỳ cập nhật nào về các mẫu và tiện ích mở rộng mới của chúng tôi.!</p>
                    <input type="text" name="EMAIL" placeholder="Email"/>
                    <button className=" gui btn btn-success">Gửi</button>

                </div>
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                    <h3 className="f-title f_600 t_color f_size_18">Công ty</h3>
                    <ul className="list-unstyled f_list">
                        <li><a href="#">Về chúng tôi</a></li>
                        <li><a href="#">Tuyển dụng</a></li>
                        <li><a href="#">Báo chí</a></li>
                        <li><a href="#">Nhật ký</a></li>
                        <li><a href="#">Mạng</a></li>
                        <li><a href="#">Công ty</a></li>

                    </ul>
                </div>
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                    <h3 className="f-title f_600 t_color f_size_18"> Trợ giúp</h3>
                    <ul className="list-unstyled f_list">
                        <li><a href="#">Câu hỏi thường gặp</a></li>
                        <li><a href="#">Điều khoản và điều kiện</a></li>
                        <li><a href="#">Báo cáo</a></li>
                        <li><a href="#">Tài liệu</a></li>
                        <li><a href="#">Chính sách hỗ trợ</a></li>
                        <li><a href="#">Sự riêng tư</a></li>
                    </ul>
                </div>

                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                    <h3 className="f-title f_600 t_color f_size_18">Liên hệ khác</h3>
                    <FacebookIcon/>
                    <TwitterIcon/>
                    <LinkedInIcon/>
                    <PinterestIcon/>
                    <br/><br/><br/>
                    <br/><br/>
                    <a>© Trần Linh Giang | C0723G1</a>
                </div>
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
            </div>

        </>
    )
}

export default Footer;



