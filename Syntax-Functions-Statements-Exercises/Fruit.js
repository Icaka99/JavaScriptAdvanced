function fruit (fruit, weightInGrams, pricePerKilogram) {
    let totalWeightInKg = (weightInGrams / 1000).toFixed(2);
    let totalPrice = (pricePerKilogram * (weightInGrams / 1000)).toFixed(2)
    return `I need $${totalPrice} to buy ${totalWeightInKg} kilograms ${fruit}.`;
}