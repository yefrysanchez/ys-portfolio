import './styles/AboutPage.css'
import Cover from "../components/cover/Cover";

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="about">
        <div className="about__text">
          <h1>A BIT ABOUT ME</h1>
          <p>
            I was born in Dominican Republic and moved to New York in 2011, went
            to school in The Bronx, NY. I love Baseball, Videogames, Produce
            music and all about Computers from hardware to software. I am really
            passionate about technology in general.
          </p>
        </div>
        <div className="about__img">
          <Cover src="../../assets/about/personal-photo.jpg" alt ="personal-photo"/>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
