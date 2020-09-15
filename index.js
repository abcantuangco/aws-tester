const AWS = require('aws-sdk');

AWS.config.update({
  region: 'ap-southeast-1',
});

const dynamodb = new AWS.DynamoDB();

// console.log({ dynamodb });

const listTables = () => {
  dynamodb.listTables({}, function (err, data) {
    if (err) console.log(err, err.stack);
    // an error occurred
    else console.log(data); // successful response
  });
};

listTables();
