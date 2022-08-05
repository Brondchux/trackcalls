const markets = ["USD", "NGN", "JPY", "CNY"];
const currencies = ["BTC", "USD", "NGN", "JPY", "CNY"];
const symbols = ["BTC", "ETH"];
const intervals = ["1min", "5min", "15min", "30min", "60min"];
const outputsizes = ["compact", "full"];
const datatypes = ["json", "csv"];
const noValue = [];

const functions = {
	CURRENCY_EXCHANGE_RATE: {
		required: [
			{ param: "from_currency", values: currencies },
			{ param: "to_currency", values: currencies },
		],
	},
	CRYPTO_INTRADAY: {
		required: [
			{ param: "symbol", values: symbols },
			{ param: "market", values: markets },
			{ param: "interval", values: intervals },
		],
		optional: [
			{ param: "outputsize", values: outputsizes },
			{ param: "datatype", values: datatypes },
		],
	},
	DIGITAL_CURRENCY_DAILY: {
		required: [
			{ param: "symbol", values: symbols },
			{ param: "market", values: markets },
		],
	},
	DIGITAL_CURRENCY_WEEKLY: {
		required: [
			{ param: "symbol", values: symbols },
			{ param: "market", values: markets },
		],
	},
	DIGITAL_CURRENCY_MONTHLY: {
		required: [
			{ param: "symbol", values: symbols },
			{ param: "market", values: markets },
		],
	},
	OTHERS: {
		required: [{ param: "manual", values: noValue }],
	},
};

export default functions;
