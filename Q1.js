// Sample data array of customers
const customers = [
    { customerID: 1, customerName: "Faisal", totalBillingAmount: 2500 },
    { customerID: 2, customerName: "Ajay", totalBillingAmount: 3500 },
    { customerID: 3, customerName: "Neeraj", totalBillingAmount: 4200 },
    { customerID: 4, customerName: "Sohail", totalBillingAmount: 2800 },
    ];
    
    // Use filter to select customers with totalBillingAmount > 3000
    const selectedCustomers = customers.filter(customer => customer.totalBillingAmount > 3000);
    
    // Use map to create an array of customer names and purchase details
    const customerDetails = selectedCustomers.map(customer => {
        return {
        customerName: customer.customerName,
        purchaseDetails: `Customer ID: ${customer.customerID}, Total Billing Amount: Rs. ${customer.totalBillingAmount}`
        };
    });
    
    // Use reduce to print the customer names and their purchase details
    customerDetails.reduce((_, customer) => {
        console.log(`Customer Name: ${customer.customerName}, ${customer.purchaseDetails}`);
    }, null);