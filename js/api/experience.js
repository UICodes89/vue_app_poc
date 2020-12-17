const _experience = [{
        "id": 1,
        "startDate": "July 2018",
        "endDate": "July 2020",
        "employerName": "Allsorter",
        "jobTitle": "Module Lead",
        "location": "Dublin, Ireland",
        "jobDesc": `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`,
    },
    {
        "id": 2,
        "startDate": "July 2020",
        "endDate": "July 2022",
        "employerName": "Google",
        "jobTitle": "Data Scientist",
        "location": "Dublin, Ireland",
        "jobDesc": `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`,
    }
]

export default {
    getEducation(cb) {
        setTimeout(() => cb(_experience), 100)
    },

    updateEducation(id, cb, errorCb) {
        setTimeout(() => {
            return true;
        }, 100)
    },
    addEducation(id, cb, errorCb) {
        setTimeout(() => {
            return true;
        }, 100)
    },
    deleteEducation(id, cb, errorCb) {
        setTimeout(() => {
            return true;
        }, 100)
    },
}