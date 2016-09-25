import Vue from 'vue';
import VueRouter from 'vue-router';
import app from './App';
import Hello from './components/Hello';

Vue.use(VueRouter);

var App = {
  // el: 'body',
  components: { app }
};

var router = new VueRouter();

router.map({
  '/foo': {
    component: Hello
  }
});

// router托管了App的el，这里写作body
router.start(App, 'body');

