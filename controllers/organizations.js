// models
const { organizations } = require("../models")
const getPublic = async (req, res) => {
  /* const{ name, image, phone, adress, elcomeText} = await Public.findOne({
    were:{
        id:1,
    },
})*/

  try {
    const organization = await organizations.findAll()
    res.status(200).json({ organizations: organization })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }

  //   const results = {
  //     id: 1,
  //     name: "somos mas",
  //     image: "hdbflajgssbd,hvg",
  //     phone: "563248723645984",
  //     adress: "dmenfj 19384",
  //     welcomeText: "sdfbdjHGFBNDCVKJGF<ANBSDFVKfdmnbcKHGF",
  //   }
  //   res.status(200).json({ results })
}

module.exports = {
  getPublic,
}
