# Paycheck distribution problem

### Exercise details:

Do your best to complete the set of requirements below. We've included a video and image of what we would like the final product to look, and function like. We don't want you working long hours for this exercise, please take no longer than 2 hours on this exercise. It is OK if you don't finish.

With the time constraint we expect tradeoffs to be made. Comment in the code if you make explicit tradeoffs.

After you complete the problem, we will schedule some time to go over it with you. Good luck!

### Problem:

A nice feature of some human resource systems is the ability to direct deposit your monthly paycheck into different accounts. In this exercise we'd like you to create a user interface that will allow user to modify the allocation of their paycheck into different accounts.

We have provided you with an API to interact with the user and their accounts. Here the definition of the interface:

```typescript
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
}

function getUserDetails(): Promise<UserDetails>;

function listUserAccounts(): Promise<Account[]>;

function updateUserAccount(
  id: string,
  account: { splitAllocationAmount: number }
): Promise<Account>;
```

⭐️ You can access the API by importing it from the file `api.js`

```javascript
// importing in App.js
import * as API from "./api.js";
```

### Requirements

- You cannot use pre-made React components, stylesheets (like tailwind or bootstrap), or frameworks. Using styling libraries like styled-components is OK.

- Style

  - Style the interface to look like the screenshot provided (to the best fo your ability and within reason).

- Data

  - Use the provided API to display:
    - The Users total monthly salary
    - Each of the users accounts
      - For each account display: The Account name, masked account number, and institution, as well as the accounts allocation amount
      - There should also be an indication of whether or not an account is the default one.

- Updates

  - The interface should allow the user to:
    - Update the allocation of the non-default amounts when an amount is entered into an input and the save button is pressed.
    - The amounts should never exceed the monthly salary.
    - All funds that are not specifically allocated should be allocated to the default account.
    - The default account should not be editable.
    - If the user attempts to add more than the available funds to any given account an error should be displayed.

Here is a video showing the working input with all of the functionality mentioned above: https://user-images.githubusercontent.com/6516758/162853701-8089b3ed-1849-4593-805f-a65520207a51.mp4

You can use the image, example.png, to match your styling too.
