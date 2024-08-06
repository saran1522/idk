<script>
  import { z } from "zod";
  let firstName = "";
  let lastName = "";
  let email = "";
  let password = "";
  let emailError = "";
  let passwordError = "";
  const validationSchema = z.object({
    email: z.string().min(1).email(),
    password: z.string().min(8),
  });
  function validateEmail() {
    try {
      validationSchema.shape.email.parse(email);
      emailError = "";
    } catch (error) {
      emailError = "Invalid Email!";
    }
  }
  function validatePassword() {
    try {
      validationSchema.shape.password.parse(password);
      passwordError = "";
    } catch (error) {
      passwordError = "Password should be a minimum of 8 characters!";
    }
  }
  function handleSubmit() {
    validateEmail();
    validatePassword();
    if (!emailError && !passwordError) {
      console.log("Form submitted successfully!");
    }
  }
</script>

<div class="container">
  <div class="card">
    <h2>Sign Up</h2>
    <form on:submit|preventDefault={handleSubmit}>
      <input
        type="text"
        bind:value={firstName}
        placeholder="First Name"
        required
      />
      <input
        type="text"
        bind:value={lastName}
        placeholder="Last Name"
        required
      />
      <input
        type="email"
        bind:value={email}
        on:input={validateEmail}
        placeholder="Email"
        required
      />
      {#if emailError}
        <p class="error">Invalid Email</p>
      {/if}
      <input
        type="password"
        bind:value={password}
        placeholder="Password"
        on:input={validatePassword}
        required
      />
      {#if passwordError}
        <p class="error">{passwordError}</p>
      {/if}
      <button type="submit">Sign Up</button>
    </form>
    <div class="divider">
      <span>OR</span>
    </div>
    <button class="google-btn" on:click={handleGoogleSignup}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        width="18px"
        height="18px"
      >
        <path
          fill="#FFC107"
          d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
        />
        <path
          fill="#FF3D00"
          d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
        />
        <path
          fill="#4CAF50"
          d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
        />
        <path
          fill="#1976D2"
          d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
        />
      </svg>
      Sign up with Google
    </button>
  </div>
</div>

<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f2f5;
  }
  .error {
    color: red;
    font-size: 0.8rem;
    margin-top: -0.5rem;
  }
  .card {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 2rem;
    width: 100%;
    max-width: 400px;
    aspect-ratio: 1 / 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform 0.3s ease;
  }

  .card:hover {
    transform: translateY(-5px);
  }

  h2 {
    text-align: center;
    color: #1a73e8;
    margin-bottom: 1rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  input {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
  }

  button {
    background-color: #1a73e8;
    color: white;
    border: none;
    padding: 0.5rem;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #1557b0;
  }

  .divider {
    display: flex;
    align-items: center;
    text-align: center;
    margin: 1rem 0;
  }

  .divider::before,
  .divider::after {
    content: "";
    flex: 1;
    border-bottom: 1px solid #ccc;
  }

  .divider span {
    padding: 0 0.5rem;
    color: #777;
  }

  .google-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background-color: white;
    color: #757575;
    border: 1px solid #ccc;
  }

  .google-btn:hover {
    background-color: #f1f3f4;
  }

  .google-btn svg {
    width: 18px;
    height: 18px;
  }
</style>
