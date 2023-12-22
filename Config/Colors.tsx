interface ColorPalette {
    COLOR_BLACK_TRANSP_1: string;
    COLOR_WHITE: string;
    COLOR_BLACK: string;
    COLOR_GREY: string;
    COLOR_BLACK_TRANSP: string;
    COLOR_GREY_TRANSP: string;
}

interface AppColors {
    color: ColorPalette;
}

const AppColors: AppColors = {
    color: {
        COLOR_BLACK_TRANSP_1: "rgba(0, 0, 0,0.1)",
        COLOR_WHITE: "#FFFFFF",
        COLOR_BLACK: "#000000",
        COLOR_GREY: "grey",
        COLOR_BLACK_TRANSP: "rgba(0,0,0,0.8)",
        COLOR_GREY_TRANSP: "rgba(67, 85, 85, 0.7)",
    },
};

export default AppColors;

