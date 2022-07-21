import advertisersMock from "../mock/all.js";

    const ServiceAsync = () => {
        const getAdvertiser = async () => {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve(advertisersMock);
                }, 1500);
            });
        };
        return {getAdvertiser};
    };
    
    const serviceAsync = ServiceAsync();
    
    export default serviceAsync ;