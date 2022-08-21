let network = new brain.NeuralNetwork();

function update(e) {
    let r = { red: e[0] / 255, green: e[1] / 255, blue: e[2] / 255 };
    return network.run(r).color;
}

network.train([
    { input: { red: 0, green: 0, blue: 0 }, output: { color: 1 } },
    { input: { red: 0, green: 1, blue: 0 }, output: { color: 0 } },
    { input: { red: 0, green: 0, blue: 0.34 }, output: { color: 1 } },
    { input: { red: 1, green: 0, blue: 0 }, output: { color: 1 } },
    { input: { red: 0, green: 0.4, blue: 1 }, output: { color: 1 } },
    { input: { red: 1, green: 1, blue: 1 }, output: { color: 0 } },
]);

// Exportaciones

window.networkUpdateColor = update;