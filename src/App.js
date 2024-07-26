import logo from "./logo.svg";
import "./App.css";

const skills = [
  {
    skill: "HTML/CSS",
    level: "intermediate",
    color: "#2662EA",
  },
  {
    skill: "React",
    level: "beginner",
    color: "#EFD81D",
  },
  {
    skill: "Git/Github",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Python",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "C/C++",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Unemployment",
    level: "advanced",
    color: "#FF3800",
  },
];

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
    <ul className="skill-list">
      {skills.map((skill) => (
        <Skill skillObj={skill} />
      ))}
    </ul>
  );
}

function Skill({ skillObj }) {
  return (
    <li className="skill" style={{ backgroundColor: skillObj.color }}>
      <span>{skillObj.skill}</span>
      <span>
        {skillObj.level === "beginner" && "👶"}
        {skillObj.level === "intermediate" && "💪"}
        {skillObj.level === "advanced" && "😎"}
      </span>
    </li>
  );
}

export default App;
