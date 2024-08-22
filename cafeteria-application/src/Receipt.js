// import React from 'react';
// import './index.css';
// import { useState} from "react";
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import { Divider, Box } from '@mui/material';


// const Receipt = ({ data }) => { // <-- Modified to accept data as a prop
//     const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);
//     const confirmOrder = () => {
//         setIsOrderConfirmed(true);
//     }
//   return (
//     <>    
//     <br></br>
//     <Box><Divider sx={{ borderBottomWidth: 2, borderColor: "#7d6b56" }}/></Box>
//     <br></br>
//     <h2 align='center'>Receipt</h2>
//     <TableContainer component={Paper} sx={{ margin:'auto',minWidth: 400, maxWidth: 1000}}>
//       <Table sx={{ minWidth: 400, maxWidth: 1000}} aria-label="receipt table">
//         <TableHead>
//           <TableRow>
//             <TableCell align='center'>Employee Name</TableCell>
//             <TableCell align="center">Food Items</TableCell>
//             <TableCell align="center">Quantity</TableCell> {/* Added Quantity Column */}
//             <TableCell align="center">Cost</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {data.map((row, index) => (
//             <TableRow key={index}>
//               <TableCell component="th" scope="row" align='center'>
//                 {row.employee ? row.employee.name : ""} {/* Display employee name */}
//               </TableCell>
//               <TableCell align="center">
//               {row.foodItems.map(item => `${item.title} x${item.count}`).join(", ")} {/* Display food items */}
//               </TableCell>
//               <TableCell align="center">
//                 {row.foodItems.reduce((total, item) => total + item.count, 0)} {/* Display quantities */}
//               </TableCell>
//               <TableCell align="center">{`₹${row.totalCost}`}</TableCell> 
              
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer><br/>
//         <div style={{display:'flex', justifyContent:'center'}} onClick={confirmOrder}><button
//           id="reset-btn"
//           type="button"
//           className="btn btn-outline-success"
//           align='center'
//         >
//           CONFIRM ORDER
//         </button>
//         <button
//           id="reset-btn"
//           type="button"
//           className="btn btn-outline-success"
//           align='center'
//         >
//           RESET DATABASE
//         </button></div><br/>
//         <p style={{fontWeight: 800, fontSize: 20,
//             visibility: isOrderConfirmed ? 'visible' : 'hidden',
//             textAlign: 'center'
//             }}>Your Order Has Been Confirmed!</p>
//     </>
//   );
// };

// export default Receipt;


import React, { useState } from 'react';
import './index.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Divider, Box } from '@mui/material';

const Receipt = ({ data }) => {
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);

  const confirmOrder = () => {
    setIsOrderConfirmed(true);
  };

  return (
    <>
      <br />
      <Box>
        <Divider sx={{ borderBottomWidth: 2, borderColor: "#7d6b56" }} />
      </Box>
      <br />
      <h2 align='center'>Receipt</h2>
      <TableContainer component={Paper} sx={{ margin: 'auto', minWidth: 400, maxWidth: 1000 }}>
        <Table sx={{ minWidth: 400, maxWidth: 1000 }} aria-label="receipt table">
          <TableHead>
            <TableRow>
              <TableCell align='center' sx={{ color: '#7d6b56', fontSize: 17 }}>Employee Name</TableCell>
              <TableCell align="center" sx={{ color: '#7d6b56', fontSize: 17 }}>Food Items</TableCell>
              <TableCell align="center" sx={{ color: '#7d6b56', fontSize: 17 }}>Quantity</TableCell>
              <TableCell align="center" sx={{ color: '#7d6b56', fontSize: 17 }}>Cost</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row" align='center' sx={{ color: '#7d6b56', fontSize: 16 }}>
                  {row.employee ? row.employee.name : ""}
                </TableCell>
                <TableCell align="center" sx={{ color: '#7d6b56', fontSize: 16 }}>
                  {row.foodItems.map(item => `${item.title} x${item.count}`).join(", ")}
                </TableCell>
                <TableCell align="center" sx={{ color: '#7d6b56', fontSize: 16 }}>
                  {row.foodItems.reduce((total, item) => total + item.count, 0)}
                </TableCell>
                <TableCell align="center" sx={{ color: '#7d6b56', fontSize: 16 }}>{`₹${row.totalCost}`}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <div style={{ display: 'flex', justifyContent: 'center' }} onClick={confirmOrder}>
        <button id="reset-btn" type="button" className="btn btn-outline-success" align='center'>
          CONFIRM ORDER
        </button>
        <button id="reset-btn" type="button" className="btn btn-outline-success" align='center'>
          RESET DATABASE
        </button>
      </div>
      <br />
      <p style={{
        fontWeight: 800, fontSize: 20,
        visibility: isOrderConfirmed ? 'visible' : 'hidden',
        textAlign: 'center', color: '#7d6b56'
      }}>
        Your Order Has Been Confirmed!
      </p>
    </>
  );
};

export default Receipt;
