import handler from './handler';

describe('handler', () => {
  it('executes as expected', async () => {
    const result = await handler({}, {} as AWSLambda.Context);
    expect(result).toMatchSnapshot();
  });
});
