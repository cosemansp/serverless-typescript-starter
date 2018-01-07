import { successResponse, runWarm } from './core';
import { Context, Callback, Handler } from 'aws-lambda';

const handler: Handler = async (event: any, context: Context, callback: any): Promise<any> => {
  const response = successResponse({
    message: 'Go Serverless v1.1! Your function executed successfully!',
    input: event,
  });
  callback(null, response);
};

// runWarm function handles pings from the scheduler so you don't
// have to put that boilerplate in your function.
export default runWarm(handler);
