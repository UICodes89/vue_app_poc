Vue.component('edit-summary-component', {
    template: `
        <div class="w-100 mb-3 px-3">
            <div class="row ml-0">
                <div class="btn-area text-right col">
                    <a  v-on:click="save" title="Delete Section" class="btn btn-primary white">Save</a>
                    <a title="Delete Section" class="btn btn-danger white" @click="this.$parent.toggleEditSection">Cancel</a> 
                </div>                   
            </div>
            <!--End of delete button row-->
            <div class="col-12 al_edit_section-experience">                
                <!--End of 1st row summary-->
                <div class="row mt-3">
                    <div class="col-12">
                        <textarea name="summary" placeholder="Summary" class="col-12 summary">{{item.summary}}</textarea>
                    </div>
                </div>
                <!--End of 3rd row contact-->
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