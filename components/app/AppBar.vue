<template>
    <v-card
      class="mx-auto"
      max-width="448"
    >
      <v-layout>
        <v-app-bar
          color="primary"
          density="compact"
        >
          <template #prepend>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
          </template>

          <v-app-bar-title>REPLACE</v-app-bar-title>

          <template #append>
            <v-btn icon="mdi-dots-vertical"></v-btn>
          </template>
        </v-app-bar>

        <v-main>
          <v-container fluid>
            <v-row dense>
              <v-col
                v-for="n in 8"
                :key="n"
                cols="3"
              >
                <v-sheet
                  color="grey-lighten-2"
                  height="96"
                ></v-sheet>
              </v-col>
            </v-row>
          </v-container>
        </v-main>
      </v-layout>
    </v-card>
  </template>