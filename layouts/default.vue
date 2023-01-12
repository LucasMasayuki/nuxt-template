<script setup lang="ts">
import AppBar from '@/components/app/AppBar.vue'
import AppFooter from '@/components/app/AppFooter.vue'
</script>

<template>
    <div>
        <v-navigation-drawer></v-navigation-drawer>

        <AppBar />

        <v-main>
            <slot></slot>
        </v-main>
        <AppFooter />
    </div>
</template>