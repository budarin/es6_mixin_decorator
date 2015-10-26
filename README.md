# es6 mixin decorator
Mixin decorator fo ES6 classes

    import mixin from './decorator.js';

    @mixin(require('./mixin'))
    class App {
        constructor() {
            this.title = 'App';
        }
    
        hello() {
            console.log(`Hello from ${this.title}`);
        }
    }
    
    var app = new App;
    
    app.hello();
    app.helloFromMixin();
    
    
    => Hello from App
    => hello from mixin