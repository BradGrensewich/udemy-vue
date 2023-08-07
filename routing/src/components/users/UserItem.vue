<template>
  <li>
    <h3>{{ name }}</h3>
    <div class="role" :class="roleClass">{{ role }}</div>
  </li>
</template>

<script>
export default {
  props: ['name', 'role'],
  computed: {
    roleClass() {
      if (this.role === 'Engineer') {
        return 'role--engineer';
      }
      if (this.role === 'Consultant') {
        return 'role--consultant';
      }
      if (this.role === 'Designer') {
        return 'role--designer';
      }
      if (this.role === 'Lead Engineer') {
        return 'role--lead-engineer';
      }
      return null;
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #ccc;
  padding: 1rem;
}

h3 {
  margin: 0.5rem 0;
}

.role {
  border-radius: 40px;
  background-color: #ccc;
  color: #252525;
  padding: 0.25rem 1rem;
  display: inline-block;
}

.role--engineer {
  background-color: blue;
  color: white;
}

.role--lead-engineer {
  background-color: green;
  color: white;
}

.role--designer {
  background-color: pink;
  color: white;
}

.role--consultant {
  background-color: #af003a;
  color: white;
}
</style>