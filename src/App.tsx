// // import Alert from './Alert';

// // function App() {
// //   return (
// //     <div>
// //       <Alert>
// //         Hello world! <span>I am Esther</span>
// //       </Alert>
// //       {/* <Alert>Hello world!, I am Esther</Alert> */}
// //       {/* <Alert text="Hello world!, I am Esther" /> */}
// //     </div>
// //   );
// // }

// // export default App;

// // How to style React component with css
// // 1. External
// // 2. Modules
// // 3. Inline
// import { useState } from 'react';
// import Alert from './Alert';
// import Button from './Button';

// function App() {
//   const [alertVisible, setAlertVisibility] = useState(false);

//   return (
//     <div>
//       {alertVisible && (
//         <Alert onClose={() => setAlertVisibility(false)}>
//           Hello world! <span>I am Esther</span>
//         </Alert>
//       )}

//       <Button color="primary" onClick={() => setAlertVisibility(true)}>
//         My Button
//       </Button>
//     </div>
//   );
// }

// export default App;

// import { SlCalender } from 'react-icons/sl';

// function App() {
//   return (
//     <div>
//       <SlCalender color="red" size="50px" />
//     </div>
//   );
// }

// export default App;
import Like from './components/Like';

function App() {
  return (
    <div>
      <Like />
    </div>
  );
}

export default App;
