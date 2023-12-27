export interface IInstruction {
    instructionId: number;
    action: string;
    amount: number;
    securityId: string;
    fsrAccount: string;
    tradeDate: Date
}
