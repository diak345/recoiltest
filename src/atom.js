import { atom, selector , selectorFamily } from "recoil";
export const TextState = atom({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: 'Defaulttext', // default value (aka initial value)
});


export const Userinfo = atom({
    key: 'yumenoinfo', // unique ID (with respect to other atoms/selectors)
    default: {
        name:"yumeno",
        id:"001",
        password:"abcd",
        country:"jp",
    }, 
  });



  export const AtomselectorFamilydemo = selectorFamily({
    key: 'getyumenoinfo' , 
    get: (key) =>({get}) =>{
        let yumenoinfo = get(Userinfo);
        return yumenoinfo[key];
    }
})


export const Getusercountry = selector({
    key: 'getyumenoinfo' , 
    get: ({get}) =>{
        let yumenoinfo = get(Userinfo);
        return yumenoinfo["name"];
    }
})