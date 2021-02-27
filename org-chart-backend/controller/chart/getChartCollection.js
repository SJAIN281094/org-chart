const { Categories } = require('../../models');
const { findOne } = require('../../utils/crud');

module.exports = async (req, res) => {
  try {
    const { type } = req.params;
    const collection = await getCategoriesByType({ type });
    return res.status(200).send({
      data: { collectionId: collection._id, collection: collection.data },
    });
  } catch (err) {
    return res
      .status(err.status || 500)
      .send({ errors: [{ message: err.message }] });
  }
};

async function getCategoriesByType({ type }) {
  const findCollectionQuery = {
    type: type,
  };

  const collection = await findOne(Categories, findCollectionQuery);
  return collection;
}
