<!-- <template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->
<!-- <template>
  <div id="app">
    <ProjectsList />
  </div>
</template>

<script>
import ProjectsList from './components/ProjectList.vue';

export default {
  name: 'App',
  components: {
    ProjectsList, 
  },
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  margin: 0;
  padding: 0;
}

h1 {
  color: #333;
}

form {
  margin-bottom: 20px;
}

input {
  margin-right: 10px;
}

button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  background-color: white;
  margin: 10px 0;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style> -->

<!-- <template>
  <div id="app">
    <ProjectsList />
  </div>
</template>

<script>
import ProjectsList from './components/ProjectList.vue';

export default {
  name: 'App',
  components: {
    ProjectsList, 
  },
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  margin: 0;
  padding: 0;
}

h1 {
  color: #333;
}

form {
  margin-bottom: 20px;
}

input {
  margin-right: 10px;
}

button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  background-color: white;
  margin: 10px 0;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style> -->

<template>
  <div id="app">
    <header>
      <nav>
        <h1>Mijn Portfolio</h1>
        <ul class="nav-links">
          <li><a href="#about">Over Mij</a></li>
          <li><a href="#projects">Projecten</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <section id="about" class="about">
        <h2>Over Mij</h2>
        <p>
          Welkom op mijn portfolio! Ik ben Yilmaz, tweedejaarsstudent op het Da Vinci College.  een creatieve ontwikkelaar die houdt van
          het bouwen van gebruiksvriendelijke en moderne websites.
        </p>
      </section>
      <section id="projects" class="projects">
        <h2>Mijn Projecten</h2>
        <ProjectsList />
      </section>
    </main>
    <footer>
      <p>&copy; 2025 Yilmaz.</p>
    </footer>
  </div>
</template>

<script>
import ProjectsList from './components/ProjectList.vue';

export default {
  name: 'App',
  components: {
    ProjectsList,
  },
};
</script>

<style>
/* Algemene instellingen */
body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
  color: #333;
  line-height: 1.6;
  background: #f9f9f9;
}

/* Navigatiebalk */
header {
  background: #4CAF50;
  color: #fff;
  padding: 1em 0;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: auto;
  padding: 0 20px;
}

nav h1 {
  font-size: 2rem;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  padding: 0;
  margin: 0;
}

.nav-links li {
  margin: 0;
}

.nav-links a {
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #ddd;
}

/* Over mij sectie */
.about {
  background: white;
  padding: 2em 1em;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 1em auto;
  max-width: 800px;
  border-radius: 8px;
}

.about h2 {
  color: #4CAF50;
}

.about p {
  font-size: 1.1rem;
  margin: 0.5em 0 0;
}

/* Projecten sectie */
.projects {
  max-width: 1200px;
  margin: auto;
  padding: 2em 1em;
}

.projects h2 {
  color: #4CAF50;
  text-align: center;
  margin-bottom: 1em;
}

.projects ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5em;
  list-style: none;
  padding: 0;
}

.projects li {
  background: white;
  padding: 1em;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.projects li:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
}

/* Footer */
footer {
  text-align: center;
  background: #333;
  color: #f9f9f9;
  padding: 1em 0;
}

footer p {
  margin: 0;
  font-size: 0.9rem;
}
</style>
