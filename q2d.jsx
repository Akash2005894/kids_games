db.employee.updateOne(
  { Eno: "B101_1" },
  {
    $set: {
      Name: "Rahul",
      DOJ: "08-Sep-2025",
      experience: 12
    }
  }
)
