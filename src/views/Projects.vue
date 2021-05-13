<template>
  <section class="resume-section" id="projects">
    <div class="resume-section-content">
      <h2 class="mb-5">Projects</h2>
      <ProjectCard
        v-for="project in projects"
        v-bind:key="project.index"
        :project="project"
      />
    </div>
  </section>
</template>

<script>
import ProjectCard from "../components/ProjectCard.vue";
export default {
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects: [],
    };
  },
  methods: {
    async fetchProjects() {
      const res = await fetch(
        "https://cidebur-test-app.herokuapp.com/projects"
      );
      const data = await res.json();
      console.log(data);
      return data.projects;
    },
  },
  async created() {
    this.projects = await this.fetchProjects();
  },
};
</script>
