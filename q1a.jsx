import React, { useState } from "react";

function SalaryCalculator() {
  const [basic, setBasic] = useState("");
  const [totalSalary, setTotalSalary] = useState(0);

  const calculateSalary = () => {
    const b = Number(basic);
    const da = 0.3 * b;
    const hra = 0.1 * b;
    const sa = 0.05 * b;
    setTotalSalary(b + da + hra + sa);
  };

  return (
    <div>
      <h3>Salary Calculator</h3>
      <input
        type="number"
        placeholder="Enter Basic Pay"
        onChange={(e) => setBasic(e.target.value)}
      />
      <br /><br />
      <button onClick={calculateSalary}>Calculate Salary</button>
      <p>Total Salary: {totalSalary}</p>
    </div>
  );
}

export default SalaryCalculator;
