emailjs.init('MwyMSaOXbRkoDGWFl');
const available = ['2026-10-10', '2026-10-11', '2026-10-12'];
let chosenDate = '';
const dates = document.getElementById('dates');
available.forEach(d => dates.innerHTML += `<label class='card'><input type='radio' name='date' value='${d}'> ${new Date(d+'T00:00').toLocaleDateString('pt-BR')}</label>`);

function startApp() {
    welcome.classList.add('hidden');
    dateStep.classList.remove('hidden');
}

function goFood() {
    const s = document.querySelector('input[name=date]:checked');
    if (!s) return alert('Selecione uma data');
    chosenDate = s.value;
    dateStep.classList.add('hidden');
    foodStep.classList.remove('hidden');
}

function goDrink() {
    foodStep.classList.add('hidden');
    drinkStep.classList.remove('hidden');
}

function goSuggestion() {
    drinkStep.classList.add('hidden');
    suggestionStep.classList.remove('hidden');
}

function showSummary() {
    suggestionStep.classList.add('hidden');
    summaryStep.classList.remove('hidden');
    summary.innerHTML = `<div class='resume'><p><strong>📅 Data:</strong> ${new Date(chosenDate+'T00:00').toLocaleDateString('pt-BR')}</p><p><strong>🍽️ Refeição:</strong> ${food.value}</p><p><strong>🥤 Bebida:</strong> ${drink.value}</p><p><strong>📝 Sugestões:</strong> ${suggestions.value||'Nenhuma'}</p><button class='btn-confirm' onclick='confirmarReserva()'>Confirmar agendamento</button></div>`;
}

function confirmarReserva() {
    const params = {
        data: new Date(chosenDate + 'T00:00').toLocaleDateString('pt-BR'),
        refeicao: food.value,
        bebida: drink.value,
        sugestoes: suggestions.value || 'Nenhuma'
    };
    emailjs.send('service_gmjlpue', 'template_hknjbz8', params).then(() => alert('Agendamento enviada com sucesso!')).catch(() => alert('Configure os dados do EmailJS.'));
}