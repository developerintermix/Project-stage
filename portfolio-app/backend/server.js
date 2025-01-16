// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// const app = express();
// app.use(cors());
// app.use(express.json());

// mongoose.connect('mongodb://localhost:27017/portfolio', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const projectSchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   link: String,
// });

// const Project = mongoose.model('Project', projectSchema);

// app.get('/projects', async (req, res) => {
//   const projects = await Project.find();
//   res.json(projects);
// });

// app.post('/projects', async (req, res) => {
//   const newProject = new Project(req.body);
//   await newProject.save();
//   res.json(newProject);
// });

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/portfolio', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('Connection error:', err));

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  link: String,
});

const Project = mongoose.model('Project', projectSchema);

app.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).send({ error: 'Failed to fetch projects' });
  }
});

app.post('/projects', async (req, res) => {
  try {
    const newProject = new Project(req.body);
    await newProject.save();
    res.json(newProject);
  } catch (err) {
    res.status(500).send({ error: 'Failed to save project' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
