import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useIssues } from "../context/IssuesContext.jsx";
import IssueCard from "../components/IssueCard.jsx";
import { STATUSES } from "../data/constants.js";

export default function TrackIssues() {
  const { issues } = useIssues();
  const { state } = useLocation();
  const [q, setQ] = useState("");
  const [status, setStatus] = useState("All");
  const shown = issues.filter(
    (i) => (status === "All" || i.status === status) &&
      `${i.id} ${i.title} ${i.location}`.toLowerCase().includes(q.toLowerCase())
  );
  return (
    <section className="container">
      <h2>Track issues</h2>
      {state?.created && <p className="success">Report {state.created} submitted. Use this ID to follow it.</p>}
      <div className="row filters">
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by ID, title or place" />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          {["All", ...STATUSES].map((s) => <option key={s}>{s}</option>)}
        </select>
      </div>
      {shown.length ? <div className="grid3">{shown.map((i) => <IssueCard key={i.id} issue={i} />)}</div>
        : <p className="muted">No issues match. Try a different search or report a new one.</p>}
    </section>
  );
}
