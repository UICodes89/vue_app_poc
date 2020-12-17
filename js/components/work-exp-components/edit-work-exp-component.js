Vue.component('edit-work-exp-component', {
    template: `
        <div class="w-100 mb-3">
            <div class="col-12 al_edit_section-experience">
                <div class="row ml-0">
                    <div class="col">
                        <a  v-on:click="doSomething" title="Delete Section" class="delete-icon"><i class="fas fa-trash-alt"></i></a>
                    </div>
                    <div class="btn-area text-right col">
                        <a  v-on:click="this.update" title="Delete Section" class="btn btn-primary white">Save</a>
                        <a  v-on:click="cancel" title="Delete Section" class="btn btn-danger white" @click="this.$parent.toggleNewSection">Cancel</a> 
                    </div>                   
                </div>
                <!--End of delete button row-->
                
                <div class="row mt-3">
                    <!--End of input section-->
                    <div class="col-12 col-md-3 mx-0 ">
                        <div class="row px-3">
                            <div class="col-4">
                                <label class="switch row">
                                    <input type="checkbox" checked />
                                    <span class="slider round"></span> 
                                </label>
                            </div>
                            <div class="col-8 mx-0">
                                <div class="row">
                                    Current Role
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--End of switch section-->
                    <div class="col-12 col-md-9">
                        <div class="row">
                            <div class="col-6">
                                <input type="text" placeholder="Start Date" class="col-12" v-bind:value="formData.startDate">
                            </div>
                            <div class="col-6">
                                <input type="text" placeholder="End Date" class="col-12" v-bind:value="formData.endDate">
                            </div>
                        </div>
                    </div>
                    
                </div>
                <!--End of 1st row (Edit section)-->

                <div class="row mt-3">
                    <div class="col-6">
                        <input type="text" name="Employer" placeholder="Employer" class="col-12" v-bind:value="formData.employerName">
                    </div>
                    <div class="col-6">
                        <input type="text" name="Job Title" placeholder="Job Title" class="col-12" v-bind:value="formData.jobTitle">
                    </div>
                </div>
                <!--End of 2nd row-->
                <div class="row mt-3">
                    <div class="col-12">
                        <textarea name="summary" id="" cols="30" rows="10" class="w-100" v-bind:value="formData.jobDesc" ></textarea>
                    </div>
                </div>
                <!--End of 3rd row-->
            </div>
            <!--End of al_edit_section-experience-->
        </div>
    `,
    data() {
        return {
            selected: "",
            showDropdown: false,
            formData: {}
        }
    },
    methods: {
        // create methods    
        doSomething: function() {
            console.log("delete");
        },
        update: function() {
            store.dispatch('updateExp', this.prop.item)
        }
    },
    props: ['item', 'toggleNewSection'],
})