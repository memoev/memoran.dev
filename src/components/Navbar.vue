<template>
  <div id="navbar">
    <nav class="navbar navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="/"><strong>{{title}}</strong></a>
        <div id="navbarNav">
            <ul class="nav">
                <li class="nav-item navbar">
                <a href="https://github.com/memoev/memoran.dev"><img class="github" src="../assets/github.png" alt="Github"></a>
                </li>
            </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Navbar',
  computed: {
    ...mapState({
      title: 'title'
    })
  },
  methods: {
    ...mapActions({
      toggleLogIn: 'toggleLogIn'
    }),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#navbar {
  color: #363636;
}

.container {
  width: 80%;
}

.btn {
  margin-top: 0.5em;
}

.github {
  width: 2.5em;
  height: 2.5em;
}

.navbar-light {
  padding: 0.5em;
}
</style>
