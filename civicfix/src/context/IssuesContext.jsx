import { createContext, useContext, useEffect, useState } from "react";
import { SEED_ISSUES, DEPARTMENTS } from "../data/constants.js";
import { newId } from "../utils/helpers.js";

const IssuesContext = createContext(null);
const KEY = "civicfix-issues";

export function IssuesProvider({ children }) {
  const [issues, setIssues] = useState(() => {
    try { return JSON.parse(localStorage.getItem(KEY)) || SEED_ISSUES; } catch { return SEED_ISSUES; }
  });

  useEffect(() => {
    try { localStorage.setItem(KEY, JSON.stringify(issues)); } catch { /* storage full */ }
  }, [issues]);

  // Replace with an API call (Node.js / Django) when the backend is ready
  const addIssue = (data) => {
    const issue = { ...data, id: newId(issues.length), status: "Pending", department: DEPARTMENTS[data.category], createdAt: new Date().toISOString() };
    setIssues((prev) => [issue, ...prev]);
    return issue;
  };
  const updateStatus = (id, status) =>
    setIssues((prev) => prev.map((i) => (i.id === id ? { ...i, status } : i)));

  return <IssuesContext.Provider value={{ issues, addIssue, updateStatus }}>{children}</IssuesContext.Provider>;
}

export const useIssues = () => useContext(IssuesContext);
