import "./styles.scss";
import Header from "../../components/header";
import Nav from "../../components/nav";
import About from "../../blocks/about";
import Experience from "../../blocks/experience";
import Losung from "../../blocks/losung";
import Example from "../../blocks/example";
import Photo from "../../blocks/photo";
import Process from "../../blocks/process";
import Projects from "../../blocks/projects";
import Form from "../../blocks/form";
import Footer from "../../components/footer";
import LineBG from "../../components/lineBG";
import Divider from "../../components/divider";

export default function IndexPage() {
  return (
    <LineBG
      spaceBetweenLines={{
        0: 84,
        1190: 150,
      }}
      lineHeight="100vh"
    >
      <div className="index-page">
        <Header />
        <main>
          <About />
          <Experience />
          <Divider withLine />
          <Losung />
          <Divider />
          <Example />
          <Photo />
          <Process />
          <Divider withLine />
          {/* <Projects /> */}
          {/* <Form /> */}
        </main>
        <Footer />
        <div className="index-page__nav-wrapper">
          <Nav />
        </div>
      </div>
    </LineBG>
  );
}
