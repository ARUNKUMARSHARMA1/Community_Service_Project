import { useIssues } from "../context/IssuesContext.jsx";
import StatCard from "../components/StatCard.jsx";
import StatusBadge from "../components/StatusBadge.jsx";
import { STATUSES } from "../data/constants.js";
import { formatDate } from "../utils/helpers.js";

export default function AdminDashboard() {
  const { issues, updateStatus } = useIssues();
  return (
    <section className="container">
      <h2>Admin dashboard</h2>
      <div className="grid3">
        {STATUSES.map((s) => <StatCard key={s} label={s} value={issues.filter((i) => i.status === s).length} />)}
      </div>
      <div className="card table-wrap">
        <table>
          <thead><tr><th>ID</th><th>Issue</th><th>Department</th><th>Ward</th><th>Date</th><th>Status</th><th>Update</th></tr></thead>
          <tbody>
            {issues.map((i) => (
              <tr key={i.id}>
                <td>{i.id}</td><td>{i.title}<div className="muted">{i.location}</div></td>
                <td>{i.department || "General Administration"}</td><td>{i.ward}</td><td>{formatDate(i.createdAt)}</td>
                <td><StatusBadge status={i.status} /></td>
                <td><select value={i.status} onChange={(e) => updateStatus(i.id, e.target.value)}>{STATUSES.map((s) => <option key={s}>{s}</option>)}</select></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
