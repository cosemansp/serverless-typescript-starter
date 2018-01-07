import { Context, Callback, Handler } from 'aws-lambda';

export const runWarm = (lambdaFunc: Handler) => (
  event: any,
  context: Context,
  callback?: Callback,
): Promise<any> | void => {
  // Detect the keep-alive ping from CloudWatch and exit early.
  // This keeps our lambda function running hot.
  if (event.source === 'aws.events') {
    if (callback) {
      return callback(null, 'pinged');
    } else {
      return Promise.resolve('pinged');
    }
  }

  return lambdaFunc(event, context, callback);
};

export const isRunningInLambda = () => !!(process.env.LAMBDA_TASK_ROOT || false);
