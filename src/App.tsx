import { RouterProvider, createBrowserRouter } from "react-router-dom";

// import { useState } from "react";
// import Button from "./components/form/Button";
// import Logo from "../src/assets/full-logo-sm.svg";
// import Setting from "../src/assets/setting.svg";
// import Close from "../src/assets/close-circle.svg";
// import Monitor from "../src/assets/monitor.svg";
// import currentTab from "../src/assets/currentTab.svg";
// import videocamera from "../src/assets/video-camera.svg";
// import audio from "../src/assets/audio-rec.svg";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Repository from "./pages/Repository";
import SingleScreenRecord from "./pages/SingleScreenRecord";
// const Home = () => (
//   <div className=" w-72 h-[410px] rounded-md shadow-lightBg p-4 py-5 ">
//     <div className="flex items-center justify-between pb-3">
//       <img src={Logo} width={130} height={32} alt="helpmeout Logo" />
//       <div className="flex items-center gap-2 ">
//         <span className="cursor-pointer">
//           <img src={Setting} alt="setting icon" />
//         </span>

//         <span className="cursor-pointer">
//           <img src={Close} alt="Close icon" />
//         </span>
//       </div>
//     </div>
//     <p className="text-sm font-Sora text-main/80 font-light py-2">
//       This extension helps you record and share help videos with ease.
//     </p>
//     <div className="flex items-center justify-center py-4 gap-10 ">
//       <div className="cursor-pointer flex items-center flex-col gap-1">
//         <img src={Monitor} alt="monitor icon" />
//         <p className="font-bold text-[#928FAB]">Full screen</p>
//       </div>
//       <div className="cursor-pointer flex items-center flex-col gap-1">
//         <img src={currentTab} alt="current-tab icon" />
//         <p className="font-bold text-main">Current Tab</p>
//       </div>
//     </div>
//     <div className="flex items-center justify-between p-3.5 border border-main rounded-lg ">
//       <div className="cursor-pointer flex items-center gap-2">
//         <img src={videocamera} alt="Camera icon" />
//         <p className="font-semibold text-main">Camera</p>
//       </div>

//       <label className="relative inline-flex items-center cursor-pointer">
//         <input type="checkbox" defaultValue="" className="sr-only peer" />
//         <div className="w-9 h-5 bg-gray-300 peer-focus:outline-none rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all  peer-checked:bg-main" />
//       </label>
//     </div>
//     <div className="flex items-center justify-between p-3.5 border border-main mt-4 rounded-lg ">
//       <div className="cursor-pointer flex items-center gap-2">
//         <img src={audio} alt="audio icon" />
//         <p className="font-semibold text-main">Audio</p>
//       </div>

//       <label className="relative inline-flex items-center cursor-pointer">
//         <input type="checkbox" defaultValue="" className="sr-only peer" />
//         <div className="w-9 h-5 bg-gray-300 peer-focus:outline-none rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all  peer-checked:bg-main" />
//       </label>
//     </div>
//     <Button textClassName="font-medium text-base" className="w-full mt-4 mb-2">
//       Start Recording
//     </Button>
//   </div>
// );

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/repository",
      element: <Repository />,
    },
    {
      path: "/single-view",
      element: <SingleScreenRecord />,
    },
  ]);

  return <RouterProvider router={router} />;
  // const [colours, setColours] = useState();
  // const onclick = async () => {
  //   const [tab] = await chrome.tabs.query({ active: true });
  //   chrome.scripting.executeScript({
  //     target: { tabId: tab.id! },
  //     // args: [colours],
  //     func: () => {
  //       alert("Hello form my extension!");
  //       // document.body.style.backgroundColor = colours;
  //     },
  //   });
  // };
  // return (
  //   <>
  //     <div className=" w-72 h-[410px] rounded-md shadow-lightBg p-4 py-5 ">
  //       <div className="flex items-center justify-between pb-3">
  //         <img src={Logo} width={130} height={32} alt="helpmeout Logo" />
  //         <div className="flex items-center gap-2 ">
  //           <span className="cursor-pointer">
  //             <img src={Setting} alt="setting icon" />
  //           </span>

  //           <span className="cursor-pointer">
  //             <img src={Close} alt="Close icon" />
  //           </span>
  //         </div>
  //       </div>
  //       <p className="text-sm font-Sora text-main/80 font-light py-2">
  //         This extension helps you record and share help videos with ease.
  //       </p>
  //       <div className="flex items-center justify-center py-4 gap-10 ">
  //         <div className="cursor-pointer flex items-center flex-col gap-1">
  //           <img src={Monitor} alt="monitor icon" />
  //           <p className="font-bold text-[#928FAB]">Full screen</p>
  //         </div>
  //         <div className="cursor-pointer flex items-center flex-col gap-1">
  //           <img src={currentTab} alt="current-tab icon" />
  //           <p className="font-bold text-main">Current Tab</p>
  //         </div>
  //       </div>
  //       <div className="flex items-center justify-between p-3.5 border border-main rounded-lg ">
  //         <div className="cursor-pointer flex items-center gap-2">
  //           <img src={videocamera} alt="Camera icon" />
  //           <p className="font-semibold text-main">Camera</p>
  //         </div>

  //         <label className="relative inline-flex items-center cursor-pointer">
  //           <input type="checkbox" defaultValue="" className="sr-only peer" />
  //           <div className="w-9 h-5 bg-gray-300 peer-focus:outline-none rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all  peer-checked:bg-main" />
  //         </label>
  //       </div>
  //       <div className="flex items-center justify-between p-3.5 border border-main mt-4 rounded-lg ">
  //         <div className="cursor-pointer flex items-center gap-2">
  //           <img src={audio} alt="audio icon" />
  //           <p className="font-semibold text-main">Audio</p>
  //         </div>

  //         <label className="relative inline-flex items-center cursor-pointer">
  //           <input type="checkbox" defaultValue="" className="sr-only peer" />
  //           <div className="w-9 h-5 bg-gray-300 peer-focus:outline-none rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all  peer-checked:bg-main" />
  //         </label>
  //       </div>
  //       <Button
  //         textClassName="font-medium text-base"
  //         className="w-full mt-4 mb-2"
  //         onClick={() => onclick()}
  //       >
  //         Start Recording
  //       </Button>
  //       {/* <input
  //         type="color"
  //         // onChange={(e) => setColours(e.currentTarget.value)}
  //         // value={colours}
  //       /> */}
  //     </div>
  //   </>
  // );
}

export default App;
