// Given a list of directions to spin, "left" or "right", 
// return an integer of how many full 360° rotations were made. 
// Note that each word in the array counts as a 90° rotation in that direction.

function spinAround(turns) {
    let sum = 0;
    
    for (let turn of turns) {
        sum += turn === "right" ? 90 : turn === "left" ? -90 : 0;
    }
    return Math.abs(~~(sum / 360));
}