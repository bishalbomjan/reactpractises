export const category = ['Grocery','Utilities','Entertainment']
export interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}