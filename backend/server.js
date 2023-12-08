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
app.listen(port, () => console.log("Listening on port: ", { port }));

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

//Rafael admin page

//Bishal student page
import express from "express";
import cors from "cors";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

// Fetch courses from the JSON file
const getCourses = () => {
  const coursesData = fs.readFileSync("courses.json", "utf-8");
  return JSON.parse(coursesData).courses;
};

// Save updated user data to the JSON file
const saveUsers = (userData) => {
  try {
    fs.writeFileSync("users.json", JSON.stringify(userData, null, 2));
  } catch (error) {
    console.error(error);
  }
};

// Endpoint to fetch available courses
app.get("/api/courses", (req, res) => {
  try {
    const courses = getCourses();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

// Endpoint to register for a course
app.post("/api/register-course", (req, res) => {
  try {
    const { courseId, userId } = req.body; // Assuming frontend sends courseId and userId for registration

    // Load users data from a JSON file (or database)
    const usersData = fs.existsSync("users.json")
      ? JSON.parse(fs.readFileSync("users.json", "utf-8"))
      : [];

    // Find the user by userId
    const user = usersData.find((user) => user.id === userId);

    if (user) {
      // Check if the course exists in the courses data
      const courses = getCourses();
      const courseExists = courses.find((course) => course.code === courseId);

      if (courseExists) {
        // Add the courseId to the user's enrolledCourses (assuming it's an array in user object)
        if (!user.enrolledCourses) {
          user.enrolledCourses = [];
        }
        user.enrolledCourses.push(courseId);

        // Save the updated user data
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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//Gabriele admin form and student form
