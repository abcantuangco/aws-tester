const AWS = require('aws-sdk');

AWS.config.update({
  region: 'ap-southeast-1',
});

const documentClient = new AWS.DynamoDB.DocumentClient();

const writeItem = () => {
  const table = 'Arcie_Test_Movies';

  const year = 2015;
  const title = 'The Big New Movie';

  const params = {
    TableName: table,
    Item: {
      year: year,
      title: title,
      info: {
        plot: 'Nothing happens at all.',
        rating: 0,
      },
    },
  };

  console.log('Adding a new item...');
  documentClient.put(params, function (err, data) {
    if (err) {
      console.error(
        'Unable to add item. Error JSON:',
        JSON.stringify(err, null, 2)
      );
    } else {
      console.log('Added item:', JSON.stringify(data, null, 2));
    }
  });
};

writeItem();
