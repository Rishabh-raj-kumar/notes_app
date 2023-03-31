import Header from "./components/header";
import { useState } from "react";
import { Link } from "react-router-dom";
import * as htmlToImage from "html-to-image"

export default function Home() {
  let obj = JSON.parse(localStorage.getItem("obj"));
  const [maps, setMaps] = useState(obj);

  function HandleDisplay({ title, summary }) {
    <Footer title={title} summary={summary} />;
    console.log(title);
  }
  return (
    <>
      <Header />
      {maps !== null ? (
        <section className="w-full min-h-full"
        onLoad={
          () =>{
            let left_anim = document.querySelector('.left--animate');
            let right_anim = document.querySelector('.right--animate');

            setInterval(() => {
              left_anim.style.left = `${Math.floor(Math.random(10))}px`;
              right_anim.style.left = `${Math.floor(Math.random(10))}px`;
            }, 1000);
          }
        }>
          {maps.map((x) => (
            <div className="bg-slate-300 rounded-md m-2 float-left">
            <div
              key={x.id}
              className="div--canva w-40 sm:w-48 bg-slate-300 rounded-md relative"
              onClick={HandleDisplay({ title: x.title, summary: x.summary })}
            >
              <h2 className="w-full p-2 bg-black text-sm sm:text-base text-white rounded-t-md cursor-default">
                {x.title}
              </h2>

              {x.img !== "" ? (
                <img
                  src={x.img}
                  className=" w-20 h-20 sm:w-28 sm:h-28 mx-auto mt-2 rounded-b-md"
                ></img>
              ) : (
                <p></p>
              )}

              <p className=" text-sm sm:text-basew-fit h-fit p-2 cursor-default">{x.summary}</p>
              </div>
              <button
                className="w-full p-1 bg-green-500 text-sm sm:text-base rounded-b-lg"
                onClick={() => {
                   var node = document.querySelector('.div--canva');
                   htmlToImage.toJpeg(node).then(function (dataUrl) {
                    const link = document.createElement('a')
                    link.href = dataUrl;
                    link.download = "My notes";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);

                   }).catch(error => {
                    console.log(error);
                   })
                }}
              >
                <i class="fa-solid fa-download"></i> Download
              </button>
            </div>
          ))}

          <div className="w-48 h-48 bg-zinc-100 blur-md absolute -z-10"></div>
        </section>
      ) : (
        <section className="w-fit h-fit">
          <div className=" m-4 w-48 h-48 bg-white rounded-md">
            <h1 className="bg-black w-full h-12 rounded-t-md text-white text-center pt-3">
              Hello world
            </h1>
            <p className="px-4 pt-2 font-mono text-gray-400">
              Tap on Create to make your first note.
            </p>
            <button className="bg-green-400 px-4 mx-5 rounded-sm mt-6 shadow-md shadow-emerald-400">
              <Link to="/notes">CREATE</Link>
            </button>
          </div>
          <div className=" left--animate w-24 h-24 bg-zinc-100 blur-xl rounded-xl absolute -z-10"></div>
          <div className=" left--animate w-24 h-24 bg-amber-400 blur-xl rounded-xl absolute -z-10 right-0"></div>
          <div className=" right--animate w-24 h-24 bg-purple-500 blur-xl rounded-xl absolute -z-10 bottom-0"></div>
          <div className=" right--animate w-24 h-24 bg-sky-600 blur-xl rounded-xl absolute -z-10 right-0 bottom-8"></div>
        </section>
      )}
      <Footer />
    </>
  );
}

function Footer({ title, summary }) {
  return <h1>{summary}</h1>;
}

onLoad={
  () =>{
    let left_anim = document.querySelector('.left--animate');
    let right_anim = document.querySelector('.right--animate');

    setInterval(() => {
      left_anim.style.left = `${Math.floor(Math.random(10))}px`;
      right_anim.style.left = `${Math.floor(Math.random(10))}px`;
    }, 1000);
  }
}