module.exports = function main(inputs) {
    var price = 0
    if (inputs.distance < 2) {
        price = 6 + inputs.parkTime * 0.25
    } else if (inputs.distance > 2 && inputs.distance < 8) {
        price = 6 + (inputs.distance - 2) * 0.8 + inputs.parkTime * 0.25
    } else if (inputs.distance > 8) {
        price = 6 + 6 * 0.8 + (inputs.distance - 8) * (0.8 + 0.8 * 0.5) + inputs.parkTime * 0.25
    }
    return Math.round(price);
};
