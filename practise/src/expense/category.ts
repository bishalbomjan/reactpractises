export const category = ["Entertainment","Grocery","Education",'Luxary'] as const
export interface Expense {
  id: number;
  description: string;
  price: number;
  category: string;
}