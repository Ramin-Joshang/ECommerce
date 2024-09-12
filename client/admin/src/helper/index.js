import Cookies from 'js-cookie';
import CryptoJS from 'crypto-js';
import axios from 'axios';

const setCookie = (name, token, expiresIn) => {
    Cookies.set(name, token, { expires: expiresIn, path: '/' });
}

const getCookie = (name) => {
    return Cookies.get(name);
}

const deleteCookie = (name) => {
    Cookies.remove(name, { path: '/' });
}

const setTokenToAxios = () => {
    axios.defaults.headers.common["authorization"] = `Bearer ${getCookie("jwt")}`;
}
// Function to set a value in localStorage
const setValueInLocalStorage = (key, value) => {
    localStorage.setItem(key, value);
}

// Function to get a value from localStorage
const getValueFromLocalStorage = (key) => {
    return localStorage.getItem(key);
}

// Function to delete a value from localStorage
const deleteValueFromLocalStorage = (key) => {
    localStorage.removeItem(key);
}

// Define a secret key for encryption and decryption
const SECRET_KEY = 'your_secret_key'; // Change it to a secure value

// Function to encrypt data
const encryptData = (data) => {
    return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
};

// Function to decrypt data
const decryptData = (ciphertext) => {
    const bytes = CryptoJS.AES.decrypt(ciphertext, SECRET_KEY);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};

// Function to get user data
const getUserData = () => {
    const encryptedData = localStorage.getItem('userData');
    if (encryptedData) {
        return decryptData(encryptedData);
    }
    return null; // Or you can return an empty object
};

// Function to post user data
const postUserData = (userData) => {
    const encryptedData = encryptData(userData);
    localStorage.setItem('userData', encryptedData);
};

// Function to delete user data
const deleteUserData = () => {
    localStorage.removeItem('userData');
};

// Function to compare user data
const compareUserData = (newUserData) => {
    const existingUserData = getUserData();
    if (!existingUserData) return false;

    // Comparison logic (for example, comparing usernames)
    return JSON.stringify(existingUserData) === JSON.stringify(newUserData);
};

export {
    setCookie,
    getCookie,
    deleteCookie,
    setTokenToAxios,
    getValueFromLocalStorage,
    setValueInLocalStorage,
    deleteValueFromLocalStorage,
    encryptData,
    decryptData,
    getUserData,
    deleteUserData,
    compareUserData,
    postUserData
};
