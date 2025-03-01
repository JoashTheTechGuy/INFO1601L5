//object literal
let bob = {
  fname: "bob",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1603',
      grades: [ 89, 34, 67 ]
    },
    {
      course: 'INFO 1601',
      grades: [ 89, 34, 67 ]
    }
  ]
};

let sally = {
  fname: "sally",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1601',
      grades: [ 100, 89, 79 ]
    }
  ]
};

let paul = {
  fname: "paul",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1600',
      grades: [ 89, 34, 67 ]
    }
  ]
};


const students = [bob, sally, paul];

function getAverageGrade (student, course){
  for(let record of student.transcript){
    if(record.course === course){
      let total = 0;
      for(let grade of record.grades){
        total += grade;
      }
      return total/record.grades.length;
    }
  }
  return -1;
}

function getAssignmentMark (student, course, num){
  for(let record of student.transcript){
    if(record.course === course){
      return record.grades[num - 1];
    }
  }
  return -1;
}

function averageAssessment(students, courseName, assignment) {
  let total = 0;
  let count = 0;

  for (let student of students) {
      for (let record of student.transcript) {
          if (record.course === courseName) {
              if (assignment >= 1 && assignment <= record.grades.length) {
                  total += record.grades[assignment - 1]; // Adjust for zero-based index
                  count++;
              }
          }
      }
  }

  return count > 0 ? total / count : -1;
}