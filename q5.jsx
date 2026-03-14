function StudentMarks() {
  const marks = [78, 85, 90, 66, 88];

  return (
    <ul>
      {marks.map((m, index) => (
        <li key={index}>Student {index + 1}: {m}</li>
      ))}
    </ul>
  );
}

export default StudentMarks;
