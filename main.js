const Dukpt = require("dukpt");
const encryptionBDK = "0123456789ABCDEFFEDCBA9876543210";
const ksn = "FFFFF99995000000070E";
const cardDataToEncrypt ="9A70B19571815421A0D0DC09FB89E46EA27FA7FAD46C16C6";

const dukpt = new Dukpt(encryptionBDK, ksn);

const options = {
    inputEncoding: "hex",
    outputEncoding: "hex",
    encryptionMode: "3DES",
};

const encryptedData = dukpt.dukptEncrypt(cardDataToEncrypt, options);

console.log("Dado criptografado: " + encryptedData);
console.log(
    "-------------------------------------------------------------------------------------------------------"
);

const decryptOptions = {
    outputEncoding: "hex",
    decryptionMode: "3DES",
    trimOutput: true,
};

const dataToDecrypt = "6799998900000070017D4912201012345678FFFFFFFFFFFF";
const decryptedData = dukpt.dukptDecrypt(dataToDecrypt, decryptOptions);

console.log("Dados decriptografados: " + decryptedData);
