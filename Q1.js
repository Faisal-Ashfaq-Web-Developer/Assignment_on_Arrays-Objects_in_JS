const customers = [
    { customerID: 1, customerName: "Faisal", totalBillingAmount: 2500 },
    { customerID: 2, customerName: "Ajay", totalBillingAmount: 3500 },
    { customerID: 3, customerName: "Neeraj", totalBillingAmount: 4200 },
    { customerID: 4, customerName: "Sohail", totalBillingAmount: 2800 },
    ];
    
    const selectedCustomers = customers.filter(customer => customer.totalBillingAmount > 3000);
    
    const customerDetails = selectedCustomers.map(customer => {
        return {
        customerName: customer.customerName,
        purchaseDetails: `Customer ID: ${customer.customerID}, Total Billing Amount: Rs. ${customer.totalBillingAmount}`
        };
    });
    customerDetails.reduce((_, customer) => {
        console.log(`Customer Name: ${customer.customerName}, ${customer.purchaseDetails}`);
    }, null);
