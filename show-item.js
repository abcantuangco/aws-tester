const AWS = require('aws-sdk');

AWS.config.update({
  region: 'ap-southeast-1',
});

const documentClient = new AWS.DynamoDB.DocumentClient();

const getItem = () => {
  const table = 'Arcie_Test_Movies';

  const year = 2015;
  const title = 'The Big New Movie';

  const params = {
    TableName: table,
    Key: {
      year: year,
      title: title,
    },
  };

  documentClient.get(params, function (err, data) {
    if (err) {
      console.error(
        'Unable to read item. Error JSON:',
        JSON.stringify(err, null, 2)
      );
    } else {
      console.log('GetItem succeeded:', JSON.stringify(data, null, 2));
    }
  });
};

getItem();
