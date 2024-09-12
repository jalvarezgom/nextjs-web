import { CounterpartyBasic } from "./counterparties";

export interface DealDatatable {
  id: string;
  code: string;
  trade_date: string;
  status: string;
  proposed_to: string;
  sense: string;
  volume: number;
  measurement_unit: string;
  counterparty: CounterpartyBasic;
  commodity_group: string;
  broker: string;
}
