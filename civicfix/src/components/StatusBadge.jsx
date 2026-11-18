export default function StatusBadge({ status }) {
  return <span className={`badge badge-${status.replace(" ", "").toLowerCase()}`}>{status}</span>;
}
