/**
 * @returns {Promise<string>} An url to a random Wikipedia article.
*/
export default async function wiki() {
	return await (await fetch('https://wikipedia.org/wiki/Special:Random')).url
}
