<template>
    <nav>
        <div class="nav-wrapper">
            <a href="#" class="brand-logo left">Logo</a>
            <ul id="nav-mobile" class="right">
                <li>
                    <router-link to="/">Home</router-link>
                </li>
                <li><router-link to="/page2">Page 2</router-link></li>
            </ul>
        </div>
    </nav>
</template>
<script lang="ts" src="./index.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>