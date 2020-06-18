function calorieObj (params) {
    
    let calorieObj = {};

    for (let i = 0; i < params.length; i += 2) {
        let currFood = params[i];
        let currCalories = Number(params[i + 1]);

        calorieObj[currFood] = currCalories;
    }

    console.log(calorieObj);
}

calorieObj(['Yoghurt', '48', 'Food', '21', 'asd', '243'])