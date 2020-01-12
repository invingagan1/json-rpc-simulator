export interface SimulatorApi {
  object: string;
  method: string;
  interval: number;
  repeat: boolean;
  responses: SimulatorResponse[];
}
export interface SimulatorResponse {
  type: ResponseTypeEnum;
  result?: Result;
  error?: Error;
}
export enum ResponseTypeEnum {
  Result = 'result',
  Error = 'error'
}
export interface Result {
  type: ResultTypeEnum;
  value: any;
}
export interface Error {
  code: number;
  message: string;
  data?: any;
}
export enum ResultTypeEnum {
  String = 'string',
  Number = 'number',
  Boolean = 'boolean',
  Array = 'array',
  Object = 'object',
}
