import DangkyServices from '../services/DangkyServices'

let displayDangkyTV = async (req, res) => {
    console.log(req.query)
    switch(req.params.type) {
        case 'username': {
            const data = await DangkyServices.getDangkyTVByName(req.query)
            return res.send(data)
        }
        case 'phone': {
            const data = await DangkyServices.getDangkyTVByPhone(req.query)
            return res.send(data)
        }
        case 'number': {
            const data = await DangkyServices.getDangkyTVByNumber(req.query)
            return res.send(data)
        }
        default: res.send({error: 404, message: 'Can not recognize search type'})
    }
    
}

module.exports = {
    displayDangkyTV,
}