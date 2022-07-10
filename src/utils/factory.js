const X = require('../Exceptions/operational');
const { Response } = require('../utils/helpers');

exports.create = (model) => {
    return async(req, res, next) => {
        try {
            const doc = await model.create(req.body)
            Response(res, 200, doc)
        } catch (error) {
            next(error)
        
        }
    }
}

exports.deleteOne = (model) => {
    return async (req, res, next)=>{
        try {
            const doc = await model.findByIdAndDelete(req.params.Id);
            if (!doc)
                throw new X('no product found with the provided Id', 404);
            Response(res, 200);
        } catch (error) {
            next(error);
        }
    }
}

exports.editOne = (model) => {
    return async (req, res, next) => {
        try {
            const doc = await model.findByIdAndUpdate(req.params.Id, req.body, {
                runValidators:true, upsert:true
            })
            if(!doc) throw new X('no product found with the provided Id',404)
            Response(res, 200, doc)
        } catch (error) {
            next(error)
            
        }
    }
}

exports.find = (model,one) => {
    return async (req, res, next) => {
        try {
            let doc;
           doc=(one)? 
                doc = await model.findById(req.params.Id) : doc = await model.find()
            if (!doc) throw new X('no product found with the provided Id', 404)
            console.log(doc)
            Response(res,200, doc)    
        } catch (error) {
            next(error)
        }
    }
}

