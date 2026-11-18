import { Link } from "react-router-dom";
import { useIssues } from "../context/IssuesContext.jsx";
import StatCard from "../components/StatCard.jsx";
import IssueCard from "../components/IssueCard.jsx";

const STEPS = [
  ["Snap a photo", "Take a picture of the pothole, garbage pile or broken light."],
  ["Share the location", "Pin your GPS position or type the address."],
  ["Follow progress", "The right department gets it and updates the status."],
];

export default function Home() {
  const { issues } = useIssues();
  const count = (s) => issues.filter((i) => i.status === s).length;
  return (
    <>
      <section className="hero">
        <h1>See a problem on your street? Get it fixed.</h1>
        <p>Report potholes, garbage and broken street lights in under a minute, and track every complaint until it is resolved.</p>
        <div className="row center">
          <Link to="/report" className="btn">Report an issue</Link>
          <Link to="/track" className="btn btn-light">Track complaints</Link>
        </div>
      </section>
      <section className="container grid3 stats">
        <StatCard label="Reported" value={issues.length} />
        <StatCard label="In progress" value={count("In Progress")} />
        <StatCard label="Resolved" value={count("Resolved")} />
      </section>
      <section className="container">
        <h2>How it works</h2>
        <div className="grid3">
          {STEPS.map(([t, d], i) => (
            <div className="card" key={t}><span className="step">{i + 1}</span><h3>{t}</h3><p className="muted">{d}</p></div>
          ))}
        </div>
      </section>
      <section className="container">
        <h2>Latest reports</h2>
        <div className="grid3">{issues.slice(0, 3).map((i) => <IssueCard key={i.id} issue={i} />)}</div>
      </section>
    </>
  );
}
