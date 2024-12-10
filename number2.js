function getTopStudents(students) {
    let topStudents = students.filter(function(student) {
      return student.score > 75;
    });
  
    let names = topStudents.map(function(student) {
      return student.name;
    });
  
    names.sort();
  
    return names;
  }

  let students = [
    { name: "Alice", score: 80 },
    { name: "Bob", score: 70 },
    { name: "Charlie", score: 90 },
    { name: "Dave", score: 60 }
  ];
  
  console.log(getTopStudents(students));
  