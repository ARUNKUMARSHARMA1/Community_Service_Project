import StatusBadge from "./StatusBadge.jsx";
import { formatDate } from "../utils/helpers.js";

export default function IssueCard({ issue }) {
  return (
    <article className="card issue">
      {issue.photo ? <img src={issue.photo} alt={issue.title} /> : <div className="issue-ph">{issue.category}</div>}
      <div className="issue-body">
        <div className="row"><strong>{issue.id}</strong><StatusBadge status={issue.status} /></div>
        <h3>{issue.title}</h3>
        <p className="muted">{issue.location} · {issue.ward}</p>
        <p className="muted">{issue.department || "General Administration"} · {formatDate(issue.createdAt)}</p>
      </div>
    </article>
  );
}
