import { ref } from 'vue'
function useCount () {
  const count = ref(0)

  const handClick = () => {
    count.value--
  }

  const handreduce = () => {
    count.value++
  }

  return {
    count,
    handClick,
    handreduce
  }
}

export {
  useCount
}
