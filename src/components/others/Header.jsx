// 

import GridLayout from "./GridLayout";
import Button from "../others/Button";
import BlurText from "./BlurText";
import "./Header.scss";
const Header = () => {
  return (
    <section className="seated-header">
      <GridLayout columns={4}>
        {/* Empty space on the left (Columns 1 & 2) */}
        <div className="span-two-columns hide-mobile" />

        {/* Content on the right (Columns 3 & 4) */}
        <div className="span-two-columns seated-content-block">
          <BlurText
            text="Hello There"
            delay={200}
            animateBy="words"
            direction="top"
            className="xxl font-bold"
          />
          <h1 className="seated-sub-headline">
            I'm Angelica❋, welcome to my visual kitchen. 
            <Button variant="primary" to="/bio"> ❋ Bio</Button>
          </h1>
        </div>
      </GridLayout>
    </section>
  );
};
export default Header;