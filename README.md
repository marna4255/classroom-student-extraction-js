# Classroom Student Extraction

This project contains a JavaScript function that extracts a list of students from a classroom object. It handles cases where the classroom might have a teaching assistant and returns only the list of students.

## Technologies Used

- **JavaScript**: The primary programming language used for the logic.
- **Destructuring**: Both object and array destructuring were used to extract values from the `classroom` object and the `classList` array.

## How It Works

The function `getStudents` accepts an object (`classroom`) with the following properties:

- `hasTeachingAssistant` (boolean): Indicates whether there is a teaching assistant.
- `classList` (array): A list of people in the classroom, where the first element is the teacher, the second is the teaching assistant (if any), and the rest are students.

The function returns a list of students:

- If there is a teaching assistant, the first element is the teacher, the second is the teaching assistant, and the rest are the students.
- If there is no teaching assistant, the second element onward are treated as students.

## Example Usage

```javascript
console.log(
  getStudents({
    hasTeachingAssistant: false,
    classList: ["Rashida", "John", "Roman", "Lisa", "Omair", "Lukas"],
  })
);
// Output: ["John", "Roman", "Lisa", "Omair", "Lukas"]
```

### **Steps to download from GitHub:**

    **Clone the repository** to your local machine (if not done already):

bash
git clone https://github.com/marna4255/classroom-student-extraction-js.git
