

const getPublic = async (req,res)=>{
/* const{ name, image, phone, adress, elcomeText} = await Public.findOne({
    were:{
        id:1,
    },
})*/

    const results = {
        id:1,
        name: "somos mas",
        image: "hdbflajgssbd,hvg",
        phone: "563248723645984",
        adress: "dmenfj 19384",
        welcomeText: "sdfbdjHGFBNDCVKJGF<ANBSDFVKfdmnbcKHGF",
    }

    res.status(200).json({results})
}

module.exports={
    getPublic,
}