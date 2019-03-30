//synchronous
function syncChores() {
    console.log('Do the laundry');
    console.log('wash the dog');
    console.log('sort the recycling');
  }
syncChores();

function doLaundry() {
    startWashCycle();
    switchToDryer();
    foldAndIronClothes();
  }
  function washDog() {
    // imagine some dog-washing code here
  }
  function sortRecycling() {
    // and imagine some sorting code here
  }
  doLaundry();
  // Now wait a full 80 minutes before completing other functions
  // Now I can finally wash my dog!
  washDog();
  sortRecycling();

//Asychronous

function doLaundry(callback) {
    // imagine initial code that kicks off wash cycle
    // takes 80 minutes to complete wash cycle
    callback(err, cleanLaundry);
  }
  doLaundry(function(err, cleanLaundry) {
    // sometimes our washing machines break down
    // better handle that possible error
    if (err) throw err;
    // if no errors, switch to dryer after wash is complete
    // Tada! Our call back alerting us that washing is complete!
    switchToDryer(cleanLaundry);
  });
  // as we wait, JavaScript will run this stuff now!
  washDog();
  // still time for more chores!
  sortRecycling();
  // the following will be undefined because it is not yet ready
  console.log(cleanLaundry);
  // Now the laundry is ready! 
  // Let's go back and switch clothes to the dryer
  // The clothes are drying. Let's continue doing more chores.
  // Tanya will be impressed with my productivity!
  balanceBudget();
