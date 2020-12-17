Vue.component('edit-education-component', {
    template: `
        <div class="col-12 w-100 mb-3">
            <div class="al_edit_section-experience">
                <div class="row ml-0">
                    <div class="col px-0">
                        <a  v-on:click="doSomething" title="Delete Section" class="delete-icon"><i class="fas fa-trash-alt"></i></a>
                    </div>
                    <div class="btn-area text-right col">
                        <a  v-on:click="save" title="Delete Section" class="btn btn-primary white">Save</a>
                        <a  v-on:click="cancel" title="Delete Section" class="btn btn-danger white" @click="this.$parent.toggleNewSection">Cancel</a> 
                    </div>                   
                </div>
                <!--End of delete button row-->
                
                <div class="row mt-3">
                    <!--End of input section-->
                    <div class="col-12 col-md-3 mx-0 d-none">
                        <div class="row px-3">
                            <div class="col-4">
                                <label class="switch row">
                                    <input type="checkbox" checked>
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
                    <div class="col-12 col-md-12">
                        <div class="row">
                            <div class="col-6">
                                <input type="text" placeholder="Start Date" class="col-12" v-bind:value="item.startDate">
                            </div>
                            <div class="col-6">
                                <input type="text" placeholder="End Date" class="col-12" v-bind:value="item.endDate">
                            </div>
                        </div>
                    </div>
                    
                </div>
                <!--End of 1st row (Edit section)-->

                <div class="row mt-3">
                    <div class="col-4">
                        <input type="text" name="Employer" placeholder="Employer" class="col-12" v-bind:value="item.degree">
                    </div>
                    <div class="col-4">
                        <input type="text" name="Job Title" placeholder="Job Title" class="col-12" v-bind:value="item.education">
                    </div>
                    <div class="col-4">
                        <input type="text" name="Job Title" placeholder="College" class="col-12" v-bind:value="item.institute">
                    </div>
                </div>
                <!--End of 2nd row-->                
            </div>
            <!--End of al_edit_section-experience-->
        </div>
    `,
    data() {
        return {
            selected: "",
            showDropdown: false
        }
    },
    methods: {
        // create methods    
        doSomething: function() {
            console.log("delete");
        }
    },
    props: ['item', 'toggleNewSection'],
})