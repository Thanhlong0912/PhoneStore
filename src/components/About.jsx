import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">About Us</h1>
            <p className="lead mb-4">
              Thế Giới Di Động ưu đãi đến 30% các dòng laptop chip Intel; học
              sinh, sinh viên mua sẽ giảm thêm đến 700.000 đồng; tân sinh viên
              được trừ thêm 3 triệu đồng tùy điểm số. Từ ngày 1/8 đến ngày
              31/10, khách hàng mua laptop tại Thế Giới Di Động sẽ được ưu đãi
              trả góp 0%. Riêng các thương hiệu Lenovo, HP, Acer và Asus còn
              được trả trước 0 đồng. Người mua cũng có thể được giảm trực tiếp
              đến 30%, tặng kèm quà là chuột không dây, balo thời trang chống
              sốc... Nhóm khách học sinh - sinh viên khi mua sẽ được giảm thêm
              đến 700.000 đồng. Tân sinh viên có thể đổi điểm thi lấy ưu đãi:
              giảm thêm 3 triệu đồng khi có điểm thi trung bình từ 9 trở lên,
              giảm 700.000 đồng khi có số điểm từ 7 đến dưới 9, giảm 500.000
              đồng đối với số điểm từ 5 đến dưới 7. Nhóm còn lại được giảm
              300.000 đồng.
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary px-3">
              Contact Us
            </NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="/assets/images/about.png"
              alt="About Us"
              height="400px"
              width="400px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
