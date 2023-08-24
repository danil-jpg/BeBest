export const formattedDate = (isoDate) => {
	const now = new Date();
	const startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	const date = new Date(isoDate);

	const isToday =
		startDate.getDate() === date.getDate() &&
		startDate.getMonth() === date.getMonth() &&
		startDate.getFullYear() === date.getFullYear();
	
	const isYesterday = getTimeDiff(now, date) === 0;

	if (isToday) {
		return `Сегодня, ${date.getHours()}:${date.getMinutes()}`;
	}

	if (isYesterday) {
		return `Вчера, ${date.getHours()}:${date.getMinutes()}`;
	}

	return `${date.getDate() + 1}.${addZero(date.getMonth() + 1)}.${date.getFullYear()}`;

}

function getTimeDiff(now, date) {
	return Math.floor((now - date) / 1000 / (60 * 60 * 24));
}

function addZero(num) {
	return num <= 9 ? `0${String(num)}` : num;
}