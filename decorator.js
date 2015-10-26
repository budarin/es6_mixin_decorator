export default function (...mixins) {
    return function (target) {
        for (let mix of mixins) {
            for (let prop in mix) {
                target.prototype[prop] = mix[prop];
            }
        }
    }
}
