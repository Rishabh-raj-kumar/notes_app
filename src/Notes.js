import "./App.css";
import Header from "./components/header";
import { useState } from "react";
import { Link } from "react-router-dom";

let initials = [

];

let nxtId = 1;
let obj = JSON.parse(localStorage.getItem("obj"));
export default function Notes() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [img,setImg] = useState("");

  function Handle() {
    if (title.length !== 0 && summary.length !== 0) {
      
      initials.push({ 
          id: ++nxtId,
          title: title,
          summary: summary,
          img : img,
      })

      setTitle("");
      setSummary("");

      alert("Elements added succesfully....");
    } else {
      alert("Please enter valid title or summary....");
    }
  }

  return (
    <>
      <Header />
      <section className="w-full h-screen grid place-items-center">
        <div className=" w-full h-full sm:w-1/2 sm:h-1/2 bg-slate-200 flex flex-col gap-2 justify-center items-center rounded">
          <input
            type="text"
            placeholder="Enter heading..."
            value={title}
            className=" w-64 sm:w-1/2 p-2 rounded border-1 outline-none"
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            placeholder="Enter the notes ..."
            value={summary}
            className=" w-64 sm:w-1/2 p-2 rounded border-1 outline-none"
            onChange={(e) => setSummary(e.target.value)}
          />

          <label for="choose">choose Image </label>
          <input type="file"
           onChange={(e) => {
             const img = e.target.files[0];
              const reader = new FileReader();

              reader.readAsDataURL(img);
              
              reader.addEventListener('load',() => {
                setImg(reader.result);
              })
           }}
           accept="image/*" />

          <div className="btn flex gap-2">
            <button
              className="w-28 p-2 uppercase bg-green-600 shadow-lg shadow-emerald-400
            hover:bg-slate-50 hover:shadow-slate-300"
              onClick={() => {
                Handle();
                localStorage.setItem("obj", JSON.stringify(initials));
              }}
            >
              CREATE
            </button>
            <button
              className="w-28 p-2 uppercase bg-green-600 shadow-lg shadow-emerald-400
            hover:bg-slate-50 hover:shadow-slate-300"
            >
              <Link to="/">HOME</Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
