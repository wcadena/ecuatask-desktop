<template>
  <div class="bg-image" style="background-image: url('assets/media/photos/photo20@2x.jpg');">
    <div class="hero-static bg-black-75">
      <div class="content content-full">
        <div class="px-3 py-5">
          <div class="text-center">
            <div class="mb-3">
              <a class="link-fx font-w700 font-size-h1" href="index.html">
                <span class="text-white">Ecua</span><span class="text-primary">Task</span>
              </a>
              <p class="text-uppercase font-w700 font-size-sm text-muted">Instalación</p>
            </div>
            <h1 class="text-white font-w700 mt-5 mb-3">Estamos listos para la instalacón</h1>
            <h2 class="h3 text-white-75 font-w400 text-muted mb-5">No te preocupes, esto tomara solo un minuto.</h2>
          </div>

          <!-- Installation form -->
          <!-- jQuery Validation functionality is initialized with .js-validation-installation class in js/pages/op_installation.min.js which was auto compiled from _es6/pages/op_installation.js -->
          <!-- For more examples you can check out https://github.com/jzaefferer/jquery-validation -->
          <div class="row justify-content-center">
            <div class="col-xl-8">
              <form class="js-validation-installation" action="op_installation.html" method="POST">
                <div class="block block-rounded block-transparent bg-white">
                  <!-- Database section -->
                  <div class="block-content block-content-full">
                    <h2 class="content-heading">Usuario: {{usuarioxci}}</h2>
                    <div class="row items-push">
                      <div class="col-lg-4">
                        <p class="text-muted">
                          Registre el nombre de usuario del equipo.
                        </p>
                      </div>
                      <div class="col-lg-6 offset-lg-1">
                        <div class="form-group">
                          <label for="usuarioxc">Usuario</label>
                          <input type="text" v-model="usuarioxci" class="form-control form-control-alt" id="iusuarioxc" name="usuarioxc" placeholder="Usuario de Computadora">
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- END Database section -->

                  <!-- Administrator section -->
                  <div class="block-content block-content-full">
                    <h2 class="content-heading">Equipo :{{equipoxci}}</h2>
                    <div class="row items-push">
                      <div class="col-lg-4">
                        <p class="text-muted">
                          Registre el nombre del equipo como esta en el sistema.
                        </p>
                      </div>
                      <div class="col-lg-6 offset-lg-1">
                        <div class="form-group">
                          <label for="equipoxc">Equipo</label>
                          <input type="text" v-model="equipoxci" class="form-control form-control-alt" id="equipoxc" name="equipoxc" >
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- END Administrator section -->
                  <div class="block-content">
                    <div class="form-group row">
                      <div class="col-lg-6 offset-lg-5">
                        <button type="submit" class="btn btn-hero-success mb-1">
                          <i class="fa fa-check mr-1"></i> Install
                        </button>
                        <button type="reset" class="btn btn-hero-secondary mb-1">
                          Reset
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <!-- END Installation Form -->
          <systemz-information></systemz-information>

        </div>
      </div>
    </div>

  </div>

</template>

<script>
  import SystemzInformation from './LandingPage/SystemInformation'
  import CpuInformation from '../pages/cpu'

  export default {
    name: 'landing-page',
    components: { SystemzInformation, CpuInformation },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    },
    computed: {
      usuarioxci () {
        return 'Usuario'
      },
      image () {
        return '/assets/logo.png'
      },
      equipoxci () {
        return 'Equipo'
      },
      data () {
        try {
          return [
            {
              name: 'Is Charging',
              value: this.$store.state.data.battery.ischarging,
              img: `static/battery/ischarging.svg`
            }
          ]
        } catch (e) {
          return []
        }
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
</style>
