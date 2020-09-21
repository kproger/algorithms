const bubbleSort = (items) => {
    let stepsCount = items.length - 1;

    let swapped;

    do {
      swapped = false;

      for (let i = 0; i < stepsCount; i += 1) {
        if (items[i] > items[i + 1]) {
          let temp = items[i];
          items[i] = items[i + 1];
          items[i + 1] = temp;
          
          swapped = true;
        }
      }
      
      stepsCount -= 1;
    } while(swapped)

    return items
  }
