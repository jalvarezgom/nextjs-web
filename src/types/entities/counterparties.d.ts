export interface CounterpartyBasic {
  id: number;
  name: string;
  type: ClientType;
}

export enum ClientType {
  Client = 1,
  Market = 2,
  OTC = 3,
}
