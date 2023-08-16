""" 
Create a BankAccount class 
    - state
        AcctId
        AcctHolderName
    - behaviors
        Deposit
            validation : money cannot be negative
        Withdraw
            validation : money cannot be negative
        GetBalance()
"""

class BankAccount:
    def __init__(self, acctId, holderName):
        self.AcctId = acctId
        self.AcctHolderName = holderName
        self.balance = 0
    def deposit(self, amount):
        if amount < 0 :
            # raise an exception
            pass
        self.balance += amount    
    def withdraw(self, amount):
        if amount < 0 :
            # raise an exception
            pass
        # ensure there is sufficient balance to perform withdrawl
        """ 
        if insufficentBalance:
            # raise an exception
            pass 
        """
        self.balance -= amount
        
    def getBalance(self):
        #calculate the balance from the transactions performed and return the balance
        pass
    
    def transactionHistory(self):
        #return all the transactions
        pass
        