const brain = require('brain.js');


const network = new brain.NeuralNetwork();

network.train([
    {input:{time: 0.06}, output:{goodMornig:1, goodAfternoon: 0, goodEvening: 0}},
    {input:{time: 0.14}, output:{goodMornig:0, goodAfternoon: 1, goodEvening: 0}},
    {input:{time: 0.20}, output:{goodMornig:0, goodAfternoon: 0, goodEvening: 1}}
])

for(let i=0; i<24; i++)
{
    const output = network.run({time: i/100});
    console.log(`Time = ${i} hours \n`);
    if(output.goodMornig>0.5)
        var MorningOutp = 1;
    else
        var MorningOutp = 0;
    console.log(`Morning Greeting: ${MorningOutp} \n`);
    if(output.goodAfternoon>0.5)
        var AfternoonOutp = 1;
    else
        var AfternoonOutp = 0;
    console.log(`Afternoon Greeting: ${AfternoonOutp} \n`);
    if(output.goodEvening>0.5)
        var EveningOutp = 1;
    else
        var EveningOutp = 0;
    console.log(`Evening Greeting: ${EveningOutp} \n`);
}

