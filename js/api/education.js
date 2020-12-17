const _education = [{
        "id": 1,
        "startDate": "2008",
        "endDate": "2012",
        "degree": "B.Tech",
        "education": "Computer Science",
        "institute": "KIIT University",
    },
    {
        "id": 2,
        "startDate": "2019",
        "endDate": "2020",
        "degree": "Masters",
        "education": "Data Analytics",
        "institute": "KIIT University",
    }
]

export default {
    getEducation(cb) {
        setTimeout(() => cb(_education), 100)
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