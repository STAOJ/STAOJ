import { error } from '@sveltejs/kit';
import item from "/Users/deyaochen/cs/staoj/problems/contests/beta-3.json";
/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	const url = `https://raw.githubusercontent.com/CP-STA/contest-problems/main/upcoming-contest.json`;
	const response = await fetch(url);
	const contestSlug = await response.json();
	const contestUrl = `https://raw.githubusercontent.com/CP-STA/contest-problems/main/contests/${contestSlug}.json`;
	const response2 = await fetch(contestUrl);
	return item;
	return await response2.json();
}
