

const gitAllProductsStatic = async (req,res) => {
    // throw new Error("testing async errors")
    res.status(200).json({msg: 'products testing route'})
}

const gitAllProducts = async (req,res) => {
    res.status(200).json({msg: "products route"})
}

module.exports = {
    gitAllProducts,
    gitAllProductsStatic
}