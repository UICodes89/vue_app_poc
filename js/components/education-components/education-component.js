Vue.component('education-component', {
    template: `
            <div class="row">   
                <div class="col-12 header-wrapper px-5">
                    <h3>Education</h3>
                </div>
                <div class="w-100 px-5">
                    <div class="col-12 mb-3 px-0">
                        <a @click="toggleNewSection"><i class="fa fa-plus" aria-hidden="true" ></i> &nbsp;ADD EDUCATION</a>
                    </div>  
                    <edit-education-component 
                        v-if="isAddPanel"
                        v-bind:item="{}"
                        toggleNewSection="toggleNewSection"
                    ></edit-education-component>                                               
                    <education-content-component 
                        v-for="item in educ"
                        v-bind:item="item"
                    ></education-content-component>
                </div>
            </div>
        `,
    data() {
        return {
            isAddPanel: false,
            showDropdown: false,
            active_edit: {
                com_name: "Allsorter"
            },
            educ: store.state.education
        }
    },
    methods: {
        // create methods   
        toggleNewSection: function() {
            this.isAddPanel = !this.isAddPanel;
        }
    },
    computed: {

    },
    props: {
        // options: {
        //     defaut: [],
        //     type: Array,
        // }
    },
})