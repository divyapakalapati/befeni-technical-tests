
export const get_code = (fab_code) => { //eg. fab code - T500
    console.log("fab_code",fab_code);
    const fab_pre_codes = {
        'K' : 30000,
        'T' : 20000,
        'NN' : 10000,
    };
    let pre_code = fab_code.charAt(0); //takes the first character - T
    console.log("pre_code",pre_code);
    if (parseInt(pre_code)) {
        pre_code = 'NN'
        return fab_pre_codes[pre_code] + parseInt(fab_code);
    }
    if (pre_code in fab_pre_codes) {  //checks if T is in global obj fab_pre_codes
        return fab_pre_codes[pre_code] + parseInt(fab_code.slice(1));
    }
    
}

