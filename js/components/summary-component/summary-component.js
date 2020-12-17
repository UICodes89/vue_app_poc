Vue.component('summary-component', {
    template: `
        <div class="row introduction"> 
            <div class="col-12 header-wrapper px-5">
                <h3>Summary</h3>
            </div>            
            <edit-summary-component v-bind:item="item" toggleEditSection="toggleEditSection" v-if="isEditModeOn"></edit-summary-component>
            <div class="w-100 px-5" @mouseover="hover = true" @mouseleave="hover = false"> 
            <div class="edit-button-section" v-if="!isEditModeOn">
                    <a @click="toggleEditSection" class="edit-btn" v-if="hover && !isEditModeOn">
                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                    </a>
                </div>  
                <div class="col-12 mb-4 pb-3" v-if="!isEditModeOn">
                    <div class="row mb-2">
                        <div class="summary_content">{{item.summary}}</div>
                    </div>            
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            isEditModeOn: false,
            hover: false,
            item: store.state.summary[0]
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