const worksList = require('./workList');


const getAllWorks = (req, res) => {
    const works = worksList.getWorkList();

    res.json(works);
}
//KEEP IT
const getList = (req, res) => {
    const works = worksList.getWorkList();
    let sendList = [];

    sendList = works.map((obj, i) => {
        const temp = {
            id: i,
            img: obj.img
        }

        return temp
    })
    res.json(sendList);
}


module.exports = {
    getAllWorks,
    getList
}