export function decodeURLParameter(urlParam: string): string {
    // Decode URL-encoded characters in the parameter
    const decodedParam = decodeURIComponent(urlParam);

    return decodedParam;
}