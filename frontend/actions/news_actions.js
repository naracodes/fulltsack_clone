import * as NewsAPIUtil from "../util/news_api_util";

export const RECEIVE_ALL_NEWS = "RECEIVE_ALL_NEWS";
export const RECEIVE_ASSET_NEWS = "RECEIVE_ASSET_NEWS";

export const receiveAllNews = allNews => {
    return {
        type: RECEIVE_ALL_NEWS,
        allNews
    }
}

export const receiveAssetNews = assetNews => {
    return {
        type: RECEIVE_ASSET_NEWS,
        assetNews
    }
}

export const fetchAllNews = () => dispatch => {
    return NewsAPIUtil.fetchAllNews().then(allNews => {
        return dispatch(receiveAllNews(allNews));
    })
}

// let cachedAssetNews = [
//   {
//     datetime: 1601480404000,
//     headline: "Sources: Google is planning to produce as little as ~800,000 Pixel 5 handsets, taking total production of Pixel 4a, 4a 5G, and 5 to 3M units (Nikkei Asian Review)",
//     source: "Techmeme",
//     url: "https://cloud.iexapis.com/v1/news/article/ec26e337-e85e-422f-a4bf-32e0fc5cc6a2",
//     summary: "Nikkei Asian Review : Sources: Google is planning to produce as little as ~800,000 Pixel 5 handsets, taking total production of Pixel 4a, 4a 5G, and 5 to 3M units — Internet giant plans just 1m flagship Pixel 5 phones for 2020 — TAIPEI — Google plans to produce less than 1 million Pixel 5 smartphones this year …",
//     related: "GOOGL,GOOG",
//     image: "https://cloud.iexapis.com/v1/news/image/ec26e337-e85e-422f-a4bf-32e0fc5cc6a2",
//     lang: "en",
//     hasPaywall: false,
//   },
//   {
//     datetime: 1601479336000,
//     headline: "Americans got richer than ever during the pandemic, but Canadians haven’t followed suit",
//     source: "Financial Post",
//     url: "https://cloud.iexapis.com/v1/news/article/9d2974e5-731b-4ccf-a901-9a730443145f",
//     summary: "COVID-19 has infected and killed a higher proportion of the population in the United States than in Canada, but that hasn’t stopped household wealth from rebounding to a record level south of the border, outpacing wealth gains in Canada in the process. According to U.S. data, a booming stock market and a series of fiscal and monetary stimulus efforts pushed the wealth of American households to the highest level ever in the second quarter of this year, in spite of a huge drop in the previous quarter when the novel coronavirus sent global asset values plunging. For the second quarter of 2020, U.S. household wealth grew at a 6.8 per cent rate. Household wealth in Canada, meanwhile, rose by a less sparkling 4.9 per cent, according to data from National Bank Senior Economist Marc Pinsonneault in Montreal. Canadians now have the option to build their credit scores via rent payments Canadians’ debt remains at near record levels. Here are five ways to avoid a visit to the payday loan centre How much debt is too much?",
//     related: "GOOGL,GOOG",
//     image: "https://cloud.iexapis.com/v1/news/image/9d2974e5-731b-4ccf-a901-9a730443145f",
//     lang: "en",
//     hasPaywall: false,
//   },
//   {
//     datetime: 1601478357000,
//     headline: "Launch Night in Google: How to watch, and what to expect",
//     source: "VentureBeat",
//     url: "https://cloud.iexapis.com/v1/news/article/a26293a9-8300-4f4b-b5e1-d6964d59f8b9",
//     summary: "Google is expected to announce a slew of new devices at its 2020 Launch Night In event, including smartphones and a new Chromecast dongle.",
//     related: "GOOGL,GOOG",
//     image: "https://cloud.iexapis.com/v1/news/image/a26293a9-8300-4f4b-b5e1-d6964d59f8b9",
//     lang: "en",
//     hasPaywall: false,
//   },
// ];
let cachedAssetNews = {};
export const fetchAssetNews = ticker => dispatch => {
    debugger
    if (cachedAssetNews[ticker]) {
        debugger
        return dispatch(receiveAssetNews(cachedAssetNews[ticker]))
    } else {
        return NewsAPIUtil.fetchAssetNews(ticker).then(assetNews => {
            cachedAssetNews[ticker] = assetNews;
            debugger
            return dispatch(receiveAssetNews(assetNews));
        })
    }
}