<template>
  <div class="bg-image" style="background-image: url('assets/media/photos/photo20@2x.jpg');">
    <div class="hero-static bg-black-75">
      <div class="content content-full">
        <div class="px-3 py-5">
          <div class="text-center">
            <div class="mb-3">
              <a class="link-fx font-w700 font-size-h1" href="index.html">
                <span class="text-white">Dash</span><span class="text-primary">mix</span>
              </a>
              <p class="text-uppercase font-w700 font-size-sm text-muted">Installation Mode</p>
            </div>
            <h1 class="text-white font-w700 mt-5 mb-3">Get ready to install your app</h1>
            <h2 class="h3 text-white-75 font-w400 text-muted mb-5">Don’t worry, it will take less than a 1 minute!</h2>
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
                    <h2 class="content-heading">Database</h2>
                    <div class="row items-push">
                      <div class="col-lg-4">
                        <p class="text-muted">
                          Please pay extra attention because adding the correct database info is vital for a successful app installation.
                        </p>
                      </div>
                      <div class="col-lg-6 offset-lg-1">
                        <div class="form-group">
                          <label for="install-db-name">Name</label>
                          <input type="text" class="form-control form-control-alt" id="install-db-name" name="install-db-name" placeholder="What's the name of your database?">
                        </div>
                        <div class="form-group">
                          <label for="install-db-host">Host</label>
                          <input type="text" class="form-control form-control-alt" id="install-db-host" name="install-db-host" placeholder="Leave empty for 'localhost'">
                        </div>
                        <div class="form-group">
                          <label for="install-db-prefix">Table Prefix</label>
                          <input type="text" class="form-control form-control-alt" id="install-db-prefix" name="install-db-prefix" placeholder="Leave empty for 'app_'">
                        </div>
                        <div class="form-group">
                          <label for="install-db-username">Username</label>
                          <input type="text" class="form-control form-control-alt" id="install-db-username" name="install-db-username" placeholder="Database username">
                        </div>
                        <div class="form-group">
                          <label for="install-db-password">Password</label>
                          <input type="password" class="form-control form-control-alt" id="install-db-password" name="install-db-password" placeholder="Database password">
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- END Database section -->

                  <!-- Administrator section -->
                  <div class="block-content block-content-full">
                    <h2 class="content-heading">Administrator</h2>
                    <div class="row items-push">
                      <div class="col-lg-4">
                        <p class="text-muted">
                          Please add your email and a strong password to create the administrator account.
                        </p>
                      </div>
                      <div class="col-lg-6 offset-lg-1">
                        <div class="form-group">
                          <label for="install-admin-email">Email</label>
                          <input type="text" class="form-control form-control-alt" id="install-admin-email" name="install-admin-email">
                        </div>
                        <div class="form-group">
                          <label for="install-admin-password">Password</label>
                          <input type="password" class="form-control form-control-alt" id="install-admin-password" name="install-admin-password">
                        </div>
                        <div class="form-group">
                          <label for="install-admin-password-confirm">Password Confirmation</label>
                          <input type="password" class="form-control form-control-alt" id="install-admin-password-confirm" name="install-admin-password-confirm">
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

          <div class="text-center">
            <a class="btn btn-sm btn-dark" href="be_pages_generic_blank.html">
              <i class="fa fa-arrow-left mr-1"></i> Go Back
            </a>
          </div>
          <system-information></system-information>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import SystemInformation from './LandingPage/SystemInformation'

  export default {
    name: 'landing-page',
    components: { SystemInformation },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
</style>
