import React from "react";


function formatDate(dateToFormat){
    const formattedDate = new Date(dateToFormat).toDateString();

    return formattedDate;
};

export default formatDate();