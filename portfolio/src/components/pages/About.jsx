import GridLayout from ".././others/GridLayout";
import Dropdown from ".././project/Dropdown";
import TechStack from "../aboutSection/TechStack";
import AboutSection from "../aboutSection/AboutSection";
import Richtext from "../others/Richtext";
import TwoColumnList from "../others/TwoColumnList";

const About = () => {

  const aboutText = "blending strategy, design & tech ☍ in my visual kitchen ✦, where ideas simmer, flavors merge, and every project is carefully plated. I transform concepts into digital experiences that are not only visually compelling but also intuitive, functional, and built to leave a lasting impression ☜.";
  const headerTags = ["Branding", "Product Design", "Code"];
const skills = [
  {
    title: "Brand & Design Systems ✐",
    text: "I build cohesive design systems that give brands a clear, consistent voice across every touchpoint. From visual identity to reusable components, I ensure every element is carefully plated for impact and scalability.",
  },
  {
    title: "UX/UI & Information Architecture ✦",
    image: "/about/avz-glasses.png",
    text: "I structure experiences that feel intuitive and engaging. By mapping flows, organizing content, and prioritizing clarity, I create interfaces that guide users effortlessly — every interaction thoughtfully crafted.",
  },
  {
    title: "Accessibility & Inclusive Design ➹",
    image: "/about/Avz-Illustration.png",
    text: "Design should be for everyone. I focus on creating experiences that are accessible, inclusive, and usable by all, making sure every digital interaction is considerate and empowering.",
  },
  {
    title: "Front-End Development & Code </> ",
    text: "I bring designs to life with clean, efficient code. From responsive layouts to interactive components, I ensure that every project not only looks great but performs seamlessly across devices and platforms.",
  },
  {
    title: "Creative Illustration & Visual Storytelling ✎",
    text: "I translate ideas into visuals that connect and inspire. From illustrations to motion and iconography, I craft imagery that enhances storytelling and enriches user experiences.",
  },
];


  return (
    <div >
      <AboutSection isAboutPage={true} />
      <Richtext paragraph={aboutText} tags={headerTags} />
      <TwoColumnList
        heading="What I do"
        items={skills}
      />
      <TechStack />

    </div>
  );
};

export default About;
