const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    unix: {type: Number},
    date: {type: Date},
    symbol: {type: String},
    open: {type: Number},
    high: {type: Number},
    low: {type: Number},
    close: {type: Number},
    atr15m: {type: Number},
    up: {type: Number},
    down: {type: Number},
    chartOHLC: {type: Array},
}, {
    collection: 'btc/usd-ftx-15m'
})

module.exports = mongoose.model('BTC_USDT_FTX/15m', schema);