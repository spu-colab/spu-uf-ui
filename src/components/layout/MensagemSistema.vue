<template>
    <div>
        <v-snackbar :value="mensagem" :color="cor" bottom>{{ mensagem }}</v-snackbar>
    </div>
</template>

<script>
import { bus } from '@/main'
export default {
    data() {
        return {
            mensagem: null,
            cor: 'success'
        }
    },
    methods: {
        limparMensagemAposIntervalo () {
            return new Promise(() => {
                setTimeout(() => {
                    this.mensagem = null
                    this.cor = 'success'
                }, 5000)
            })
        },
    },
    mounted() {

        bus.$on('mensagem', (msg) => {
            this.mensagem = msg
            this.cor = 'success'
            this.limparMensagemAposIntervalo();
        })

        bus.$on('mensagem-alerta', (msg) => {
            this.mensagem = msg
            this.cor = 'error'
            this.limparMensagemAposIntervalo();
        })
    }
}
</script>
