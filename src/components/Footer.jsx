import React from "react";

const Footer = () => {
  return (
    <>
<footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div class="col-md-4 d-flex align-items-center ms-5">
      <span class="text-muted">© 2022 Company, Inc</span>
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li class="ms-2 me-5 mx-2"><a class="text-muted py-5 my-5"><span className="fa fa-twitter"></span></a></li>
      <li class="ms-2 me-5 mx-2"><a class="text-muted py-5 my-5"><span className="fa fa-facebook"></span></a></li>
      <li class="ms-2 me-5 mx-2"><a class="text-muted"><span className="fa fa-instagram"></span></a></li>
    </ul>
  </footer>
    </>
  );
};

export default Footer;
