import { css } from "@emotion/core"
// import { CloudinaryContext, Video, Transformation } from "cloudinary-react"

import BrowserWindow from "./BrowserWindow"

const cloudinaryRootUrl = "https://res.cloudinary.com/dzprezr1g/video/upload/"

const projectContainer = css`
  height: 100vh;
  width: 100vw,
  display: flex,
  flexDirection: column,
  justifyContent: center,
`;

export default {
  projectContainer
};

// const ProjectBlock = ({ name, link }) => (
//   <div
//     style={{
//       height: "100vh",
//       width: "100vw",
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "center",
//     }}
//   >
//     <div
//       style={{
//         margin: "auto",
//         fontSize: "16px",
//         maxWidth: "640px",
//         maxHeight: "420px",
//       }}
//     >
//       <div>
//         <div style={{ margin: "0 auto", width: "100%", position: "relative" }}>
//           {/* <div style={{ position: 'relative', zIndex: '50'}}>
//             <BrowserWindow />
//           </div> */}
//           <div
//             style={{
//               border: "8px solid black",
//               borderRadius: "14px",
//               display: "flex",
//               flexDirection: "column",
//             }}
//           >
//             <div
//               style={{
//                 borderBottom: "8px solid black",
//               }}
//             >
//               <div
//                 className="spacer"
//                 style={{
//                   height: "60px",
//                   width: "100%",
//                   display: "flex",
//                 }}
//               >
//                 <div
//                   style={{
//                     flex: "1",
//                     flexDirection: "row",
//                     display: "flex",
//                     padding: "0 16px",
//                   }}
//                 >
//                   <BrowserButton />
//                   <BrowserButton />
//                   <BrowserButton />
//                 </div>
//                 <div
//                   style={{
//                     flex: "4",
//                     padding: "8px 8px",
//                   }}
//                 >
//                   <div
//                     style={{
//                       background: "transparent",
//                       border: "3px solid black",
//                       borderRadius: "6px",
//                       height: "100%",
//                       display: "flex",
//                       flexDirection: "column",
//                       justifyContent: "center",
//                     }}
//                   >
//                     <a
//                       style={{
//                         margin: "auto 16px",
//                         fontFamily:
//                           "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen",
//                         textDecoration: "none",
//                         fontSize: "18px",
//                         color: "blue",
//                         fontWeight: "400",
//                         letterSpacing: "0.3px",
//                       }}
//                       href="https://aftertheussr.com"
//                       target="_blank"
//                     >
//                       {link}
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <video
//               muted
//               controls
//               width="100%"
//               src={`${cloudinaryRootUrl}/${name}.mp4`}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// )
