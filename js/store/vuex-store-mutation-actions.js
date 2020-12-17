const store = new Vuex.Store({
    state: {
        education: [{
                "startDate": "2008",
                "endDate": "2012",
                "degree": "B.Tech",
                "education": "Computer Science",
                "institute": "KIIT University",
            },
            {
                "startDate": "2019",
                "endDate": "2020",
                "degree": "Masters",
                "education": "Data Analytics",
                "institute": "KIIT University",
            }
        ],
        experience: [{
                "startDate": "July 2018",
                "endDate": "July 2020",
                "employerName": "Allsorter",
                "jobTitle": "Module Lead",
                "location": "Dublin, Ireland",
                "jobDesc": `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`,
            },
            {
                "startDate": "July 2020",
                "endDate": "July 2022",
                "employerName": "Google",
                "jobTitle": "Data Scientist",
                "location": "Dublin, Ireland",
                "jobDesc": `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`,
            }
        ],
        skills: [{
            professionalSkills: "[ Professional Skills ]",
            computerSkills: "API Gateway, AWS, Agile, Alloy UI, Angular, Angular 9.0, Angular JS, Azure, Bitbucket, CI/CD, CSS3, Casandra, Chai, Cloud, CloudWatch, Cognito, Core Java, Database, Django, Docker, Dynamo DB, Eclipse, Express, Facebook, Flask, GIT, Gitlab, Google, Grunt, Gulp, HTML5, Jasmine, JavaScript, Jira, Knockout, Lambda, Liferay, Mithril, Mocha, Mongo DB, Next, Node Js, Postgres SQL, Python, RSA, React, React Native, Rest API, S3, SEO, SES, SNS, Serverless, Stash, Typescript, VS Code, Visual Studio, Vue Js, Webpack, jQuery, java, sublime",
            languageSkills: "[ Language Skills ]",
            softSkills: "[ Soft Skills ]"
        }],
        intrudction: [{
            fullName: "Manoj Kumar Shukla",
            contact: "+353834215190",
            email: "manojkshukla87@gmail.com",
            city: "Dublin",
            region: "Dublin",
            country: "Ireland"
        }],
        summary: [{
            summary: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`,
        }]
    },
    getters: {
        doneTodos: state => {
            return state.todos.filter(todo => todo.done)
        }
    },
    mutations: {
        addExperience(state, data) {
            state.experience.push(data)
        },
        updateExperience(state, data) {
            console.log("Update", data);
        },
        deleteExperience(state, data) {},
        addEducation(state, data) {
            state.education.push(data)
        },
        deleteEducation(state, id) {

        },
        updateEducation(state, data) {

        },
    },
    actions: {
        addExp(context, data) {
            store.commit('addExperience', data)
        },
        addEdu(context, data) {
            store.commit('addEducation', data)
        },
    }
});