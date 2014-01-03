/*Easy146
Print the permitter of the given N-sided polygon that has a circumradius of R. Print up to three digits precision.*/

function perimeter(sides, circumradius) {
	return Math.round((circumradius * 2 * Math.sin(Math.PI / sides) * sides) * 1000)/1000;
}