const bonusBalance = 0; // Начальный баланс (замените на нужное значение)

const bonusPerPurchase = 50; // Баллы за покупку
const pointsDecayPerDay = 3; // Баллы, которые сгорают каждый день
const days = 7; // Сколько дней необходимо рассчитать
const purchasesIn7Days = Math.floor(days / 2); // Количество покупок за 7 дней

function calculateBonusBalance() {
    // Сначала начисляем бонусы за покупки
    let totalBonus = bonusBalance + (bonusPerPurchase * purchasesIn7Days);

    // Затем учитываем сгорание баллов
    let totalDecay = pointsDecayPerDay * days;
    totalBonus -= totalDecay;

    // Убедимся, что баланс не стал отрицательным
    if (totalBonus < 0) {
        totalBonus = 0;
    }

    return totalBonus;
}

document.getElementById('calculateButton').addEventListener('click', () => {
    const finalBalance = calculateBonusBalance();
    document.getElementById('result').innerText = `Баланс через 7 дней: ${finalBalance} баллов`;
});