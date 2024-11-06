import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SwipeToSlide() {
  const settings = {
    className: "center",
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 3,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 768, // Mobile breakpoint (adjust as needed)
        settings: {
          infinite:true,
          slidesToShow: 1,
          centerPadding: "20px",
        }
      }
    ],
    afterChange: function(index: number) {
      console.log(`Slider Changed to: ${index + 1}`);
    }
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {/* Image-1 */}
        <div className="px-2">
          <div className="w-full h-72 md:h-96">
            <img src="https://images.unsplash.com/photo-1688646545293-2755ea04cd8e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="mt-4 text-center">
            <h3 className="text-xl font-bold">Manage Projects</h3>
            <p className="font-medium">20+ projects</p>
          </div>
        </div>

        {/* Image-2 */}
        <div className="px-2">
          <div className="w-full h-72 md:h-96">
            <img src="https://plus.unsplash.com/premium_photo-1661964056895-df72cdd98e62?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="mt-4 text-center">
            <h3 className="text-xl font-bold">Track Tasks</h3>
            <p className="font-medium">50+ tasks</p>
          </div>
        </div>

        {/* Image-3 */}
        <div className="px-2">
          <div className="w-full h-72 md:h-96">
            <img src="https://plus.unsplash.com/premium_photo-1664478124560-260c7402fddc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="mt-4 text-center">
            <h3 className="text-xl font-bold">Collaborate</h3>
            <p className="font-medium">10+ team members</p>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default SwipeToSlide;
