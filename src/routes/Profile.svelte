<h3>Profile Page</h3>
<table>
    <tr>
        <td>First name:</td>
        <td>{params.first}</td>
    </tr>
    <tr>
        <td>Last name:</td>
        <td>{params.last}</td>
    </tr>
</table>
<button on:click={pop}>Back</button>
<script>
    import {pop} from 'svelte-spa-router'

    export let params = {}
</script>
