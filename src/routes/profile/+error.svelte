<script>
    const {data} = $props(); // Svelte 5 import data
   
    const user = data.props?.user; // props - writing select object
    console.log(user)
    async function logout() {
      await fetch('/logout', { method: 'POST' });
      window.location.href = '/registrace';
    }
  </script>

<h1>Nejsi přihlášený</h1>