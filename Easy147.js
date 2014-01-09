/*Easy147
You must write code that verifies the awarded points for a fictional sport are valid. This sport is a simplification of American Football scoring rules. This means that the score values must be any logical combination of the following four rewards:
    6 points for a "touch-down"
    3 points for a "field-goal"
    1 point for an "extra-point"; can only be rewarded after a touch-down. Mutually-exclusive with "two-point conversion"
    2 points for a "two-point conversion"; can only be rewarded after a touch-down. Mutually-exclusive with "extra-point"
Print "Valid Score" or "Invalid Score" based on the respective validity of the given score.*/

function check(score) {
    var invalid = [1, 2, 4, 5];
    return (invalid.indexOf(score) === -1) ? "Valid Score" : "Invalid Score";
}