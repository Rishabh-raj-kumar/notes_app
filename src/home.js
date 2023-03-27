import Header from "./components/header";
import { useState } from "react";

export default function Home() {
  let obj = JSON.parse(localStorage.getItem("obj"));
  const [maps, setMaps] = useState(obj);

  function HandleDisplay({title,summary}) {
     <Footer title={title} summary={summary}/>
     console.log(title)
  }
  return (
    <>
      <Header />
        <section className="w-full min-h-full flex flex-wrap">
          {maps.map((x) => (
            <div
              key={x.id}
              className="w-48 m-2 bg-slate-300 rounded-md relative"
              onClick={HandleDisplay({title : x.title,summary : x.summary})}
            >
              <h2 className="w-full p-2 bg-black text-white rounded-t-md cursor-default">
                {x.title}
              </h2>
              
              <img src={x.img} className=" w-28 h-28 mx-auto mt-2 rounded-b-md"></img>

              <p className="w-fit h-fit p-2 cursor-default">{x.summary}</p>
            </div>
          ))}
        </section>
        <Footer />
    </>
  );
}

function Footer({title, summary}){
     return (     
      <h1>{summary}</h1>
     )
}