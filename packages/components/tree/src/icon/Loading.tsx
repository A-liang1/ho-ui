import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Loading',
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" class="loading">
        <path d="M25 5 A20 20 0 0 1 45 25" fill="none" stroke="#000" stroke-width="4"></path>
        <path d="M25 5 A20 20 0 0 0 45 25" fill="none" stroke="#fff" stroke-width="4"></path>
      </svg>
    )
  },
})
