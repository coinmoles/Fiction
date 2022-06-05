const calcScale = (width: number, height: number) => {
    if (width > height * 8/9) {
        const TILESIZE = Math.floor(height / 9)
        return {
            FULLWIDTH: width,
            FULLHEIGHT: height,
            GAMEHEIGHT: 9 * TILESIZE,
            GAMEWIDTH: 8 * TILESIZE,
            ORIGINX: Math.floor((width - TILESIZE * 8) / 2),
            ORIGINY: 0,
            TILESIZE
        }
    }
    else {
        const TILESIZE = Math.floor(width / 8)
        return {
            FULLWIDTH: width,
            FULLHEIGHT: height,
            GAMEHEIGHT: 9 * TILESIZE,
            GAMEWIDTH: 8 * TILESIZE,
            ORIGINX: 0,
            ORIGINY: Math.floor((height - TILESIZE * 9) /2),
            TILESIZE
        }
    }
}

export const { FULLWIDTH, FULLHEIGHT, GAMEWIDTH, GAMEHEIGHT, ORIGINX, ORIGINY, TILESIZE } = calcScale(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio);
export const ROWS = 7;
export const COLUMNS = 8;