import axios from "axios";

const API_BASE = "http://165.22.223.163:7777/api/ipsa";
const SERVER_BASE = "http://165.22.223.163:7777/api";
const MEDIA_BASE = "http://165.22.223.163:7777";

// In-memory cache to avoid re-fetching on repeat navigation
const pageCache = new Map();

const api = axios.create({
    baseURL: API_BASE,
    headers: { accept: "application/json" },
});

/**
 * Fetch page data by page name (e.g. "home", "about", etc.)
 */
export async function fetchPageData(pageName) {
    const cacheKey = `ipsa/${pageName}`;
    if (pageCache.has(cacheKey)) return pageCache.get(cacheKey);
    const { data } = await api.get(`/pages/${pageName}`);
    pageCache.set(cacheKey, data);
    return data;
}

/**
 * Fetch page data for a specific college by slug and page name.
 * e.g. fetchCollegePageData("ibmr", "home")
 */
export async function fetchCollegePageData(collegeSlug, pageName) {
    const cacheKey = `${collegeSlug}/${pageName}`;
    if (pageCache.has(cacheKey)) return pageCache.get(cacheKey);
    const { data } = await axios.get(`${SERVER_BASE}/${collegeSlug}/pages/${pageName}`, {
        headers: { accept: "application/json" },
    });
    pageCache.set(cacheKey, data);
    return data;
}

/**
 * Resolve an image path from the API to a full URL.
 * External URLs (http/https) are returned as-is.
 * Relative paths like "/uploads/..." are prefixed with the media server base.
 */
export function resolveImageUrl(path) {
    if (!path) return "";
    if (path.startsWith("http")) return path;
    return `${MEDIA_BASE}${path}`;
}

export default api;
