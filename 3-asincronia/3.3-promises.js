/**
 * BLOQUE 4 - Solucion con promesas (pending, reject, resolve) 
 */

const showSuccesMessage = () => {
    console.log('3. Enviando producto');
};

const validatePayment = () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('2. Validando pago...');
            resolve();
            // reject();
        }, 0);
    });

}

// flujo main
console.log('========== BLOQUE 3 ==========');
console.log('1. Dar click en pagar');
validatePayment()
    .then(() => {
        showSuccesMessage();
    }).then(() => {
        console.log('4. en reparto...');
    });