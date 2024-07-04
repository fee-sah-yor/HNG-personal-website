document.addEventListener('DOMContentLoaded', () => {
    const currentTimeUTC = new Date().toISOString().slice(11, 19);
    document.querySelector('[data-testid="currentTimeUTC"]').textContent = currentTimeUTC;    
    
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = days[new Date().getUTCDay()];
    document.querySelector('[data-testid="currentDay"]').textContent = currentDay;
});
