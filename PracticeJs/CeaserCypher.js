function caesarCipherEncrypt(text, shift){
    return text.split('').map(function(char){
        if(char.match(/[a-zA-Z]/)){
            const isUpperCase=char===char.toUpperCase();
            const base=isUpperCase? 65 : 97;

            const newChar=String.fromCharCode(
                ((char.charCodeAt(0)-base+shift)%26) +base

            );
            return newChar;
        }
        return char;
    }).join('');

}
function caesarCipherDecrypt(text, shift){
    return caesarCipherEncrypt(text,26-(shift%26));
}

const plainText = "Hello, World!";
const shift = 3;

const encryptedText = caesarCipherEncrypt(plainText, shift);
console.log("Encrypted:", encryptedText);

const decryptedText = caesarCipherDecrypt(encryptedText, shift);
console.log("Decrypted:", decryptedText);
