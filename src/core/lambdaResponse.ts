function lambdaResponse(json: any, statusCode: number, allowCORS = false) {
  const response = {
    statusCode,
    headers: {},
    body: JSON.stringify(json),
  };

  if (allowCORS) {
    response.headers = {
      'Access-Control-Allow-Origin': '*',
    };
  }

  return response;
}

export function errorResponse(json: any) {
  return lambdaResponse(json, 500);
}

export function corsErrorResponse(json: any) {
  return lambdaResponse(json, 500, true);
}

export function successResponse(json: any) {
  return lambdaResponse(json, 200);
}

export function corsSuccessResponse(json: any) {
  return lambdaResponse(json, 200, true);
}
