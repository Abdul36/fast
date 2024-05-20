import { Carousel, Container } from "react-bootstrap";

const TestimonialSection = () => {
  return (
    <Container>
      <style>
        {`
          .carousel-indicators li {
            background-color: red; // Change the background color here
          }
        `}
      </style>

      <Carousel id="testimonialCarousel">
        {/* Carousel Item 1 */}
        <Carousel.Item>
          <div
            className="shadow mt-4 ms-4"
            style={{
              width: "30%",
              borderTopRightRadius: "32px",
              borderBottomLeftRadius: "32px",
              padding: "20px",
            }}
          >
            <h4 className="text-center">"First testimonial"</h4>
            <p className="text-center">
              " Sed dignissim faucibus venenatis. Proin eu odio magna. Nunc eget
              ex rhoncus, commodo sem sed, placerat est. Donec id eleifend
              lectus "
            </p>
          </div>
        </Carousel.Item>

        {/* Carousel Item 2 */}
        <Carousel.Item>
          <div
            className="shadow mt-4 ms-4"
            style={{
              width: "30%",
              borderTopRightRadius: "32px",
              borderBottomLeftRadius: "32px",
              padding: "20px",
            }}
          >
            <h4 className="text-center">"Second testimonial"</h4>
            <p className="text-center">
              " Sed dignissim faucibus venenatis. Proin eu odio magna. Nunc eget
              ex rhoncus, commodo sem sed, placerat est. Donec id eleifend
              lectus "
            </p>
          </div>
        </Carousel.Item>

        {/* Carousel Item 3 */}
        <Carousel.Item>
          <div
            className="shadow mt-4 ms-4"
            style={{
              width: "30%",
              borderTopRightRadius: "32px",
              borderBottomLeftRadius: "32px",
              padding: "20px",
            }}
          >
            <h4 className="text-center">"Third testimonial"</h4>
            <p className="text-center">
              " Sed dignissim faucibus venenatis. Proin eu odio magna. Nunc eget
              ex rhoncus, commodo sem sed, placerat est. Donec id eleifend
              lectus "
            </p>
          </div>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default TestimonialSection;
