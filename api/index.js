const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cookieParser = require("cookie-parser")
const path = require("path")
const cors = require("cors");

const aboutRoutes = require("./routes/about")
const degreeRoutes = require("./routes/degree")
const clientProjectRoutes = require("./routes/clientProject")
const myProjectRoutes = require("./routes/myProject")
const skillRoutes = require("./routes/skill")
const jobRoutes = require("./routes/myJob")
const featuredSkillRoutes = require("./routes/featuredSkill")
const resumeRoutes = require("./routes/resume")
const mailListRoutes = require("./routes/mailList")

const app = express()
dotenv.config()

const PORT = process.env.PORT || 5000

// const __dirname = path.resolve()

app.use(cors());
app.use(express.json());
app.use(cookieParser())

app.get('/api/test', (req, res) => {
    res.json({
        status: 404,
        message: 'Welcome to my portfolio API!'
    });
})

app.use("/api/about", aboutRoutes);
app.use("/api/education", degreeRoutes);
app.use("/api/client-project", clientProjectRoutes);
app.use("/api/my-project", myProjectRoutes);
app.use("/api/skill", skillRoutes);
app.use("/api/work-experience", jobRoutes);
app.use("/api/featured-skill", featuredSkillRoutes);
app.use("/api/resume", resumeRoutes);
app.use("/api/mail-list", mailListRoutes);

app.use(express.static(path.join(path.resolve(), '/client/dist')))

app.get('*', (req, res) => {
    res.sendFile(path.join(path.resolve(), 'client', 'dist', 'index.html'))
})


app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});

mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to my-portfolio database')
    app.listen(PORT, () => {
        console.log(`Server listening at port ${PORT}`);
    })
})