export type TCoin = {
  name: string;
  symbol: string;
  price: number;
  volume_24h: number;
  market_cap: number;
  price_change_24h: number;
  circulating_supply: number;
  high_24h: number;
  low_24h: number;
};

export type TNotification = {
  id: number;
  headerText: string;
  bodyText: string;
  date: string;
};
