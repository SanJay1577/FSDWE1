//
function startingOperation(fn) {
  console.log("starting");
  fn(); //firstOperation()
}
function firstOperation(fn) {
  console.log("first Operation");
  fn();
}
function secondOperation(fn) {
  setTimeout(() => {
    console.log("second Operation");
    fn();
  }, 2000);
}
function thirdOperation(fn) {
  console.log("third Operation");
  fn();
}
function fourthOperation(fn) {
  setTimeout(() => {
    console.log("fourth Operation");
    fn();
  }, 4000);
}
function fifthOperation(fn) {
  setTimeout(() => {
    console.log("fifth Operation");
    fn();
  }, 1000);
}
function competeOperation() {
  console.log("competed");
}

function doTheWork() {
  startingOperation(() => {
    firstOperation(() => {
      secondOperation(() => {
        thirdOperation(() => {
          fourthOperation(() => {
            fifthOperation(() => {
              startingOperation(() => {
                firstOperation(() => {
                  secondOperation(() => {
                    thirdOperation(() => {
                      fourthOperation(() => {
                        fifthOperation(() => {
                          startingOperation(() => {
                            firstOperation(() => {
                              secondOperation(() => {
                                thirdOperation(() => {
                                  fourthOperation(() => {
                                    fifthOperation(() => {
                                      startingOperation(() => {
                                        firstOperation(() => {
                                          secondOperation(() => {
                                            thirdOperation(() => {
                                              fourthOperation(() => {
                                                fifthOperation(() => {
                                                  competeOperation();
                                                });
                                              });
                                            });
                                          });
                                        });
                                      });
                                    });
                                  });
                                });
                              });
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
}
// doTheWork();
