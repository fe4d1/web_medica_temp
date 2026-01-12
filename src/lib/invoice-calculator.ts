export class InvoiceCalculator {
    private baseRate: number;
    private taxRate: number;

    constructor(baseRate: number = 100) {
        this.baseRate = baseRate;
        this.taxRate = 0.16; // 16% VAT
    }

    // Method to calculate total with tax
    calculateTotal(services: { price: number }[]): number {
        const subtotal = services.reduce((acc, curr) => acc + curr.price, 0);
        const tax = subtotal * this.taxRate;
        return subtotal + tax + this.baseRate;
    }

    // Static method to format currency
    static formatCurrency(amount: number): string {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(amount);
    }
}
