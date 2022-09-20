import { ref } from "vue";

export default function () {
  const data = ref([]);
  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => console.log(json));
  };
}
