Vue.component('work-exp-content-component', {
    template: `
        <div class="col-12 al_view_section-experience px-0" @mouseover="hover = true" @mouseleave="hover = false">
           <div class="edit-button-section">
               <a @click="toggleNewSection" class="edit-btn" v-if="hover && !isEditModeOn">
               <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
               </a>
           </div>    
            <div class="row" v-if="isEditModeOn">
                <edit-work-exp-component v-bind:item="item" toggleNewSection="toggleNewSection"></edit-work-exp-component>  
            </div>            
            <div class="row" v-else="isEditModeOn">  
                <div class="col-12 col-md-7">
                    <div class="company_name mb-1" @input="onInput" contenteditable>{{item.employerName}}</div>
                    <div class="cadidate_designation mb-1">{{item.jobTitle}}</div>
                    <div class="company_location mb-1">{{item.location}}</div>
                </div>
                <div class="col-12 col-md-5">
                    <div class="row">
                        <span class="start_date col text-md-right mb-1">{{item.startDate}} - {{item.endDate}}</span>
                    </div>
                </div>
                <div class="col-12 mb-1" v-html="item.jobDesc"></div>
            </div>
            <!--End of 1st row-->
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
        toggleNewSection: function() {
            this.isEditModeOn = !this.isEditModeOn;
            this.hover = this.isEditModeOn
        },
        hoverOver: function() {
            console.log("hoverOver")
        },
        onInput(e) {
            console.log(e.target.innerText);
            console
        },
    },
    props: ['item'],
})