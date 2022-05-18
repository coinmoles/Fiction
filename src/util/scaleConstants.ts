const calcScale = (width: number, height: number) => {
    if (width > height * 8/9) {
        return {
            FULLWIDTH: width,
            FULLHEIGHT: height,
            GAMEHEIGHT: width * 9/8,
            GAMEWIDTH: height * 8/9,
            HEIGHT: height,
            ORIGINX: (width - height * 8/9) / 2,
            ORIGINY: 0,
            TILESIZE: height / 9
        }
    }
    else {
        return {
            FULLWIDTH: width,
            FULLHEIGHT: height,
            GAMEWIDTH: width,
            GAMEHEIGHT: width * 9/8,
            ORIGINX: 0,
            ORIGINY: (height - width * 9/8) /2,
            TILESIZE: width / 8
        }
    }
}

export const { FULLWIDTH, FULLHEIGHT, GAMEWIDTH, GAMEHEIGHT, ORIGINX, ORIGINY, TILESIZE } = calcScale(window.innerWidth, window.innerHeight);
export const ROWS = 7;
export const COLUMNS = 8;