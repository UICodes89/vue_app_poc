Vue.component('work-exp-component', {
    template: `
        <div class="row">   
            <div class="col-12 header-wrapper px-5">
                <h3>Work History</h3>
            </div>          
            <div class="w-100 px-5">
                <div class="col-12 mb-3 px-0">
                    <a @click="toggleNewSection"><i class="fa fa-plus" aria-hidden="true" ></i> &nbsp;ADD EXPERIENCE</a>
                </div>  
                <edit-work-exp-component v-if="isAddPanel" v-bind:item="{}" toggleNewSection="toggleNewSection"></edit-work-exp-component>                                               
                <work-exp-content-component 
                    v-for="item in exp"
                    v-bind:item="item"
                ></work-exp-content-component>   
                <button @click="add">Add</button>             
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
            exp: store.state.experience
        }
    },
    methods: {
        // create methods   
        toggleNewSection: function() {
            this.isAddPanel = !this.isAddPanel;
        },
        add: function() {
            store.dispatch('addExp', {
                "startDate": "July 2021",
                "endDate": "July 2023",
                "employerName": "Google2",
                "jobTitle": "Data Scientist2",
                "location": "Dublin, Ireland22",
                "jobDesc": `Contrary to popular belief, Lorem Ipsum is not simply rand222om text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`,
            })
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