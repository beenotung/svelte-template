<script lang="ts">
    import {sum} from "../store";
    import {add} from "./utils";

    let a: number = 4
    let b = 3
    $: c = add(a,b)
    $: sum.set(c)
</script>

<template>
    <h3>Reactive State</h3>
    <input type="number" bind:value={a}>
    <input type="number" bind:value={b}>
    <p>
        {a} + {b} = {a + b}
    </p>
    <p>
        sum = {c}
    </p>
</template>

<style>

</style>
