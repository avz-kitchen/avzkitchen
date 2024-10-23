import GridLayout from ".././others/GridLayout";
import Dropdown from ".././project/Dropdown";
import AboutSection from "../aboutSection/AboutSection";

const About = () => {
  const skills = [
    {
      title: "As a creative illustrator",
      image: "/path/to/illustration-icon.png",
      text: "I find joy in capturing the beauty of diverse cultures and experiences. Every piece I create is a reflection of my inspirations, inviting others to see the world through my eyes.",
    },
    {
      title: "UX/UI Design",
      image: "/path/to/ux-ui-icon.png",
      text: "This artistic foundation guides my work in UX/UI design, where I focus on creating user experiences that resonate on a personal level. I believe design should be intuitive, engaging, and respectful of our environment.",
    },
    {
      title: "In Branding",
      image: "/path/to/branding-icon.png",
      text: "I love helping brands articulate their unique stories, crafting visual identities that connect with people and embraces sustainability and our environtment",
    },
    {
      title: "Web Development",
      image: "/path/to/web-dev-icon.png",
      text: "In the realm of web development, I find the sweet blend of creativity and logic. Each project is a chance to transform ideas into reality, and I draw inspiration from the natural world around me. I’m dedicated to building websites that are not only user-friendly and visually appealing but also eco-conscious. My goal is to collaborate with like-minded individuals to create digital solutions that empower users while honoring our planet.",
    },
  ];

  return (
    <>
      <AboutSection isAboutPage={true} />
      <GridLayout columns={2}>
        <div>
          {/* Step 2: Map over skills to create dropdowns */}
          {skills.map((item, index) => (
            <Dropdown
              key={index} // Use index as key; consider a unique id if available
              title={item.title}
              image={item.image}
              text={item.text}
            />
          ))}
        </div>
        <div>Here img</div>
      </GridLayout>
    </>
  );
};

export default About;
