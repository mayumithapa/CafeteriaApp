// import React, { useState } from 'react';
// import './index.css';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import { Divider, Box } from '@mui/material';

// const Receipt = ({ selectedData }) => {
//   const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);

//   const confirmOrder = () => {
//     setIsOrderConfirmed(true);
//   };

//     // Calculate totals
//     const totalEmployees = selectedData.length;
//     const totalQuantity = selectedData.reduce((sum, row) => 
//       sum + row.foodItems.reduce((itemSum, item) => itemSum + item.count, 0)
//     , 0);
//     const totalCost = selectedData.reduce((sum, row) => sum + row.totalCost, 0);

//   return (
//     <>
//       <br />
//       <Box>
//         <Divider sx={{ borderBottomWidth: 2, borderColor: "#7d6b56" }} />
//       </Box>
//       <br />
//       <h2 align='center'>Receipt</h2>
//       <TableContainer component={Paper} sx={{ margin: 'auto', minWidth: 400, maxWidth: 1000 }}>
//         <Table sx={{ minWidth: 400, maxWidth: 1000 }} aria-label="receipt table">
//           <TableHead>
//             <TableRow>
//               <TableCell align='center' sx={{ fontWeight: 'bold', color: '#7d6b56', fontSize: 17 }}>Employee Name</TableCell>
//               <TableCell align="center" sx={{ fontWeight: 'bold', color: '#7d6b56', fontSize: 17 }}>Food Items</TableCell>
//               <TableCell align="center" sx={{ fontWeight: 'bold', color: '#7d6b56', fontSize: 17 }}>Quantity</TableCell>
//               <TableCell align="center" sx={{ fontWeight: 'bold', color: '#7d6b56', fontSize: 17 }}>Cost</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {selectedData.map((row, index) => (
//               <TableRow key={index}>
//                 <TableCell component="th" scope="row" align='center' sx={{ color: '#7d6b56', fontSize: 16 }}>
//                   {row.employee ? row.employee.name : ""}
//                 </TableCell>
//                 <TableCell align="center" sx={{ color: '#7d6b56', fontSize: 16 }}>
//                   {row.foodItems.map(item => `${item.title} x${item.count}`).join(", ")}
//                 </TableCell>
//                 <TableCell align="center" sx={{ color: '#7d6b56', fontSize: 16 }}>
//                   {row.foodItems.reduce((total, item) => total + item.count, 0)}
//                 </TableCell>
//                 <TableCell align="center" sx={{ color: '#7d6b56', fontSize: 16 }}>{`₹${row.totalCost}`}</TableCell>
//               </TableRow>
//             ))}
//             <TableRow>
//               <TableCell align='center' sx={{ fontWeight: 'bold', color: '#7d6b56', fontSize: 16 }}>Total Employees: {totalEmployees}</TableCell>
//               <TableCell align="center" sx={{ fontWeight: 'bold', color: '#7d6b56', fontSize: 16 }}>-</TableCell>
//               <TableCell align="center" sx={{ fontWeight: 'bold', color: '#7d6b56', fontSize: 16 }}>Total Quantity: 
//                 {totalQuantity}
//               </TableCell>
//               <TableCell align="center" sx={{ fontWeight: 'bold', color: '#7d6b56', fontSize: 16 }}>Total Cost:{` ₹${totalCost}`}</TableCell>
//             </TableRow>
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <br />
//       <div style={{ display: 'flex', justifyContent: 'center' }} onClick={confirmOrder}>
//         <button id="reset-btn" type="button" className="btn btn-outline-success" align='center'>
//           CONFIRM ORDER
//         </button>
//         <button id="reset-btn" type="button" className="btn btn-outline-success" align='center'>
//           RESET DATABASE
//         </button>
//       </div>
//       <br />
//       <p style={{
//         fontWeight: 800, fontSize: 20,
//         visibility: isOrderConfirmed ? 'visible' : 'hidden',
//         textAlign: 'center', color: '#7d6b56'
//       }}>
//         Your Order Has Been Confirmed!
//       </p>
//     </>
//   );
// };

// export default Receipt;

// import React, { useState } from 'react';
// import './index.css';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import { Divider, Box } from '@mui/material';

// const Receipt = ({ selectedData }) => {
//   const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);

//   const confirmOrder = () => {
//     setIsOrderConfirmed(true);
//   };

//     // Calculate totals
//     const totalEmployees = selectedData.length;
//     const totalQuantity = selectedData.reduce((sum, row) => 
//       sum + row.foodItems.reduce((itemSum, item) => itemSum + item.count, 0)
//     , 0);
//     const totalCost = selectedData.reduce((sum, row) => sum + row.totalCost, 0);

//   return (
//     <>
//       <br />
//       <Box>
//         <Divider sx={{ borderBottomWidth: 2, borderColor: "#7d6b56" }} />
//       </Box>
//       <br />
//       <h2 align='center'>Receipt</h2>
//       <TableContainer component={Paper} sx={{ margin: 'auto', minWidth: 400, maxWidth: 1000 }}>
//         <Table sx={{ minWidth: 400, maxWidth: 1000 }} aria-label="receipt table">
//           <TableHead>
//             <TableRow>
//               <TableCell align='center' sx={{ fontWeight: 'bold', color: '#7d6b56', fontSize: 17 }}>Employee Name</TableCell>
//               <TableCell align="center" sx={{ fontWeight: 'bold', color: '#7d6b56', fontSize: 17 }}>Food Items</TableCell>
//               <TableCell align="center" sx={{ fontWeight: 'bold', color: '#7d6b56', fontSize: 17 }}>Quantity</TableCell>
//               <TableCell align="center" sx={{ fontWeight: 'bold', color: '#7d6b56', fontSize: 17 }}>Cost</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {selectedData.map((row, index) => (
//               <TableRow key={index}>
//                 <TableCell component="th" scope="row" align='center' sx={{ color: '#7d6b56', fontSize: 16 }}>
//                   {row.employee ? row.employee.name : ""}
//                 </TableCell>
//                 <TableCell align="center" sx={{ color: '#7d6b56', fontSize: 16 }}>
//                   {row.foodItems.map(item => `${item.title} x${item.count}`).join(", ")}
//                 </TableCell>
//                 <TableCell align="center" sx={{ color: '#7d6b56', fontSize: 16 }}>
//                   {row.foodItems.reduce((total, item) => total + item.count, 0)}
//                 </TableCell>
//                 <TableCell align="center" sx={{ color: '#7d6b56', fontSize: 16 }}>{`₹${row.totalCost}`}</TableCell>
//               </TableRow>
//             ))}
//             <TableRow>
//               <TableCell align='center' sx={{ fontWeight: 'bold', color: '#7d6b56', fontSize: 16 }}>Total Employees: {totalEmployees}</TableCell>
//               <TableCell align="center" sx={{ fontWeight: 'bold', color: '#7d6b56', fontSize: 16 }}>-</TableCell>
//               <TableCell align="center" sx={{ fontWeight: 'bold', color: '#7d6b56', fontSize: 16 }}>Total Quantity: 
//                 {totalQuantity}
//               </TableCell>
//               <TableCell align="center" sx={{ fontWeight: 'bold', color: '#7d6b56', fontSize: 16 }}>Total Cost:{` ₹${totalCost}`}</TableCell>
//             </TableRow>
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <br />
//       <div style={{ display: 'flex', justifyContent: 'center' }} onClick={confirmOrder}>
//         <button id="reset-btn" type="button" className="btn btn-outline-success" align='center'>
//           CONFIRM ORDER
//         </button>
//         <button id="reset-btn" type="button" className="btn btn-outline-success" align='center'>
//           RESET DATABASE
//         </button>
//       </div>
//       <br />
//       <p style={{
//         fontWeight: 800, fontSize: 20,
//         visibility: isOrderConfirmed ? 'visible' : 'hidden',
//         textAlign: 'center', color: '#7d6b56'
//       }}>
//         Your Order Has Been Confirmed!
//       </p>
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

const Receipt = ({ selectedData, onResetDatabase }) => { // Added `onResetDatabase` prop
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);

  const confirmOrder = () => {
    if (totalQuantity===0) {
      setIsOrderConfirmed(false);
    }
    else{
      setIsOrderConfirmed(true);
    }
  };

  // Calculate totals
  const totalEmployees = selectedData.length;
  const totalQuantity = selectedData.reduce((sum, row) => 
    sum + row.foodItems.reduce((itemSum, item) => itemSum + item.count, 0)
  , 0);
  const totalCost = selectedData.reduce((sum, row) => sum + row.totalCost, 0);

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
              <TableCell align='center' sx={{ fontWeight: 'bold', color: '#7d6b56', fontSize: 17 }}>Employee Name</TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold', color: '#7d6b56', fontSize: 17 }}>Food Items</TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold', color: '#7d6b56', fontSize: 17 }}>Quantity</TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold', color: '#7d6b56', fontSize: 17 }}>Cost</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {selectedData.map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row" align='center' sx={{ color: '#7d6b56', fontSize: 16 }}>
                  {row.employee ? row.employee.name : ""}
                </TableCell>
                <TableCell align="center" sx={{ color: '#7d6b56', fontSize: 16 }}>
                  {row.foodItems.map(item => `${item.name} x${item.count}`).join(", ")}
                </TableCell>
                <TableCell align="center" sx={{ color: '#7d6b56', fontSize: 16 }}>
                  {row.foodItems.reduce((total, item) => total + item.count, null)}
                </TableCell>
                              <TableCell align="center" sx={{ fontWeight: 'bold', color: '#7d6b56', fontSize: 16 }}>
                {totalCost !== 0 ? `₹${row.totalCost}` : ""}
              </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell align='center' sx={{ fontWeight: 'bold', color: '#7d6b56', fontSize: 16 }}>Total Employees: {totalEmployees}</TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold', color: '#7d6b56', fontSize: 16 }}>-</TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold', color: '#7d6b56', fontSize: 16 }}>Total Quantity: 
                {totalQuantity}
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold', color: '#7d6b56', fontSize: 16 }}>Total Cost:{` ₹${totalCost}`}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button id="reset-btn" type="button" className="btn btn-outline-success" align='center' onClick={confirmOrder}>
          CONFIRM ORDER
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
