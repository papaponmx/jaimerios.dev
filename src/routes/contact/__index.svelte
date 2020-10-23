<style lang="scss">
  form {
    max-width: 22.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  input,
  textarea {
    font-size: var(--base-font-size);
    width: 100%;
    padding: 0.625rem;
    border: 1px solid var(--napa-color);
    height: calc(var(--spacing-unit) * 1.25);
    border-bottom: 1px solid $mirage-accent-color;
  }

  button {
    font-size: calc(var(--base-font-size) * 1.25);
    border: none;
    border-radius: 0.3125rem;
    padding: calc(var(--spacing-unit) * 0.75);
  }
</style>

<svelte:head>
  <title>Contact</title>
</svelte:head>
<h1>Contact me</h1>
<!-- IDEA: Create this custom form after MVP  -->

<form on:submit|preventDefault="{handleSubmit}">
  <input bind:value="{name}" type="text" placeholder="Name" required />
  <input bind:value="{email}" type="email" placeholder="Email" required />
  <input bind:value="{subject}" type="text" placeholder="Subject" required />
  <textarea
    bind:value="{message}"
    placeholder="How can I help you?"
    required
  ></textarea>
  <button disabled="{!isFormValid}" type="submit">Send</button>
</form>

<script lang="typescript">
  let email;
  let message;
  let name;
  let subject;
  let isFormValid = false;

  const handleSubmit = () => {};

  $: email && message && name && subject ? (isFormValid = true) : null;
</script>
