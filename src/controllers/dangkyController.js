import DangkyServices from '../services/DangkyServices'

let displayDangkyTV = async (req, res) => {
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
        default: {
            const data = await DangkyServices.getDangkyTV()
            res.send(data)
        }
    }
    
}

let displayDangkyVL = async (req, res) => {
    console.log(req.params.type)
    switch(req.params.type) {
        case undefined: {
            const data = await DangkyServices.getDangkyVL()
            return res.send(data)
        }
        case 'username': {
            // const data = await DangkyServices.getDangkyVLByName(req.query)
            return res.send([])
        }
        case 'phone': {
            const data = await DangkyServices.getDangkyVLByPhone(req.query)
            return res.send(data)
        }
        case 'number': {
            const data = await DangkyServices.getDangkyVLByNumber(req.query)
            return res.send(data)
        }
        default: res.send({error: 404, message: 'Can not recognize search type'})
    }
    
}

module.exports = {
    displayDangkyTV,
    displayDangkyVL
}