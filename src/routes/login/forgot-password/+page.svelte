<script lang="ts">
	let email = '';
	let notification = '';

	async function handleForgotPassword() {
		const formData = new FormData();
		formData.append('email', email);

		const response = await fetch('/login/forgot-password', {
			method: 'POST',
			body: formData,
		});

		if (response.ok) {
			notification = 'A link to reset your password has been sent to your email. Redirecting to login...';
		} else {
			notification = 'Failed to send the password reset link. Please try again.';
		}
	}
</script>

<div >
	<div>
		<h1>Forgot Password?</h1>
		<form on:submit|preventDefault={handleForgotPassword}>
			<label for="email">Email Address</label>
			<input type="email" bind:value={email} placeholder="Enter your email" required />
			<div>
				<button type="submit" color="green">Send</button>
				<a href="/login" color="grey">Back</a>
			</div>
		</form>
		{#if notification}
			<div>{notification}</div>
		{/if}
	</div>
</div>

