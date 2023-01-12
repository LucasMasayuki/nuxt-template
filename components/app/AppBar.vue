<script setup lang="ts">
    import { storeToRefs } from "pinia"
    import useThemeStore from "~~/stores/useThemeStore"

    const storeTheme = useThemeStore()
    const { theme } = storeToRefs(storeTheme)

    const onClick = (): void => {
        storeTheme.toggle()
    }
</script>

<template>
    <v-app-bar color="primary" density="compact">
        <template #prepend>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>REPLACE</v-app-bar-title>

        <template #append>
            <v-btn :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'" @click="onClick">Toggle Theme</v-btn>
        </template>
    </v-app-bar>
</template>
