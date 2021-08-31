This set of contracts realize DAO model with ACL subsystem.

DAO can have many different Apps which introduce some loggic for it. 
All of them placed in AppMagaer subsystem of contract. Each call to any of this app is doing over DAO call method.

For example there are 2 apps: 
- Minter which produce tokens (method mint). Simple app not approver.
- Voter which can create voting. Voter is approver so have method approve.

In acl we set <minter>.mint approved_by Voter. And now we want to mint some tokens. We should call <DAO>.call(<minter>, 'mint', ['10', '0x....']) to start next DAO chain.

1. DAO.call check if app <minter> is installed (over AppManager). This protects DAO from unauthorized calls.
2. DAO calls method mint of Minter contract.
3. Minter calls DAO.approve, to approve this call.
4. DAO checks whow can approve such call <minter>.mint and gets Voter.
5. DAO call Voter.approve.
6. Voter in its logic creates voting when he should approve somethong. Voting has task info in it. *Lets think thats easy voting without LP, GP, other token. Just 1 address 1 vote.
7. Voting contract deployed and wait voters actions (vote_yes or no).
8. When voting ends, it calls Voter.done
9. Voter done calls DAO.dispatch.
10. DAO calls minter.dispatch with task info (app, method, args).
11. And voila tokens minted.

Other approvers can have other approve logic. For example inheritance buro, judment interface, dividends mechanism, some IoT manager and so on.

Adding applications to DAO also controlled by approver, so its logic can be as complicated as nedded.

ACL is just subsystem. There is no independent contract in some place. Instead that all app has small acl section which can be changed only by its DAO. So it is safe.