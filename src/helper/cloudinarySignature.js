import CryptoJS from "crypto-js"

export const generateSHA1 = (data) => {
    const hash = CryptoJS.SHA1(data).toString()
    return hash
}

export const generateSignature = (publicId, apiSecret) => {
    const timestamp = new Date().getTime()
    return `public_id=${publicId}&timestamp=${timestamp}${apiSecret}`
}
