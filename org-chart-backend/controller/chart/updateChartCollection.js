const { Categories } = require('../../models');
const { updateOne } = require('../../utils/crud');

module.exports = async (req, res) => {
  try {
    const body = req.body;
    const collection = await updateCategoriesByType(body);
    return res.status(200).send({
      data: { collection: collection.data },
    });
  } catch (err) {
    return res
      .status(err.status || 500)
      .send({ errors: [{ message: err.message }] });
  }
};

async function updateCategoriesByType({ type, collectionId, collection }) {
  const updateCollectionQuery = {
    data: {
      data: collection,
    },
    where: {
      _id: collectionId,
      type: type,
    },
  };

  const updatedCollection = await updateOne(Categories, updateCollectionQuery);
  return updatedCollection;
}
