<script>
  let email = "";
  let name = "";
  let isValidEmail = true;
  let submitted = false;

  function validateEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    isValidEmail = emailRegex.test(email);
  }

  function handleSubmit() {
    validateEmail();
    if (isValidEmail && name.trim() !== "") {
      submitted = true;
      console.log("Name submitted:", name);
      console.log("Email submitted:", email);
      // Here you would typically send the name and email to your server
    }
  }
</script>

<main>
  <h3>Welcome coder, kindly enter your details below!</h3>
  <div class="input-container">
    <label for="name">Name:</label>
    <input
      id="name"
      type="text"
      bind:value={name}
      placeholder="Enter your name"
      class="input input-bordered w-full max-w-xs"
      required
    />
  </div>
  <div class="input-container">
    <label for="email">Email:</label>
    <input
      id="email"
      type="email"
      bind:value={email}
      on:input={validateEmail}
      placeholder="Enter your email"
      class="input input-bordered w-full max-w-xs"
      class:invalid={!isValidEmail && email !== ""}
      required
    />
    {#if !isValidEmail && email !== ""}
      <p class="error-message">Please enter a valid email address</p>
    {/if}
  </div>
  <button class="btn btn-ghost" on:click={handleSubmit}>Submit</button>
  {#if submitted}
    <p class="success-message">Thank you for submitting your details!</p>
  {/if}
</main>

<style>
  body {
    background: linear-gradient(135deg, #00416a, #e4e5e6, #00416a);
    background-size: 400% 400%;
    animation: gradientBG 15s ease infinite;
    margin: 0;
    padding: 0;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  @keyframes gradientBG {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }

  h3 {
    color: #333;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    text-align: center;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  }

  .input-container {
    margin-bottom: 1.5rem;
    width: 100%;
    max-width: 300px;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
    color: #333;
  }

  .input {
    width: 100%;
    padding: 0.75rem;
    border: 2px solid #ccc;
    border-radius: 8px;
    font-size: 1rem;
    transition:
      border-color 0.3s ease,
      box-shadow 0.3s ease;
  }

  .input:focus {
    outline: none;
    border-color: #4caf50;
    box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
  }

  .input.invalid {
    border-color: #f44336;
    box-shadow: 0 0 5px rgba(244, 67, 54, 0.5);
  }

  .btn {
    background-color: #4caf50;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 8px;
    transition:
      background-color 0.3s ease,
      transform 0.3s ease;
  }

  .btn:hover {
    background-color: #45a049;
    transform: scale(1.05);
  }

  .btn:active {
    background-color: #388e3c;
    transform: scale(1);
  }

  .error-message {
    color: #f44336;
    font-size: 0.85rem;
    margin-top: 0.5rem;
    text-align: center;
    font-weight: bold;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  }

  .success-message {
    color: #4caf50;
    font-size: 1rem;
    margin-top: 1rem;
    text-align: center;
    font-weight: bold;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  }
</style>
