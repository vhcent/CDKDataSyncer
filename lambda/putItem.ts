import { DynamoDB } from 'aws-sdk';

const dynamodb = new DynamoDB.DocumentClient();

export const handler = async (event: any) => {
  const params = {
    TableName: process.env.TABLE_NAME!, // Your table name
    Item: {
      id: "123",           // Required - this is your partition key
      name: "John Doe",    // Optional - additional attributes
      email: "john@example.com",
      createdAt: new Date().toISOString()
    }
  };

  try {
    await dynamodb.put(params).promise();
    return { statusCode: 200, body: 'Item added successfully' };
  } catch (error) {
    console.error('Error:', error);
    return { statusCode: 500, body: 'Error adding item' };
  }
}; 