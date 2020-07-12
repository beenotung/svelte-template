<script>
    import Calc from "./state/Calc.svelte";
    import Store from "./state/Store.svelte";
    import Router from 'svelte-spa-router'
    import routes from './routes'

    export let name;
</script>

<main>
    <h1>Hello {name}!</h1>
    <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
    <div class="demo">
        <h2>State Management</h2>
        <Calc/>
        <Store/>
    </div>
    <div class="demo">
        <h2>
            Routing
            <Router {routes}></Router>
        </h2>
    </div>
</main>

<style>
    .demo {
        border: 1px solid #ff3e00;
    }

    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>
