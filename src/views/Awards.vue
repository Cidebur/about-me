<template>
  <section class="resume-section" id="awards">
    <div class="resume-section-content">
      <h2 class="mb-5">Awards & Certifications</h2>
      <ul class="fa-ul mb-0">
        <li v-for="event in events" v-bind:key="event.index">
          <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
          <ProjectCard :project="event" />
        </li>
      </ul>
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
      events: [],
    };
  },

  methods: {
    async fetchEvents() {
      const res = await fetch("https://cidebur-test-app.herokuapp.com/events");
      const data = await res.json();
      return data.events;
    },
  },
  async created() {
    this.events = await this.fetchEvents();
  },
};
</script>
