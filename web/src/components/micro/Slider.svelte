<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let min: number;
    export let max: number;
    export let step: number;
    export let value: number;

    let oldValue: number = value;

    function onChange() {
        if (oldValue !== value) {
            oldValue = value;
            dispatch('change', value);
        }
    }
</script>

<div class="flex items-center justify-center w-full h-[3vh] gap-[0.5vh]">

    <slot name="before" />

    <div class="w-full grid place-items-center h-full btn px-[0.5vh]">
        <input
        class="w-full h-full bg-transparent styled-slider slider-progress"
        type="range"
        id="slider"
        style="--value: {value}; --min: {min}; --max: {max}; --step: {step};"
        {min}
        {max}
        {step}
        bind:value
        on:input={onChange}
    />
    </div>

    <slot name="after" />
</div>

<style>
    input#slider[type='range'].styled-slider.slider-progress {
        --range: calc(var(--max) - var(--min));
        --ratio: calc((var(--value) - var(--min)) / var(--range));
        --sx: calc(0.5 * 0.1vw + var(--ratio) * (100% - 0.1vw));
    }

    input#slider[type='range'] {
        height: 1vw;
        -webkit-appearance: none;
        width: 100%;
    }

    input#slider[type='range']::-webkit-slider-runnable-track {
        width: 100%;
        height: 0.3vw;
        cursor: pointer;
        background: radial-gradient(circle, rgb(74, 94, 38) 0%, rgba(129, 206, 4, 0.795) 100%);
        border-style: solid;
        border-radius: 3px;
        border-width: 0.1px;
        border-color: rgba(134, 164, 77, 0.644);
    }

    input#slider[type='range']::-webkit-slider-thumb {
        height: 0.8vw;
        width: 0.4vw;
        background: rgb(255, 255, 255);
        border-radius: 50px;
        cursor: pointer;
        -webkit-appearance: none;
        margin-top: -0.25vw;
        transition: all 0.1s ease-in-out;
    }

    input#slider[type='range']::-webkit-slider-thumb:hover {
        filter: brightness(110%);
    }

    input#slider[type='range']::-webkit-slider-thumb:hover {
        background: rgb(0, 162, 255);
        filter: drop-shadow(0 0 0.25vw var(--accent));
    }
    input#slider[type='range']::-webkit-progress-value {
        background-color: var(--secondary);
    }
</style>
