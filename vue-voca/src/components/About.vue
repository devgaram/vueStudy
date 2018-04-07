<template>
  <div class="about">
    <h1>Hello, {{ their_name }} This is an about page</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali...</p>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      their_name: this.$route.params.name   //동적 세그먼트의 값은 this.$route.params로 표시된다.
    }
  }
}
</script>