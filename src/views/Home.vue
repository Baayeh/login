<template>
  <section id="home_wrapper" class="tw-min-h-screen tw-absolute tw-w-full">
    <div class="tw-h-screen tw-text-white tw-flex tw-justify-center tw-items-center tw-flex-col sm:tw-w-96 sm:tw-mx-auto">
      
      <section id="initial" class="">
        <div class="tw-text-center">
          <h1 class="tw-uppercase tw-text-3xl">Inceptia</h1>
          <p class="tw--m-2 tw-font-thin">Lorem Ipsum legume issit aste</p>
        </div>
        <div class="tw-my-16">
          <img src="@/assets/img/testimonials.png" alt="">
        </div>
        <div class="tw-text-center">
          <v-btn tile class="tw-text-blackShade tw-font-bold tw-bg-seaBlue" @click="display()">Get Started</v-btn>
        </div>
      </section>

      <section id="form_tabs" class="tw-w-full tw-hidden">
        <!-- <h1 class="tw-uppercase tw-text-3xl tw-absolute tw-top-50 tw-w-full tw-text-center">Inceptia</h1> -->

        <div class="tw-px-6">
          <section class="tw-flex tw-items-center tw-justify-between">
            <!--Tab Links-->
            <div class="tab">
              <button id="defaultOpen" class="tab_links active tw-pr-5" @click="openForm('Login')">Login</button>
              <button class="tab_links tw-pr-5" @click="openForm('Register')">Register</button>
            </div>
            <div class="tw-flex tw-items-center">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="chevron-double-left tw-w-4 tw-h-4"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7"></path></svg>
              <a @click="home()">Go Back</a>
            </div>
          </section>

          <!--Tab Content-->
          <section id="Login" class="tab_content tw-mt-10">
            <div class="tw-bg-grayShade tw-p-3">
              <label for="username" class="tw-text-seaBlue tw-font-bold">Username</label>
              <input type="text" name="username" id="username" class="tw-block" placeholder="kabaayeh" required>
            </div>

            <div class="tw-bg-grayShade tw-p-3 my-4">
              <label for="password" class="tw-text-seaBlue tw-font-bold">Password</label>
              <input type="password" name="password" id="password" class="tw-block" placeholder="*********" required>
            </div>
            <div class="tw-text-right">
              <a href="#" class="tw-text-seaBlue tw-text-sm hover:tw-underline">forgot password?</a>
            </div>

            <button id="loginBtn" class="tw-mt-5 tw-uppercase tw-rounded-full py-3 tw-w-full">
              <span class="tw-font-bold">Login</span>
            </button>

            <div class="tw-text-center tw-mt-5">
              <p class="tw-text-sm">Don't have an account? <a @click="openForm('Register')" class="tw-text-white tw-underline">Create</a></p>
            </div>
          </section>

          <section id="Register" class="tab_content tw-mt-10">
            <div class="tw-bg-grayShade tw-p-3">
              <label for="fullname" class="tw-text-seaBlue tw-font-bold">Full Name</label>
              <input type="text" name="fullname" id="fullname" class="tw-block" placeholder="John Doe" required>
            </div>
            <div class="tw-bg-grayShade tw-p-3 my-4">
              <label for="email" class="tw-text-seaBlue tw-font-bold">Email</label>
              <input type="email" name="email" id="email" class="tw-block" placeholder="example@email.com" required>
            </div>
            <div class="tw-bg-grayShade tw-p-3 my-4">
              <label for="reg_username" class="tw-text-seaBlue tw-font-bold">Username</label>
              <input type="text" name="username" id="reg_username" class="tw-block" placeholder="kabaayeh" required>
            </div>
            <div class="tw-bg-grayShade tw-p-3 my-4">
              <label for="reg_password" class="tw-text-seaBlue tw-font-bold">Password</label>
              <input type="text" name="password" id="reg_password" class="tw-block" placeholder="*********" required>
            </div>
            <div class="tw-bg-grayShade tw-p-3 my-4">
              <label for="confirmpassword" class="tw-text-seaBlue tw-font-bold">Confirm Password</label>
              <input type="text" name="confirmpassword" id="confirmpassword" class="tw-block" placeholder="*********" required>
            </div>
            
            <button class="tw-mt-5 tw-uppercase tw-rounded-full py-3 tw-w-full">
              <span class="tw-font-bold">Register</span>
            </button>

            <div class="tw-text-center tw-mt-5">
              <p class="tw-text-sm">Already have an account? <a @click="openForm('Login')" class="tw-text-white tw-underline">Sign in</a></p>
            </div>
          </section>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  data() {
    return {
      isActive: false,
    }
  },
  methods: {
    display() {
      let form = document.querySelector('#form_tabs');
      let initial = document.querySelector('#initial');

      if(initial.classList.contains('animate__fadeInLeft')) {
          initial.classList.remove('animate__animated', 'animate__fadeInLeft');
      }
      initial.classList.add('animate__animated', 'animate__fadeOut');
      initial.classList.add('tw-hidden');

      if(form.classList.contains('animate__fadeOut')) {
        form.classList.remove(...form.classList);
        form.classList.add('tw-w-full');
      }
      form.classList.remove('tw-hidden');
      form.classList.add('animate__animated', 'animate__fadeInRight');
    },

    home() {
      let form = document.querySelector('#form_tabs');
      let initial = document.querySelector('#initial');

      form.classList.remove('animate__fadeInRight');
      form.classList.add('animate__fadeOut');
      form.classList.add('tw-hidden');

      initial.classList.remove('animate__fadeOut');
      initial.classList.remove('tw-hidden');
      initial.classList.add('animate__fadeInLeft');
    },

    openForm(displayForm) {
      //declare all variables
      let i, tab_content, tab_links;

      //Get all elements with class="tab_content" and hide them
      tab_content = document.getElementsByClassName("tab_content");
      for(i = 0; i < tab_content.length; i++) {
        tab_content[i].style.display = "none";
      }

      //Get all elements with class="tab_links" and remove the class "active"
      tab_links = document.getElementsByClassName("tab_links");
      for(i = 0; i < tab_links.length; i++) {
        tab_links[i].classList.remove("active");
      }

      //show the current tab and add "active" class to the button that opened the tab
      var newElement = document.getElementById(displayForm);
      newElement.style.display = "block";
    },
    defaultOpen() {
      // Get the element with id="defaultOpen" and click on it
      let defaultOpen = document.getElementById("defaultOpen");
      defaultOpen.click();
      defaultOpen.cla;
    }
  },
  mounted() {
    this.$nextTick(function () {
      this.defaultOpen();

      addEventListener("load", function() {
          var viewport = document.querySelector("meta[name=viewport]");
          viewport.setAttribute("content", viewport.content + ", height=" + innerHeight);
      });
    })
  },
}
</script>

<style lang="less" scoped>
#home_wrapper {
  background-image: url('../assets/img/bg.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.tab {
  overflow: hidden;

  button {
    padding: 3px 0;
    color: gray;
    border-bottom: 2px solid gray;
    outline: none;
    transition: 0.3s;
  }

  button:hover {
    color: #fff;
    border-bottom: 2px solid #fff;
  }

  button.active {
    color: #fff;
    border-bottom: 2px solid #fff;
  }
}

.tab_content {
  display: none;
  animation: fadeEffect 2s;
}

/* Go from zero to full opacity */
@keyframes fadeEffect {
  from {opacity: 0;}
  to {opacity: 1;}
}

#Login, #Register {
  input {
    width: 100%;
    border-bottom: none;
    transition: 0.3s;
  }

  input:focus {
    outline: none;
    border-bottom: 1px solid gray;
  }

  button {
    background-color: #14ffec;
    color: #212121;
    transition: 0.3s;
  }

  button:hover {
    background-color: #0d7377;
    color: #fff;
  }

  button:focus {
    outline: none !important;
  }
}
</style>
