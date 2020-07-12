<h3>Home Page</h3>
<input bind:value={first}>
<input bind:value={last}>
<br>
Go to <a href={`#/profile/${first}/${last}`}>Profile Page</a>
<br>
Go to <a href="#/not-exist?question=answer&answer=42">the ultimate answer</a>
<script>
    export let first = 'Alice'
    export let last = 'Wong'
</script>
