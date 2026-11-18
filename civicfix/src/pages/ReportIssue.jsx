import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useIssues } from "../context/IssuesContext.jsx";
import { CATEGORIES, WARDS } from "../data/constants.js";
import { fileToDataUrl } from "../utils/helpers.js";

const empty = { title: "", category: CATEGORIES[0], ward: WARDS[0], location: "", description: "", photo: "" };

export default function ReportIssue() {
  const { addIssue } = useIssues();
  const nav = useNavigate();
  const [f, setF] = useState(empty);
  const [msg, setMsg] = useState("");
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const onPhoto = async (e) => {
    const file = e.target.files[0];
    if (file) setF({ ...f, photo: await fileToDataUrl(file) });
  };
  const useGps = () => {
    if (!navigator.geolocation) return setMsg("Location is not supported in this browser.");
    navigator.geolocation.getCurrentPosition(
      (p) => setF((s) => ({ ...s, location: `${p.coords.latitude.toFixed(5)}, ${p.coords.longitude.toFixed(5)}` })),
      () => setMsg("Could not get your location. Allow access or type the address.")
    );
  };
  const submit = (e) => {
    e.preventDefault();
    if (!f.title.trim() || !f.location.trim()) return setMsg("Add a title and a location to continue.");
    const issue = addIssue(f);
    nav("/track", { state: { created: issue.id } });
  };

  return (
    <section className="container narrow">
      <h2>Report an issue</h2>
      <form className="card form" onSubmit={submit}>
        <label>Title<input value={f.title} onChange={set("title")} placeholder="e.g. Deep pothole near school" /></label>
        <div className="grid2">
          <label>Category<select value={f.category} onChange={set("category")}>{CATEGORIES.map((c) => <option key={c}>{c}</option>)}</select></label>
          <label>Ward<select value={f.ward} onChange={set("ward")}>{WARDS.map((w) => <option key={w}>{w}</option>)}</select></label>
        </div>
        <label>Location
          <div className="row"><input value={f.location} onChange={set("location")} placeholder="Street, landmark or GPS" />
            <button type="button" className="btn btn-light" onClick={useGps}>Use my location</button></div>
        </label>
        <label>Description<textarea rows="3" value={f.description} onChange={set("description")} placeholder="What is the problem and how long has it been there?" /></label>
        <label>Photo<input type="file" accept="image/*" onChange={onPhoto} /></label>
        {f.photo && <img className="preview" src={f.photo} alt="Preview of the issue" />}
        {msg && <p className="error" role="alert">{msg}</p>}
        <button className="btn">Submit report</button>
      </form>
    </section>
  );
}
