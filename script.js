let totalCalories = 0;

function addFood() {
    const foodInput = document.getElementById('food');
    const caloriesInput = document.getElementById('calories');
    const foodList = document.getElementById('foodList');

    const foodName = foodInput.value;
    const caloriesValue = parseInt(caloriesInput.value);

    if (foodName && !isNaN(caloriesValue)) {
        totalCalories += caloriesValue;

        // Tambahkan item ke daftar makanan
        const listItem = document.createElement('li');
        listItem.textContent = `${foodName}: ${caloriesValue} kalori`;
        foodList.appendChild(listItem);

        // Update total kalori
        document.getElementById('totalCalories').textContent = totalCalories;

        // Reset input
        foodInput.value = '';
        caloriesInput.value = '';
    } else {
        alert('Masukkan nama makanan dan kalori yang valid.');
    }
}
