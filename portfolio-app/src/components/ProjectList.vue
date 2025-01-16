<!-- <template>
    <div>
      <h1>My Projects</h1>
      <form @submit.prevent="addProject">
        <input v-model="newProject.title" placeholder="Title" required />
        <input v-model="newProject.description" placeholder="Description" required />
        <input v-model="newProject.link" placeholder="Link" required />
        <button type="submit">Add Project</button>
      </form>
      <ul>
        <li v-for="project in projects" :key="project._id">
          <h2>{{ project.title }}</h2>
          <p>{{ project.description }}</p>
          <a :href="project.link" target="_blank">View Project</a>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: "ProjectList",
    data() {
      return {
        projects: [],
        newProject: {
          title: '',
          description: '',
          link: '',
        },
      };
    },
    methods: {
      async fetchProjects() {
        const response = await axios.get('http://localhost:3000/ProjectList');
        this.projects = response.data;
      },
      async addProject() {
        const response = await axios.post('http://localhost:3000/ProjectList', this.newProject);
        this.projects.push(response.data);
        this.newProject = { title: '', description: '', link: '' };
      },
    },
    created() {
      this.fetchProjects();
    },
  };
  </script> -->

  <template>
    <div>
      <h1>My Projects</h1>
      <form @submit.prevent="addProject">
        <input v-model="newProject.title" placeholder="Title" required />
        <input v-model="newProject.description" placeholder="Description" required />
        <input v-model="newProject.link" placeholder="Link" required />
        <button type="submit">Add Project</button>
      </form>
      <ul>
        <li v-for="project in projects" :key="project._id">
          <h2>{{ project.title }}</h2>
          <p>{{ project.description }}</p>
          <a :href="project.link" target="_blank">View Project</a>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: "ProjectList",
    data() {
      return {
        projects: [],
        newProject: {
          title: '',
          description: '',
          link: '',
        },
      };
    },
    methods: {
      async fetchProjects() {
        try {
          const response = await axios.get('http://localhost:3000/projects');
          this.projects = response.data;
        } catch (error) {
          console.error('Error fetching projects:', error);
        }
      },
      async addProject() {
        try {
          const response = await axios.post('http://localhost:3000/projects', this.newProject);
          this.projects.push(response.data);
          this.newProject = { title: '', description: '', link: '' };
        } catch (error) {
          console.error('Error adding project:', error);
        }
      },
    },
    created() {
      this.fetchProjects();
    },
  };
  </script>
  
  <style scoped>
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 300px;
  }
  
  input, button {
    padding: 10px;
    font-size: 16px;
  }
  
  button {
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  </style>
  