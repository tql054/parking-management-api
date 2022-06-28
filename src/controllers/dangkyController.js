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
    switch(req.params.type) {
        case undefined: {
            const data = await DangkyServices.getDangkyVL()
            return res.send(data)
        }
        case 'username': {
            const data = await DangkyServices.getDangkyVLByName(req.query)
            return res.send(data)
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

let displayDangkyById = async (req, res) => {
    switch(req.params.option) {
        case 'KTV': {
            const data = await DangkyServices.getDangkyTVByID(req.query)
            return res.send(data)
        } 

        case 'KVL': {
            const data = await DangkyServices.getDangkyVLByID(req.query)
            return res.send([data])
        }

        default: {
            const data = DangkyServices.getDangkyTV()
            return res.send(data)
        }
    }
}

let checkoutThanhvien = async (req, res) => {
    try {
        const response = await DangkyServices.checkoutDangkyTV(req.params.id, req.body.params)
        console.log(response)
        return res.status(200).json(response)
    } catch (e) {
        console.log(e)
        return res.status(500).json({
            errCode: -1,
            errMessage: 'Error from server: ' + e
        })
    }
}

let checkoutVanglai= async (req, res) => {
    try {
        const response = await DangkyServices.checkoutDangkyVL(req.params)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(500).json({
            errCode: -1,
            errMessage: 'Error from server: ' + e
        })
    }
}

let postDangkyTVByNV = async (req, res) => {
    try {
        let response =  await DangkyServices.postDangkyTVByNV(req.body.params)
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
    displayDangkyTV,
    displayDangkyVL,
    displayDangkyById,
    checkoutThanhvien,
    checkoutVanglai,
    postDangkyTVByNV
}