import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Switcher',
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g transform="translate(24, 0) scale(-1, 1)">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
        </g>
      </svg>
    )
  },
})
