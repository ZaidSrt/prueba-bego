import axios from 'axios';

const baseURL = 'https://129bc152-6319-4e38-b755-534a4ee46195.mock.pstmn.io/';

export const http = axios.create({ baseURL });
