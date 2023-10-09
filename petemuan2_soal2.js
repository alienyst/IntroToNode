const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const orderProcess = new MyEmitter();

const choose = choices => {
    const index = Math.floor(Math.random() * choices.length);
    return choices[index];
};

orderProcess.on('order', (order) => {
    const pemesan = choose(['Ucok', 'Ruhut', 'Lambok', 'Posman', 'Jekson', 'Pontas']);
    console.log(`${pemesan} membuat pemesanan dengan nomor ${order}`);
});

orderProcess.on('orderError', (err) => {
    console.error('Terjadi kesalahan : ', err.message);
});

const placeOrder = (order, callback) => {
    try {
        order = parseInt(order);
        if (order < 1000 || order > 2000) {
            orderProcess.emit('orderError', new Error(`Nomor pesanan ${order} tidak valid!`));
        } else {
            orderProcess.emit('order', order);
            callback(order)
        }
    } catch (error) {
        orderProcess.emit('orderError', error);
    }
};

lamaPesanan = waktu => {
    setTimeout(() => {
        console.log(`Pesanan nomor ${waktu}, menuju meja makan!`);
    }, waktu);
}


placeOrder('1000', lamaPesanan);
placeOrder('1210', lamaPesanan);
placeOrder('1110', lamaPesanan);
placeOrder('1300', lamaPesanan);
placeOrder('2000', lamaPesanan);