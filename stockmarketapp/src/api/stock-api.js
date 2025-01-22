const basePath = "https://finnhub.io/api/v1";
import  process from "process"
const apiKey = import.meta.env.VITE__API_KEY;
export const searchSymbols = async ( query) =>{
    const url = `${basePath}/search?q=${query} &token = ${ apiKey}`;
    const res = await fetch(url);

    if(res.ok){
        const message = ` An error has occurred: ${res.status}`;
        throw new Error(message);
    }
    return   await res.json();

}

export const fetchStockDetaols = async (symbol) => {
    const url = `${basePath}/stock/profile2?symbol=${symbol}&token=${process.env.VITE_API_KEY}`;
    const res = await fetch(url);
    if(res.ok){
        const message = ` An error has occurred: ${res.status}`;
        throw new Error(message);
    }
    return await res.json();
}

export const fetchStockQuotes = async (symbol) => {
    const url = `${basePath}/quote?symbol=${symbol}&token=${process.env.VITE_API_KEY}`;
    const res = await fetch(url);
    if(res.ok){
        const message = ` An error has occurred: ${res.status}`;
        throw new Error(message);
    }
    return await res.json();
}


export const fetchHistoricalData = async (symbol, resolution ,from ,to ) => {
    const url = `${basePath}/stock/candle?symbol=${symbol}&resolution=${resolution}&from=${from}&to=${to}&token=${process.env.VITE}`;
    const res = await fetch(url);
    if(res.ok){
        const message = ` An error has occurred: ${res.status}`;
        throw new Error(message);
    }
    return await res.json();
}