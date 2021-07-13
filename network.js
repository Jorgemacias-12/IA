let network = new brain.NeuralNetwork();
network.train([
    {input: {red: 0, green: 0, blue: 0}, output: {color: 1}},
    {input: {red: 0, green: 1, blue: 0}, output: {color: 0}},
    {input: {red: 0, green: 0, blue: .34}, output: {color: 1}},
    {input: {red: 1, green: 0, blue: 0}, output: {color: 1}},
    {input: {red: 0, green: .40, blue: 1}, output: {color: 1}},
    {input: {red: 1, green: 1, blue: 1}, output: {color: 0}},
]);

function update(color){
    let entry = {
        red: color[0]/255,
        green: color[1]/255,
        blue: color[2]/255,
    }
    let result = network.run(entry);
    console.log(result['color']);
    return result['color'];
}
