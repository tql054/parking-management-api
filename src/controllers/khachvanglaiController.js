import khachvanglaiServices from '../services/khachvanglaiServices';
let postKVL = async (req, res) => {
    try {
        let response = await khachvanglaiServices.createKVL(req.body)
        res.redirect("http://localhost:3000/")
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server: ' + e
        })
    }
}
module.exports = {
    postKVL
}