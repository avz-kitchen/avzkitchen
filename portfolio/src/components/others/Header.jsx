import GridLayout from "./GridLayout";
import Button from "../others/Button";
const Header = () => {
  return (
    <section >
      <GridLayout columns={4}>
        <h1 className="xxl span-three-columns">Hello there</h1>
        <h4>I'm Angelica, welcome to the visual kitchen  for my<br/> creative digital outlets.. <br/> <Button variant="primary" to="/bio">Angelica's Bio</Button>
        </h4>
      </GridLayout >
      <img
        src="public/project/flightapp/flight-app-hero.gif"
        alt="AVZ Kitchen" 
        height="720px"
        width="100%"
        style={{ objectFit: "cover", borderRadius: "8px" }} // Ensures the image covers the area without
      />
    </section>
  );
};

export default Header;
