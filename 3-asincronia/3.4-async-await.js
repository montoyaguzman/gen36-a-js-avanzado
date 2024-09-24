/**
 * BLOQUE 5 - Solucion con async await
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

async function main() {
    console.log('========== BLOQUE 4 ==========');
    console.log('1. Dar click en pagar');
    await validatePayment();
    showSuccesMessage();
    console.log('4. en reparto...');
}

main();