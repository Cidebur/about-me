<template>
  <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
    <div class="flex-grow-1">
      <h3 class="mb-0">{{ project.heading }}</h3>
      <div class="subheading mb-3">{{ project.subheading }}</div>
      <p>
        {{ project.description }}
      </p>
      <div class="social-icons">
        <a
          v-if="project.demo"
          :href="project.demo"
          target="_blank"
          class="social-icon smaller"
          ><i class="fas fa-link"></i
        ></a>
        <a
          v-if="project.repository"
          :href="project.repository"
          target="_blank"
          class="social-icon smaller"
          ><i class="fab fa-github"></i
        ></a>
      </div>
    </div>
    <div class="flex-shrink-0">
      <span class="text-primary">{{ project.date }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  props: ["project"],
};
</script>

<style scoped>
.smaller {
  font-size: 1rem !important;
  width: 2rem;
  height: 2rem;
}
</style>
