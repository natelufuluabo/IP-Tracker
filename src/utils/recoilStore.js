import { atom } from "recoil";

export const dataAtom = atom({
    key: 'dataAtom',
    default: {
        "ip": "",
        "location": {
            "country": "",
            "region": "",
            "city": "",
            "lat": Number(''),
            "lng": Number(''),
            "postalCode": "",
            "timezone": "",
            "geonameId": Number('')
        },
    "domains": [],
    "as": {},
    "isp": ""
    }
})