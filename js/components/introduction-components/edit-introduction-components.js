Vue.component('edit-introduction-component', {
    template: `
        <div class="w-100 mb-3 px-2 px-md-5 mt-5 mt-md-0">
            <div class="col-12 al_edit_section-experience">
                <div class="row ml-0">
                    <div class="col">
                        <a  v-on:click="doSomething" title="Delete Section" class="delete-icon"><i class="fas fa-trash-alt"></i></a>
                    </div>
                    <div class="btn-area text-right col">
                        <a  v-on:click="save" title="Delete Section" class="btn btn-primary white">Save</a>
                        <a  v-on:click="cancel" title="Delete Section" class="btn btn-danger white" @click="this.$parent.toggleEditSection">Cancel</a> 
                    </div>                   
                </div>
                <!--End of delete button row-->
                
                <div class="row mt-3">                    
                    <div class="col-12">
                        <input type="text" placeholder="Full Name" name="Full Name" class="col-12" v-bind:value="item.fullName" />
                    </div>                    
                </div>
                <!--End of 1st fullname row (Edit section)-->

                <div class="row mt-3">
                    <div class="col-12">
                        <input type="text" name="Contact" placeholder="Contact" class="col-12" v-bind:value="item.contact" />
                    </div>
                </div>
                <!--End of 2nd row contact-->
                <div class="row mt-3">
                    <div class="col-12">
                        <input type="text" name="Contact" placeholder="Contact" class="col-12" v-bind:value="item.email" />
                    </div>
                </div>
                <!--End of 3rd row contact-->
                <div class="row mt-3">
                    <div class="col-4">
                        <input type="text" name="City" placeholder="City" class="col-12" v-bind:value="item.city" />
                    </div>
                    <div class="col-4">
                        <input type="text" name="Region" placeholder="Region" class="col-12" v-bind:value="item.region" />
                    </div>
                    <div class="col-4">
                        <input type="text" name="Country" placeholder="Country" class="col-12" v-bind:value="item.country" />
                    </div>
                </div>
                <!--End of 4th row contact-->
            </div>
            <!--End of al_edit_section-experience-->
        </div>
    `,
    data() {
        return {
            isEditModeOn: false,
            hover: false
        }
    },
    methods: {
        // create methods   
        editExp: function() {
            console.log("Show and Hide")
        },
        toggleEditSection: function() {
            this.isEditModeOn = !this.isEditModeOn;
            this.hover = this.isEditModeOn
        },
        hoverOver: function() {
            console.log("hoverOver")
        }
    },
    props: ['item'],
})