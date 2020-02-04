<template>
  <!-- App.vue -->

  <v-app>
    <v-navigation-drawer app v-model="menuEsquerda" clipped left>

      <v-list dense>
        <v-list-item v-for="(item, i) in items" v-bind:key="i">

          <v-list-group v-if="item.children" :prepend-icon="item.icon">

            <template v-slot:activator>
              <v-list-item-title>
                <router-link :to="item.route + ''" :next="item.route">
                    {{ item.text }}
                </router-link>
              </v-list-item-title>
            </template>

            <v-divider></v-divider>

            <v-list dense>
              <v-list-item v-for="(filho, f) in item.children" v-bind:key="f">

                <v-list-item-icon>
                  <v-icon v-if="filho.icon">{{ filho.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-title>
                  <router-link :to="filho.route + ''" :next="filho.route">
                    {{ filho.text }}
                  </router-link>
                </v-list-item-title>

              </v-list-item>
            </v-list>
          </v-list-group>

          <v-list-item v-else>

              <v-list-item-icon>
                <v-icon v-if="item.icon">{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>
                <a v-if="item.url" :href="item.url" target="_blank">{{ item.text }}</a>
                <router-link v-else :to="item.route + ''" :next="item.route">
                  {{ item.text }}
                </router-link>
              </v-list-item-title>

          </v-list-item>
          
        </v-list-item>
      </v-list>
      
    </v-navigation-drawer>

    <cabecalho @mostra-esconde-menu="this.mostraEscondeMenu" />

    <mensagem-sistema />

    <!-- Sizes your content based upon application components -->
    <v-content>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
import MensagemSistema from "./MensagemSistema";
import Cabecalho from "./Cabecalho";
export default {
  components: {
    "mensagem-sistema": MensagemSistema,
    "cabecalho": Cabecalho
  },
  data: () => ({
    menuEsquerda: true,

    miniMenu: false,
    items: [
      {
        text: "Início",
        icon: "home",
        route: "/",
        model: true
      },
      {
        text: "Base de Conhecimento",
        icon: "local_library",
        url: "http://10.209.232.158/wordpress"
      },
      {
        text: "SPU-Admin",
        icon: "desktop_windows",
        url: "http://10.209.232.190/"
      },
      {
        text: "lab/crud",
        route: "/lab/crud"
      }
      /*
      {
        text: "Atendimento",
        icon: "how_to_reg",
        route: "/atendimento",
        model: true
      },
      {
        text: "Geovisualizador",
        icon: "map",
        route: "/geo",
        model: true
      },
      {
        text: "Governança",
        icon: "near_me",
        route: "/governanca",
        model: true
      },
      {
        text: "Judiciais e Controle",
        icon: "gavel",
        route: "/nujuc",
        model: true,
        children: [
          {
            text: "Demandas",
            icon: "assignment",
            route: "/demanda"
          },
          {
            text: "Procedimentos",
            icon: "account_balance",
            route: "/procedimento"
          },
          {
            text: "Demandantes",
            icon: "record_voice_over",
            route: "/demandante"
          },
          {
            text: "Órgãos",
            icon: "business",
            route: "/orgao"
          }
        ]
      }
      */
    ]
  }),
  props: {
    source: String
  },
  methods: {
    mostraEscondeMenu() {
      this.menuEsquerda = !this.menuEsquerda
    },
  },
  watch: {
    $route() {
      this.breadcrumb = this.$route.meta.breadcrumb;
    }
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
