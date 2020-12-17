Allsorter = new Vue({
    el: '#viewCV',
    data: {},
    methods: {
        saveText(text) {},
        store,
        getToken(cname) {
            var name = cname + "=";
            var decodedCookie = decodeURIComponent(document.cookie);
            var ca = decodedCookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "@accessToken"
        }
    },
    component: [
        'introduction-component',
        'edit-introduction-component',
        'summary-component',
        'skill-component',
        'skill-content-component',
        'edit-skills-component',
        'work-exp-component',
        'edit-work-exp-component',
        'work-exp-content-component',
        'edit-education-component',
        'education-content-component',
        'education-component',
    ],

});

var mixin = {
    data: function() {
        return {
            message: 'hello',
            foo: 'abc'
        }
    }
}
Vue.config.devtools = true;
window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = Allsorter.constructor;