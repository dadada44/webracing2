<script>
    const {data} = $props(); // Svelte 5 import data
   
    const user = data.props?.User1; // props - writing select object
    console.log(user)
    async function logout() {
      await fetch('/logout', { method: 'POST' });
      window.location.href = '/login';
    }
</script>
   
<div>
        <button onclick={logout} >Logout</button>
        <div>
            <p>{user.nickname}</p>
        </div>
</div>
