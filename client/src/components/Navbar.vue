<template>
  <div id="navbar">
    <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="/">{{title}}</a>
        <div id="navbarNav">
            <ul class="nav">
                <li class="nav-item navbar">
                <a href="#"><img class="github" src="../assets/github.png" alt="Github" srcset=""></a>
                </li>
                <li class="nav-item">
                    <button class="btn btn-success" @click="toggleLogIn()">
                      {{ custom }}
                    </button>
                </li>
            </ul>
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
      custom: 'logIn',
      title: 'title'
    })
  },
  methods: {
    ...mapActions({
      toggleLogIn: 'toggleLogIn'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.github {
  width: 2.5em;
  height: 2.5em;
  opacity: 0.3;
}

.navbar-light {
  margin-bottom: 3em;
  padding: 0.5em;
}
</style>
