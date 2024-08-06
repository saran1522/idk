<script>
  let email = "";
  let isValidEmail = true;
  let submitted = false;

  function validateEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    isValidEmail = emailRegex.test(email);
  }

  function handleSubmit() {
    validateEmail();
    if (isValidEmail) {
      submitted = true;
      console.log("Email submitted:", email);
      // Here you would typically send the email to your server
    }
  }
</script>

<main>
  <h3>Welcome coder, kindly enter your email below!</h3>
  <div class="input-container">
    <input
      type="email"
      bind:value={email}
      on:input={validateEmail}
      placeholder="Type here"
      class="input input-bordered w-full max-w-xs"
      class:invalid={!isValidEmail && email !== ""}
    />
    {#if !isValidEmail && email !== ""}
      <p class="error-message">Please enter a valid email address</p>
    {/if}
  </div>
  <button class="btn btn-ghost" on:click={handleSubmit}>Submit</button>
  {#if submitted}
    <p class="success-message">Thank you for submitting your email!</p>
  {/if}
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    font-family: Arial, sans-serif;
  }

  h3 {
    color: #333;
    margin-bottom: 1rem;
  }

  .input-container {
    margin-bottom: 1rem;
    width: 100%;
    max-width: 300px;
  }

  .input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
  }

  .input:focus {
    outline: none;
    border-color: #4caf50;
  }

  .input.invalid {
    border-color: #f44336;
  }

  .btn {
    background-color: #4caf50;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .btn:hover {
    background-color: #45a049;
  }

  .error-message {
    color: #f44336;
    font-size: 0.8rem;
    margin-top: 0.25rem;
  }

  .success-message {
    color: #4caf50;
    font-size: 1rem;
    margin-top: 1rem;
  }
</style>
