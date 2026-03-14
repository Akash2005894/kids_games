const checkBonus = () => {
  let rate = 0;
  if (grade === "A") rate = 0.15;
  else if (grade === "B") rate = 0.12;
  else if (grade === "C") rate = 0.06;
  else if (grade === "EXC") rate = 0.05;

  setBonus(basic * rate);
};
