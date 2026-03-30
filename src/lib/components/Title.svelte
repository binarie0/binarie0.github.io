<script lang="ts">
  const validCharacters = "ertuoasdfhklzxcvbnERTYUIOPASDFGHJKLZXCVB123456890";
  let { text = "Hello World" } = $props();
  let currentText = $state(text);
  const wackifyText = () => {
    const count = 4;
    let loopCount = 0;
    let interval = setInterval(() => {
      loopCount++;
      let str = "";
      for (let i = 0; i < currentText.length; i++) {
        str +=
          validCharacters[Math.floor(Math.random() * validCharacters.length)];
      }

      currentText = str;

      if (loopCount > count) {
        currentText = text;
        clearInterval(interval);
      }
    }, 50);
  };
</script>

<h1 onmouseenter={wackifyText}>
  {currentText}
</h1>

<style>
  h1 {
    width: 40%;
    height: 350px;
    font-size: 400px;
    font-family: "Ophelia", serif;
    text-shadow: black 0.2rem 0.2rem 1rem;
    margin: 0;
    padding: 0;
    text-align: left;
  }
  @media screen and (max-width: 900px) {
    h1 {
      text-align: center;
      width: 100%;
      height: 80px;
      font-size: 72px;
      text-align: center;
    }
  }
</style>
