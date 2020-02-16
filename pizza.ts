function pizza(
  maxNumberOfSlicesToOrder: number,
  numberOfPizzaTypes: number,
  numberOfSlicesInPizzaType: number[]
): string {
  let leftNumberOfSlicesToOrder = 0;
  let pizzaTypesNumber: number = 0;
  let pizzaTypesToOrder: number[] = [];

  // numberOfSlicesInPizzaType.forEach(element => {
  //   if (element === maxNumberOfSlicesToOrder) {
  //     pizzaTypesNumber = 1;
  //     pizzaTypesToOrder.push(numberOfSlicesInPizzaType.indexOf(element));
  //     leftNumberOfSlicesToOrder = maxNumberOfSlicesToOrder;
  //     console.log(leftNumberOfSlicesToOrder);
  //   } else if (leftNumberOfSlicesToOrder +element <= maxNumberOfSlicesToOrder) {
  //     console.log(leftNumberOfSlicesToOrder + element);
  //     pizzaTypesNumber++;
  //     leftNumberOfSlicesToOrder = +element;
  //     console.log(leftNumberOfSlicesToOrder)
  //     pizzaTypesToOrder.push(numberOfSlicesInPizzaType.indexOf(element));

  //   }
  // });

  return (
    "Number of different types of pizza to order: " +
    pizzaTypesNumber +
    " and types of pizza are: " +
    pizzaTypesToOrder
  );
}

console.log(pizza(17, 4, [2, 17, 6, 8]));
