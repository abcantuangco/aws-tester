const AWS = require('aws-sdk');

AWS.config.update({
  region: 'ap-southeast-1',
});

const dynamodb = new AWS.DynamoDB();

const createTable = () => {
  var params = {
    TableName: 'Arcie_Test_Movies',
    KeySchema: [
      { AttributeName: 'year', KeyType: 'HASH' }, //Partition key
      { AttributeName: 'title', KeyType: 'RANGE' }, //Sort key
    ],
    AttributeDefinitions: [
      { AttributeName: 'year', AttributeType: 'N' },
      { AttributeName: 'title', AttributeType: 'S' },
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 1,
      WriteCapacityUnits: 1,
    },
  };

  dynamodb.createTable(params, function (err, data) {
    if (err) {
      console.error(
        'Unable to create table. Error JSON:',
        JSON.stringify(err, null, 2)
      );
    } else {
      console.log(
        'Created table. Table description JSON:',
        JSON.stringify(data, null, 2)
      );
    }
  });
};

createTable();
