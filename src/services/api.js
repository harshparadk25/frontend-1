import axios from "axios";

const API_BASE = "http://165.22.223.163:7777/api/ipsa";
const MEDIA_BASE = "http://165.22.223.163:7777";

const api = axios.create({
    baseURL: API_BASE,
    headers: { accept: "application/json" },
});

/**
 * Fetch page data by page name (e.g. "home", "about", etc.)
 */
export async function fetchPageData(pageName) {
    const { data } = await api.get(`/pages/${pageName}`);
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
