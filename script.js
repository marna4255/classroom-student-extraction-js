document.addEventListener("DOMContentLoaded", () => {
  // The getStudents function
  function getStudents(classroom) {
    let { hasTeachingAssistant, classList } = classroom;
    let teacher, teachingAssistant, students;

    if (hasTeachingAssistant) {
      [teacher, teachingAssistant, ...students] = classList;
    } else {
      [teacher, ...students] = classList;
    }
    return students;
  }

  // Display the students when the button is clicked
  const displayStudents = () => {
    const hasTeachingAssistant = document.querySelector(
      "#hasTeachingAssistant"
    ).checked;
    const classList = ["Rashida", "John", "Roman", "Lisa", "Omair", "Lukas"]; // Sample class list

    const classroom = { hasTeachingAssistant, classList };

    const students = getStudents(classroom);

    const studentsListDiv = document.querySelector("#studentsList");
    studentsListDiv.innerHTML = ""; // Clear any previous list

    if (students.length > 0) {
      students.forEach((student) => {
        const studentDiv = document.createElement("div");
        studentDiv.classList.add("student");
        studentDiv.textContent = student;
        studentsListDiv.appendChild(studentDiv);
      });
    } else {
      studentsListDiv.textContent = "No students found.";
    }
  };

  // Event listener for the button click
  document
    .querySelector("#getStudentsBtn")
    .addEventListener("click", displayStudents);
});
