const BACKEND_URI="http://localhost:4000/api/v1" // local
const accessTokenExpiration = 60 * 60 * 24 * 100; // 7 days
const refreshTokenExpiration = 60 * 60 * 24 * 200; // 30 days

export { 
    BACKEND_URI,
    accessTokenExpiration,
    refreshTokenExpiration
};