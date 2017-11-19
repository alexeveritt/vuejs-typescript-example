
<template lang="html">
<div class="page">
    <h1>{{msg}}</h1>
   <div>
   <button class="waves-effect waves-light btn" v-on:click="incrementValue">Increment Value</button><span class="new badge">{{value}}</span>

</div>
</div>
</template>
<script lang="ts" src="./index.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>