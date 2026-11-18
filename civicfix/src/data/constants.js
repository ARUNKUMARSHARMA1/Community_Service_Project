export const CATEGORIES = ["Pothole", "Garbage", "Street light", "Water leakage", "Drainage", "Other"];
export const WARDS = ["Ward 1", "Ward 2", "Ward 3", "Ward 4", "Ward 5"];
export const STATUSES = ["Pending", "In Progress", "Resolved"];
// Each category is routed to a department automatically
export const DEPARTMENTS = {
  Pothole: "Roads & Public Works",
  Garbage: "Sanitation",
  "Street light": "Electricity",
  "Water leakage": "Water Supply",
  Drainage: "Sewerage",
  Other: "General Administration",
};
export const SEED_ISSUES = [
  { id: "CF-1001", title: "Deep pothole near market", category: "Pothole", department: "Roads & Public Works", ward: "Ward 2", location: "Main Market Road", description: "Large pothole causing accidents.", photo: "", status: "In Progress", createdAt: "2026-09-25T09:00:00Z" },
  { id: "CF-1002", title: "Garbage not collected for a week", category: "Garbage", department: "Sanitation", ward: "Ward 4", location: "Sector 5 corner", description: "Overflowing bins and bad smell.", photo: "", status: "Pending", createdAt: "2026-09-27T11:30:00Z" },
  { id: "CF-1003", title: "Street light not working", category: "Street light", department: "Electricity", ward: "Ward 1", location: "Park Lane", description: "Whole lane is dark at night.", photo: "", status: "Resolved", createdAt: "2026-09-20T18:00:00Z" },
];
