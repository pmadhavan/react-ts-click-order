### Summary

This is a small react challenge to store the user's click order and highlight in the same order.
On click of the box, it's color changes to green. When all the boxes are green, they should go back to previous color white one by one by 1 sec delay in the exact order they were clicked in.

### UI component

- ClickOrder
  - Square

### Data

- clickOrder array of box ids
- isFinished

### Learnings

- Cannot use for loop inside jsx instead use a function with for loop and add the jsx elements to array and display array
- Or use [...Array(n)].fill(0)

### Status

Incomplete
