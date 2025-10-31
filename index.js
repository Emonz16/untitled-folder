
const timeout = ms => new Promise(res => setTimeout(res, ms));

(async () => {
    console.log('Starting delay...');
    await timeout(200000); // 200 seconds
    console.log('Delay of 200 seconds finished.');
})();

for (let i = 0; i < 50000; i++) {
    await timeout(100);
    console.log(`Iteration number: ${i}`);
}