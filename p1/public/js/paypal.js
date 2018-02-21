paypal.Button.render({
    env: 'sandbox', // Or 'sandbox',

    commit: true, // Show a 'Pay Now' button

    style: {
        color: 'gold',
        size: 'small'
    },

    client: {
        sandbox:    '',
        production: ''
    },

    payment: function (data, actions) {
        return actions.payment.create({
            payment: {
                transactions: [
                    {
                        amount: { total: 10, currency: 'MXN' }
                    }
                ]
            }
        });
    },

    onAuthorize: function (data, actions) {
        return actions.payment.execute().then(function(payment) {

            // The payment is complete!
            // You can now show a confirmation message to the customer
        });
    },

    onCancel: function (data, actions) {
        /* 
         * Buyer cancelled the payment 
         */
    },

    onError: function (err) {
        /* 
         * An error occurred during the transaction 
         */
    }
}, '#paypal-button');