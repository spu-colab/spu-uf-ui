<template>
    <crud 
        nomeEntidade="Usuário" nomeEntidadePlural="Usuários"
        :headers="cabecalhos" :items="registros" :carregando="carregandoRegistros"
        @clicou-item="selecionarParaEdicao" 
        @clicou-salvar="salvar"
        @clicou-cancelar="cancelar"
        @clicou-novo="novo">
        <template slot="detalhe">
            <div v-if="entidadeAtual">
                <h1>formulário</h1>

                {{ entidadeAtual.nome }}
                
                
            </div>
        </template>
        
    </crud>
</template>

<script>
import crud from '@/components/ui/CRUD'
import rotas from '@/RotasServico.js'

export default {
    components: {
        'crud': crud
    },
    data() {
        return {
            cabecalhos: [
                {
                    type: 'filter',
                    text : 'Nome',
                    value : 'nome'
                },
                {
                    text : 'CPF',
                    value : 'login'
                },
                {
                    text : 'E-mail',
                    value : 'email',

                    // para esconder a coluna, use as duas propriedades abaixo
                    align: ' d-none', type : 'hidden',
                }
            ],
            registros: [],
            carregandoRegistros: true,

            entidadeAtual: null
        }
    },
    methods: {
        selecionarParaEdicao(item) {
            // console.log(item)
            this.entidadeAtual = item
        },
        salvar() {
        },
        cancelar() {
            this.carregarItens()
        },
        novo() {
            this.entidadeAtual = {
                id: null,
                natureza: {},
                orgao_pai: {}
            }
        },
        carregarItens() {
            this.registros = []
            let url = rotas.get('/auth/usuario/')
            this.carregandoRegistros = true
            this.$http.get(url)
                .then(
                    response => {
                        if(Array.isArray(response.body)) {
                            response.body.forEach(element => {
                                this.registros.push(element)
                            });
                        }
                        this.carregandoRegistros = false
                    }, 
                    error => {
                        console.log(error)
                        this.carregandoRegistros = false
                    }
                )
        }
    },
    mounted() {
        this.carregarItens()
    }
}
</script>