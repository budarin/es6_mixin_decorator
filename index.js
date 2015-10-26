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