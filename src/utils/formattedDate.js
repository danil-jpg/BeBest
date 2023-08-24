export const formattedDate = (isoDate) => {
	const now = new Date();
	const date = new Date(isoDate);
	const isToday = getTimeDiff(now, date) < 1;
	const isYesterday = getTimeDiff(now, date) < 2;

	if (isToday) {
		return `Сегодня, ${date.getHours()}:${date.getMinutes()}`;
	}

	if (isYesterday) {
		return `Вчера, ${date.getHours()}:${date.getMinutes()}`;
	}

	return `${date.getDate() + 1}.${addZero(date.getMonth() + 1)}.${date.getFullYear()}`;

}
	
function getTimeDiff(now, date) {
	return ((now - date) / 1000) / (60 * 60 * 24);
}

function addZero(num) {
	return num <= 9 ? `0${String(num)}` : num;
}