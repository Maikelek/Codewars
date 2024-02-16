// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

function isValidIP(str) {
    const sockets = str.split('.');
    let zeros = 0;
    let socketCounter = -1;
    let tmp = false;
    if (sockets.length !== 4 || !str || str === NaN) return false;
    
    for (socket of sockets) {
        if (socket === "") return false;
        let socketNum = parseInt(socket);
        if (socketNum > 255 || socketNum < 0 || (parseInt(socket[0]) === 0 && socketNum !== 0)) {
            return false;
        }
        
        for (num of socket) {
            socketCounter += 1;

            if (num.charCodeAt(0) > 57 || num.charCodeAt(0) < 48) {
                return false;
            }
            
            if (socketCounter == 0 && socket[socketCounter] == "0") {
                tmp = true;
            }
            
            if (tmp == true && num == "0" ) {
                zeros += 1;
                
                if (zeros > 1 && socketCounter !== 0) {
                    return false;
                }
            }
            
        }
        socketCounter = -1;
        tmp = false;
    }
    return true;
}
