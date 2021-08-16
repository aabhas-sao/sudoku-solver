 export const handleHorizontalMovement = (e: KeyboardEvent, r: number, c: number):number => {
    if(e.key === "ArrowRight" || e.key === "d" || e.key === " ") {
        return 1;
    }
    if(e.key === "ArrowLeft" || e.key === "a") {
        return -1;
    }
    return 0;
}

export const handleVerticalMovement = (e: KeyboardEvent, r: number, c: number):number => {
    if(e.key === "ArrowDown" || e.key === "s") {
        return 1;
    }
    if(e.key === "ArrowUp" || e.key === "w") {
        return -1;
    }
    return 0;
}