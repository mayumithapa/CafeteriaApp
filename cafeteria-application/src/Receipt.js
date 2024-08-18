import React, { useEffect, useState } from 'react';

const Receipt = () => {
  const [receiptData, setReceiptData] = useState(null);

  useEffect(() => {
    // Retrieve data from local storage
    const storedData = localStorage.getItem('receipt');
    if (storedData) {
      setReceiptData(JSON.parse(storedData));
    }
  }, []);

  if (!receiptData) {
    return <div>No receipt data available</div>;
  }

  const totalCost = receiptData.items.reduce((sum, item) => sum + item.cost, 0);

  return (
    <div>
      <h2>Receipt</h2>
      <p>Employee: {receiptData.employee}</p>
      <ul>
        {receiptData.items.map((item, index) => (
          <li key={index}>
            {item.title} - {item.count} x ${item.cost / item.count} = ${item.cost}
          </li>
        ))}
      </ul>
      <h3>Total: ${totalCost}</h3>
    </div>
  );
};

export default Receipt;
