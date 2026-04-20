import { Bar, BarChart, Line, LineChart, XAxis, YAxis } from "recharts";
import "./App.css";
import MarksChart from "./components/MarksChart/MarksChart";
import axios from "axios";
import { Suspense } from "react";

// const students = [
//   {
//     id: 101,
//     name: "Rahim",
//     physics: 78,
//     chemistry: 85,
//     math: 90,
//     biology: 72,
//   },
//   {
//     id: 102,
//     name: "Karim",
//     physics: 65,
//     chemistry: 70,
//     math: 68,
//     biology: 75,
//   },
//   {
//     id: 103,
//     name: "Sumi",
//     physics: 92,
//     chemistry: 88,
//     math: 95,
//     biology: 90,
//   },
//   {
//     id: 104,
//     name: "Nabila",
//     physics: 55,
//     chemistry: 60,
//     math: 58,
//     biology: 62,
//   },
//   {
//     id: 105,
//     name: "Hasan",
//     physics: 80,
//     chemistry: 76,
//     math: 82,
//     biology: 78,
//   },
// ];

const marksPromise = axios.get('marksData.json');

function App() {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm mb-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2 bg-base-100 w-40 z-1">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
      {/* <LineChart
      
        width={500}
        height={500}
        data={students}
      >
        <Line dataKey="physics"></Line>
        <Line dataKey="chemistry" stroke="red"></Line>
        <Line dataKey="math"></Line>
        <Line dataKey="biology"></Line>
      </LineChart>
      <BarChart width={600} height={300} data={students}>
      <XAxis
        dataKey="name"
        label={{ position: 'insideBottomRight', value: 'XAxis title', offset: -10 }}
      />
      <YAxis label={{ position: 'insideTopLeft', value: 'YAxis title', angle: -90, dy: 60 }} />
      <Bar dataKey="physics" fill="#8884d8" />
      <Bar dataKey="chemistry" fill="#8884d8" />
      <Bar dataKey="math" fill="#8884d8" />
      <Bar dataKey="biology" fill="#8884d8" />
    </BarChart> */}
    <Suspense fallback={<div>Loading...</div>}>
    <MarksChart marksPromise={marksPromise}></MarksChart>
    </Suspense>
    </>
  );
}

export default App;
