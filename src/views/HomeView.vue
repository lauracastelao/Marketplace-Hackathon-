<script setup>
import {todosFactory} from '../todosSetup'

const {todosIncompleted, todosCompleted, toggle} = todosFactory();
</script>

<template>
  <h3>Cursos</h3>
  <!-- <ul id="incomplete-tasks">
    <li v-for="todo in todosIncompleted" :key="todo.id" @click="toggle(todo.id)">
      <label>{{ todo.name }}</label>
      <p>{{todo.description}}</p>
      <label>{{todo.coformador}}</label>
    </li>
  </ul> -->
</template>

<style>
</style>
