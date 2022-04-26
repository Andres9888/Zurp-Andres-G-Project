interface UserDetails {
  id: string;
  monthlySalary: number;
}
interface Account {
  id: string;
  name: string;
  nickname?: string | null;
  institution: string;
  maskedAccountNumber: string;
  splitAllocationAmount?: number;
  isDefault?: boolean;
  parentId?: string | null;
}
export declare function getUserDetails(): Promise<UserDetails>;
export declare function listUserAccounts(): Promise<Account[]>;
export declare function updateUserAccount(id: string, account: Omit<Partial<Account>, "id">): Promise<Account>;