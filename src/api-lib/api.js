export const SLIDES_URL = `https://zm6zxgq6hyhe3smi5krzsrk2fu0iidhh.lambda-url.us-east-1.on.aws/`
export const fetchOfferings = async () => {
    try {
        const response = await fetch(SLIDES_URL);
        if (!response.ok) {
            return Promise.reject(Error("Something went wrong"));
        }
        const data = await response.json()
        return Promise.resolve(data);
    } catch(error) {
        return Promise.reject(Error(error.message));
    }
};