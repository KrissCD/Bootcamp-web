const fetchData = new Promise((resolve, reject) => {
    let received = false;

    setTimeout(() => {
        if (received) {
            console.log("Data received successfully");
            resolve("Data fetch successful");
        } else {
            reject("Data fetch failed: No data received");
        }
    }, 2000);
});


fetchData
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    });


async function getdata() {
    console.log("Fetching data...");

    try {
        const response = await fetchData;
        console.log(response);
    } catch (error) {
        console.error("Error in async function:", error);
    }
}
