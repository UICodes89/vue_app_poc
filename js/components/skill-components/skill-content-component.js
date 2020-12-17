Vue.component('skill-content-component', {
    template: `
        <div class="col-12 skills px-3">            
            <edit-skills-component v-bind:item="item" toggleEditSection="toggleEditSection" v-if="isEditModeOn"></edit-skills-component>
            <div class="row px-5 pb-4" @mouseover="hover = true" @mouseleave="hover = false"> 
                <div class="col-12">
                    <div class="edit-button-section" v-if="!isEditModeOn">
                        <a @click="toggleEditSection" class="edit-btn" v-if="hover && !isEditModeOn">
                        <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                        </a>
                    </div>  
                </div>
                <div class="col-12" v-if="!isEditModeOn">                    
                    <div class="row mb-2">
                        <div class="col-12 col-md-3 contact_placeholder">
                            <div class="row pr-5">
                                <strong>Professional Skills:</strong>
                            </div>
                        </div>
                        <div class="col contact_details">
                            <div class="row">
                                {{item.professionalSkills}}
                            </div>
                        </div>
                    </div>
                    <div class="row mb-2">
                        <div class="col-12 col-md-3 email_placeholder">
                        <div class="row pr-5">
                            <strong>Computer Skills:</strong>
                        </div>
                        </div>
                        <div class="col computer_skills">
                            <div class="row pr-5">
                               {{item.computerSkills}}
                            </div>
                        </div>
                    </div>
                    <div class="row mb-2">
                        <div class="col-12 col-md-3 contact_placeholder">
                            <div class="row pr-5">
                                    <strong>Language Skills:</strong>
                            </div>
                            </div>
                            <div class="col language_skills">
                            <div class="row">
                                    {{item.languageSkills}}
                            </div>
                        </div>
                    </div>
                    <div class="row mb-2">
                        <div class="col-12 col-md-3 contact_placeholder">
                            <div class="row pr-5">
                                    <strong>Soft Skills:</strong>
                            </div>
                            </div>
                            <div class="col contact_details">
                            <div class="row">
                                    {{item.softSkills}}
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
            item: store.state.skills[0]
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