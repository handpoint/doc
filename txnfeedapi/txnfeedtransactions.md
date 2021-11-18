---
sidebar_position: 2
id: txnfeedtransactions
---

# Transactions Endpoints

## getMrchtPayoutsTxnsForAdmin
This endpoint returns all transactions representing an income of cash flow (EMV Sale, MSR Sale, Refund Reversal, Refund Cancellation and Pre-authorization Capture. 
The {partner_id_alpha} and {merchant_id_alpha} are unique id's assigned to each partner and each merchant in the Handpoint Terminal Management System (TMS).


```
/transactions/{partner_id_alpha}/{merchant_id_alpha}/payouts
```



## getMrchtRefsAndRevsTxnsForAdmin

The refunds and reversals endpoint returns all transactions representing an outgoing of cash flow (EMV Refund, MSR Refund, Sale Reversal, Sale Cancellation and Pre-authorization Capture Reversal). 
 The {partner_id_alpha} and {merchant_id_alpha} are unique id's assigned to each partner and each merchant in the Handpoint Terminal Management System (TMS).


 ## getMrchtTxnsForAdmin
 This endpoint returns the transactions of a merchant. 
 The {partner_id_alpha} and {merchant_id_alpha} are unique id's assigned to each partner and each merchant in the Handpoint Terminal Management System (TMS). 
 Max batch size per request: 10000 records. Use initPosition in request body for paging data.

 ## getPayoutsTxns
 The payouts endpoint returns all transactions representing an income of cash flow (EMV Sale, MSR Sale, Refund Reversal, Refund Cancellation and Pre-authorization Capture).



 ## getPrtnOrMrchtPayoutsTxns
 This endpoint returns all transactions representing an income of cash flow (EMV Sale, MSR Sale, Refund Reversal, Refund Cancellation and Pre-authorization Capture) for a specific partner/merchant using their unique {id_alpha}. 
 The {id_alpha} can either be the {merchant_id_alpha} or the {partner_id_alpha}. 
 The {id_alpha} is a unique id assigned to each partner and each merchant in the Handpoint Terminal Management System (TMS).