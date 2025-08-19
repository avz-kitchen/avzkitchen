import GridLayout from "./GridLayout";
import Button from "../others/Button";
const Header = () => {
  return (
    <section >
      <GridLayout columns={4}>
        <h1 className="xxl span-three-columns">Hello there,</h1>
        <h1 style={{ fontSize: "clamp(1rem, 5vw, 2rem)", textTransform: "none" }}>I'm Angelica❋, welcome to my visual kitchen. <Button variant="primary" to="/bio"> ❋ Bio</Button>
        </h1>
      </GridLayout >
      {/* <img
        src="public/project/flightapp/flight-app-hero.gif"
        alt="AVZ Kitchen" 
        height="720px"
        width="100%"
        style={{ objectFit: "cover", borderRadius: "8px" }} // Ensures the image covers the area without
      /> */}
  <video
    src="https://res.cloudinary.com/dtleseja7/video/upload/avz-video.mp4"
        alt="AVZ Kitchen"
        height="720px"
        width="100%"
        style={{ objectFit: "cover",     objectPosition: "center", borderRadius: "8px", filter: "grayscale(100%)" }} // Ensures the video covers the area without distortion
        autoPlay
        loop
        muted
      />
    </section>
  );
};

export default Header;
