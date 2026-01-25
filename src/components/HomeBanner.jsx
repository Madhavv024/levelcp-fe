function HomeBanner() {
  return (
    <section className="home_banner_area">
      <div className="banner_inner">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="banner_content">
                <h3 className="text-uppercase">Hello</h3>
                <h1 className="text-uppercase">I am Rahi Satner</h1>
                <h5 className="text-uppercase">Senior WordPress Developer</h5>
                <div className="d-flex align-items-center"
  style={{ display: "flex", alignItems: "center" }}>
                  <a className="primary_btn" href="#">
                    <span>Hire Me</span>
                  </a>
                  <a className="primary_btn tr-bg" href="#">
                    <span>Get CV</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="home_right_img">
                <img
                  src="/assets/home-right.png"
                  alt="Banner"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeBanner
