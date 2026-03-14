const checkGrade = () => {
  if (totalSalary >= 10000 && totalSalary <= 20000) setGrade("A");
  else if (totalSalary <= 30000) setGrade("B");
  else if (totalSalary <= 40000) setGrade("C");
  else if (totalSalary > 40000) setGrade("EXC");
};
