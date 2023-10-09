import { atom } from "recoil";

export const ipAddressAtom = atom({
    key: 'ipAddressAtom',
    default: ''
});

export const locationAtom = atom({
    key: 'locationAtom',
    default: ''
});

export const timezoneAtom = atom({
    key: 'timezoneAtom',
    default: ''
});

export const ispAtom = atom({
    key: 'ispAtom',
    default: ''
});

export const positionAtom = atom({
    key: 'positionAtom',
    default: {
        lat: '',
        long: ''
    }
});