import React from "react";

const style = {
  div: {
    display: "block",
    margin: "auto",
    height: "300px",
    width: "200px",
    objectFit: "contain"
  },
  carrousel: {
    marginTop: "35px"
  },
  text: {
    textAlign: "center",
    fontFamily: "Francois One",
    fontSize: "80px"
  },
  text2: {
    textAlign: "center"
  },
  footer: {
    marginTop: "170px"
  },
  arrowcolor: {
    filter: "invert(100%)"
  }
};
//<h1 style={style.text}>TESSIE&CO</h1>
export default ({ onClick }) => {
  return (
    <div className="container">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-ride="carousel"
        style={style.carrousel}
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to="0"
            className="active"
          />
          <li data-target="#carouselExampleCaptions" data-slide-to="1" />
          <li data-target="#carouselExampleCaptions" data-slide-to="2" />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active" onClick={() => onClick("Mac")}>
            <img
              src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4598/4598800cv12d.jpg"
              className="d-block w-100"
              alt="..."
              style={style.div}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>MacBook</h5>
            </div>
          </div>
          <div className="carousel-item" onClick={() => onClick("iPad")}>
            <img
              src="https://www.apple.com/my/support/products/images/mac-hero_2x.png"
              style={style.div}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Mac Apple</h5>
            </div>
          </div>
          <div className="carousel-item" onClick={() => onClick("Gadget")}>
            <img
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/image/AppleInc/aos/published/images/a/pp/apple/watch/apple-watch-og-hero-201809?wid=600&hei=315&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1536762554360"
              style={style.div}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Apple Watch</h5>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
          style={style.arrowcolor}
        >
          {" "}
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
          style={style.arrowcolor}
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div>
        <footer style={style.footer}>
          <p className="float-right" style={style.text2}>
            <a href="#">Back to top</a>
          </p>
          <p>
            &copy; 2017-2019 Company, Inc. &middot; <a href="#">Privacy</a>{" "}
            &middot; <a href="#">Terms</a>
          </p>
        </footer>
      </div>
    </div>
  );
};
