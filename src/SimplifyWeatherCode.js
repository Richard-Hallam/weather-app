

function simplifyWeatherCode(weatherCode){
    let simplifiedCode = 0;
    if (weatherCode < 300 && weatherCode >= 200){
        simplifiedCode = 200;
    } else if (weatherCode < 400 && weatherCode >= 300){
        simplifiedCode = 300;
    }else if (weatherCode < 600 && weatherCode >= 500){
        simplifiedCode = 500;
    }else if (weatherCode < 700 && weatherCode >= 600){
        simplifiedCode = 600;
    }else if (weatherCode < 800 && weatherCode >= 700){
        simplifiedCode = 700;
    }else if (weatherCode < 900 && weatherCode >= 800){
        simplifiedCode = 800;
    }
    return simplifiedCode;
};

export default simplifyWeatherCode;