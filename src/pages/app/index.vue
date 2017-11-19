<template>
    <div id="app">
        <page-header></page-header>
        <main class="container">
            <transition name="fade">
                <router-view></router-view>
            </transition>
        </main>
        <page-footer></page-footer>
    </div>
</template>
<script lang="ts" src="./index.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>
