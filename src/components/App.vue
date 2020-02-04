<template>
    <app-template v-on:mensagem-alerta="this.mensagemAlerta">
        <router-view></router-view>
    </app-template>
</template>

<script>
import Template from './layout/AppTemplate'

export default {

    components: {
        'app-template': Template
    },

    methods: {
        mensagemAlerta() {
            console.log('App.vue recebeu mensagem-alerta')
        }
    }
    
}
</script>