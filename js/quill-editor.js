Vue.component('quill-editor', {
    template: `
    <div id="editor" v-on:click="add">
        <p>Hello World!</p>
        <p>Some initial <strong>bold</strong> text</p>
        <p><br></p>
    </div>
    `,
    created: function() {

    },
    data() {
        return {
            quill: 'Manoj'
        }
    },
    methods: {
        // create methods   
        toggleNewSection: function() {},
        add: function() {
            console.log(this.quill);
            new Quill('#editor', {
                theme: 'snow',
                modules: { 'toolbar': { container: '#toolbar' } }
            });
        }
    },
    computed: {},
    props: {},
})

Allsorter = new Vue({
    el: '#myTabContent',
    methods: {},
    component: [
        'quill-editor'
    ]
});