Vue.component('introduction-component', {
    template: `
        <div class="row introduction">            
            <edit-introduction-component v-bind:item="item" toggleEditSection="toggleEditSection" v-if="isEditModeOn"></edit-introduction-component>
            <div class="w-100 px-5" @mouseover="hover = true" @mouseleave="hover = false"> 
            <div class="edit-button-section" v-if="!isEditModeOn">
                    <a @click="toggleEditSection" class="edit-btn pt-5" v-if="hover && !isEditModeOn">
                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                    </a>
                </div>  
                <div class="col-12" v-if="!isEditModeOn">
                    <div class="row mb-2">
                        <div class="full_name"><strong>{{item.fullName}}</strong></div>
                    </div>
                    <div class="row mb-2">
                        <div class="col-3 col-md-2 contact_placeholder">
                            <div class="row pr-5">
                                <strong>Contact</strong>
                            </div>
                        </div>
                        <div class="col contact_details">
                            <div class="row">
                                {{item.contact}}
                            </div>
                        </div>
                    </div>
                    <div class="row mb-2">
                        <div class="col-3 col-md-2 email_placeholder">
                        <div class="row pr-5">
                            <strong>Email</strong>
                        </div>
                        </div>
                        <div class="col email_details">
                            <div class="row pr-5">
                               {{item.email}}
                            </div>
                        </div>
                    </div>
                    <div class="row mb-2">
                        <div class="col-3 col-md-2 contact_placeholder">
                        <div class="row pr-5">
                                <strong>Contact</strong>
                        </div>
                        </div>
                        <div class="col contact_details">
                        <div class="row">
                                {{item.city}}, {{item.region}}, {{item.country}}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            isEditModeOn: false,
            hover: false,
            item: store.state.intrudction[0]
        }
    },
    methods: {
        toggleEditSection: function() {
            this.isEditModeOn = !this.isEditModeOn;
            this.hover = this.isEditModeOn
        },
        getData: function() {
            return this.getIntro
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