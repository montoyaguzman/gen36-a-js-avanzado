/**
 * BLOQUE 3 - Solucion con callbacks
 */
const showSuccesMessage = () => {
    console.log('3. Enviando producto');
};

const validatePayment = (showSuccesMessage) => {
    setTimeout(() => {
        console.log('2. Validando pago...');
        showSuccesMessage();
    }, 0);
}

// flujo main
console.log('========== BLOQUE 3 ==========');
console.log('1. Dar click en pagar');
validatePayment(showSuccesMessage);