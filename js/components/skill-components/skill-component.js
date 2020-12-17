Vue.component('skill-component', {
    template: `
        <div class="row introduction"> 
            <div class="col-12 header-wrapper px-5">
                <h3>Skill</h3>
            </div> 
            <skill-content-component
                 v-bind:item="{}"
            ></skill-content-component>
        </div>
    `,
    data() {
        return {
            isEditModeOn: false,
            hover: false
        }
    },
    methods: {
        toggleEditSection: function() {
            this.isEditModeOn = !this.isEditModeOn;
            this.hover = this.isEditModeOn
        },
    },
    props: {
        // options: {
        //     defaut: [],
        //     type: Array,
        // }
    },
})