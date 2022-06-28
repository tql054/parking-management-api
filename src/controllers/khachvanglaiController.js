import khachvanglaiServices from '../services/khachvanglaiServices';
let postKVL = async (req, res) => {
    console.log(req.body.params)
    try {
        let response =  await khachvanglaiServices.createKVL(req.body.params)
        console.log('dang ky')
        return res.status(200).json(response)
    } catch(e) {
        console.log(e)
        return res.status(500).json({
            errCode: -1,
            errMessage: 'Error from server: ' + e
        })
    }
}
module.exports = {
    postKVL
}