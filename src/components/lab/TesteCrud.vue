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

export default {
    components: {
        'crud': crud
    },
    data() {
        return {
            cabecalhos: [
                {
                    text : 'Nome',
                    value : 'nome'
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
            this.registros = [
                {
                    nome: 'Alysson Marques'
                }
            ]
            this.carregandoRegistros = false
        }
    },
    mounted() {
        this.carregarItens()
    }
}
</script>