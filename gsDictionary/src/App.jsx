import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const getBurdan = (al) => {
    return al;
  };

  return (
    <div className="bg-gray-700 ">
      <div>
        <nav className="flex space-x-6 items-center pb-4 pt-4">
          <div className="text-left pl-6 text-2xl basis-1/4 font-body text-yellow-500">
            Galatasaray Sozluk
          </div>
          <div className="flex border border-white basis-1/2 ">
            <input
              className="bg-white w-full placeholder:text-gray-700 placeholder:pl-3"
              placeholder="topic #entry @nick"
              type="text"
            />
            <div className="bg-yellow-400 flex items-center">
              <a href="#" className="p-1">
                Getir
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="p-1 w-6 h-6 text-black "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                />
              </svg>
            </div>
          </div>
          <div className="text-white">
            <div className="flex items-center space-x-4 basis-1/4">
              <div>Ben</div>
              <div>Mesaj</div>
              <div className="border p-1 bg-yellow-400 text-black rounded">Cop</div>
              <div className="border rounded p-1">Takip</div>

              <div>...</div>
            </div>
          </div>
        </nav>
      </div>

      <div className="flex">
        <div className="flex border-b-4 basis-1/2">
          <div className="text-white flex space-x-4 pl-1 text-sm">
            <div className="border-r-2 pr-4 border-slate-400">Bugun</div>
            <div className="border-r-2 pr-4 border-slate-400">Gundem</div>
            <div className="border-r-2 pr-4 border-slate-400">10</div>
            <div className="border-r-2 pr-4 border-slate-400">Kadro</div>
            <div className="border-r-2 pr-4 pl-2 border-slate-400">...</div>
          </div>
        </div>

        <div className="flex justify-end basis-1/2 border-b-4 text-white">
          <div className="flex space-x-4 pl-1 text-sm">
            <div className="border-r-2 pr-4 border-slate-400">
              Control Center
            </div>
            <div className="border-r-2 pr-4 border-slate-400">Fan-Zone</div>
            <div className="border-r-2 pr-4 border-slate-400"> Who's in</div>
            <div className="border-r-2 pr-4 border-slate-400">Stats</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 text-white">
        <div>
          <div>Bugun</div>
        </div>
        <div className="col-span-2">
          <div>Maclar</div>
          <ul>
            <li>{getBurdan("al")}</li>
            <li>2.Baslik</li>
            <li>3.Baslik</li>
            <li>4.Baslik</li>
          </ul>
        </div>
        <div>
          {/* <div>
            Topic
          </div>  */}
        </div>
      </div>

      <body className="bg-gray-700 grid grid-cols-5 mt-2">
        <div className="col-span-1 text-left pl-2 text-white">
          <div>
            <p className="uppercase font-bold mb-8">bugun</p>

            <a href="#" className="text-white block border border-gray-600 hover:bg-gray-600 p-1 text-center mb-4 mr-2">
              yenile
            </a>
      
            <div className="mr-2">
            <a href ='#' className="hover:bg-slate-600 cursor-auto block">Baslik 1 </a>
            <a href ='#' className="hover:bg-slate-600 cursor-auto block">Baslik 2 </a>



            </div>
          </div>
        </div>

        <div className="bg-gray-300 col-span-4">
          {" "}
          <div>World</div>
          <div>World</div>
          <div>World</div>
          <div>World</div>
        </div>
      </body>
    </div>
  );
}

export default App;
