// test_are_equal =================================================================================

function test_are_equal(actual, expected) {
    if (actual != expected) {
        throw new Error("Expected '" + expected + "' but got '" + actual + "'.");
    }
}

function test_arrays_are_equal(actual, expected) {

    if (actual.length != expected.length) {
        throw new Error("Expected '" + expected + "' but got '" + actual + "'.");
    }

    for (var i = 0; i < actual.length; i++) {
        if (actual[i] != expected[i]) {
            throw new Error("Expected '" + expected + "' but got '" + actual + "'.");
        }
    }
}



// unitTesting ====================================================================================

function unitTesting() {

    // checkForMill
    test_are_equal(checkForMill(testBoard1, "white"), -1);
    test_are_equal(checkForMill(testBoard2, "white"), 3);
    test_are_equal(checkForMill(testBoard3, "white"), 7);
    test_are_equal(checkForMill(testBoard3, "black"), -1);
    test_are_equal(checkForMill(testBoard4, "black"), 7);
    
    console.log("All tests passed.")
}
unitTesting();