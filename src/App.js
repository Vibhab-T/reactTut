import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Bio />
        <br />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="logo192.png" alt="LOGO" className="avatar" />;
}

function Bio() {
  return (
    <div>
      <h1>Vibhab Timsina</h1>
      <p>
        Front End Developer, currently learning React. It is kicking my ass.
      </p>
    </div>
  );
}

function SkillList(props) {
  return (
    <div className="skill-list">
      <Skill name="HTML/CSS" emoji="👨‍💻" color="blue" />
      <Skill name="React" emoji="😧" color="red" />
      <Skill name="Python" emoji="🐍" color="cyan" />
      <Skill name="Kei Audaina" emoji="😔" color="yellow" />
      <Skill name="Gari khana deu" emoji="❌" color="orange" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      {props.name} {props.emoji}
    </div>
  );
}

export default App;
