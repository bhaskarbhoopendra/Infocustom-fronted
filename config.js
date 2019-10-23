// import getConfig from 'next/config';
// const {publicRuntimeConfig} = getConfig();

// export const API = publicRuntimeConfig.PRODUCTION ? 'https://infocustom.in': 'http://localhost:8000/api';
// export const APP_NAME = publicRuntimeConfig.APP_NAME;

import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

export const API = publicRuntimeConfig.PRODUCTION
    ? publicRuntimeConfig.API_PRODUCTION
    : publicRuntimeConfig.API_DEVELOPMENT;
export const APP_NAME = publicRuntimeConfig.APP_NAME;