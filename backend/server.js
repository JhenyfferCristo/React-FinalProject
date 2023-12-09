import express, { json } from "express";
import sql from "mssql";
import cors from "cors";
import fs from "fs";
import { v4 as uuidv4 } from "uuid"; //uuid library to generates user IDs


const app = express();
const port = 5000;

const sqlConnection = {
  server: "localhost",
  user: "user",
  password: "user",
  database: "bowCourseRegistration",
  options: {
    trustServerCertificate: true,
  },
};

app.use(json());
app.use(cors());


//Jhenyffer login and signup

//read and return user information from json file
const getAllUsers = () => {
  if (fs.existsSync("users.json")) {
    const userData = fs.readFileSync("users.json", "utf-8");
    return JSON.parse(userData);
  }
  return [];
};

//saving user into json file
const saveUsers = (userData) => {
  try {
    fs.writeFileSync("users.json", JSON.stringify(userData, null, 2));
  } catch (error) {
    console.error(error);
  }
};

//POST-Signup to  get user from FE and save into users.json
app.post("/signup", (req, res) => {
  try {
    const userData = getAllUsers();
    let userMatched = userData.find((user) => req.body.email === user.email);
    if (!userMatched) {
      let newUser = {
        id: uuidv4(),
        role: "student",
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        dob: req.body.dob,
        department: req.body.department,
        program: req.body.program,
        userName: req.body.userName,
        password: req.body.password,
      };

      userData.push(newUser); // sending the new user in the users.json
      saveUsers(userData); //saving into json
      res.json(newUser);
    } else {
      res.status(409).json({ message: "User already exist" }); //error if email already exist
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//POST-Login to verify if user information is correct
app.post("/login", async (req, res) => {
  try {
    const userData = getAllUsers();
    let userMatched = userData.find(
      (user) => req.body.userName === user.userName
    );
    if (userMatched) {
      let submittedPassword = req.body.password;
      let storedPassword = userMatched.password;
      if (submittedPassword === storedPassword) {
        res.json(userMatched);
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  } //catch intern errors, getAllUsers functions errors for ex.
});


//RAFAEL admin page

//read and return course information from json file
const getAllCourses = () => {
  if (fs.existsSync("users.json")) {
    const userData = fs.readFileSync("users.json", "utf-8");
    return JSON.parse(jsonData);
    return data.courses || [];
  }
  return [];
};


//saving course data into json file
const saveCourses = (courses) => {
  try {
    const jsonData = fs.existsSync("users.json") ? fs.readFileSync("users.json", "utf-8") : '{}';
    const data = JSON.parse(jsonData);
    data.courses = courses; // Update the courses array
    fs.writeFileSync("users.json", JSON.stringify(data, null, 2));
  } catch (error) {
    console.error(error);
  }
};

// Delete course
app.delete('/api/courses/:id', (req, res) => {
  const { id } = req.params;
  const courses = getAllCourses();
  const filteredCourses = courses.filter(course => course.id !== id);
  saveCourses(filteredCourses); // Saving the updated courses array back to users.json
  res.status(200).json({ message: `Course with id ${id} has been deleted.` });
});


// addCourse to  get course info and save into users.json
app.post("/courses", (req, res) => {
  try {
    const courseData = getAllCourses();
    let userMatched = courseData.find((course) => req.body.courseCode === course.courseCode);
    if (!userMatched) {
      let newCourse = {
        id: uuidv4(),
        role: "admin",
        courseName: req.body.courseName,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        courseCode: req.body.courseCode,
        department: req.body.department,
        description: req.body.userName,
        term: req.body.password,
        program: req.body.program,
        fees: req.body.fees,
      };

      courseData.push(newCourse); // sending the new user in the users.json
      saveUsers(courseData); //saving into json
      res.json(newCourse);
    } else {
      res.status(409).json({ message: "Course already exists" }); //error if course code already exist
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



//Bishal student page

const getCourses = () => {
  try {
    const coursesData = fs.readFileSync("courses.json", "utf-8");
    return JSON.parse(coursesData).courses;
  } catch (error) {
    console.error(error);
    return [];
  }
};


app.get("/api/courses", (req, res) => {
  try {
    const courses = getCourses();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/api/register-course", (req, res) => {
  try {
    const { courseId, userId } = req.body;

    const usersData = fs.existsSync("users.json")
      ? JSON.parse(fs.readFileSync("users.json", "utf-8"))
      : [];

    const user = usersData.find((user) => user.id === userId);

    if (user) {
      const courses = getCourses();
      const courseExists = courses.find((course) => course.code === courseId);

      if (courseExists) {
        if (!user.enrolledCourses) {
          user.enrolledCourses = [];
        }
        user.enrolledCourses.push(courseId);

        saveUsers(usersData);

        res.json({ message: "Course registered successfully" });
      } else {
        res.status(404).json({ message: "Course not found" });
      }
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(port, () => {console.log(`Server is running on port ${port}`);
});

//Gabriele admin form and student form
