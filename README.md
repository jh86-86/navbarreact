This project was made as a personal test to see whether I could make a navbar without an external library.

depreciated: I use state set pages to not display a page but with the logic, only one page can be visible at anyone time. 

I could import it into other projects but it would seem react router is the most commmon method for navbars. 

New (29.04.21):

I have refractored the code. It now uses a useReducer with a dispatch function on buttons. It now renders pages on the button click and uses visibilty to change the pages visibilty. All done without React router.

