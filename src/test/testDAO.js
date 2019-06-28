const TestModel = require('./schema');


const getTestObject = async () => {
  try {
    const testObject = await TestModel.findOne({ testField: 'Hello, World!' });

    return testObject;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getTestObject
};
