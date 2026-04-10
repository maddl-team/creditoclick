/** Split "Title. Rest of body" for feature lists (title = text before first period). */
export function splitByFirstPeriod(text: string): { title: string; description: string } {
    const dot = text.indexOf(".");
    if (dot === -1) {
        return { title: text.trim(), description: "" };
    }
    return {
        title: text.slice(0, dot).trim(),
        description: text.slice(dot + 1).trim(),
    };
}

/** Split "Title: description" (first colon). */
export function splitByFirstColon(text: string): { title: string; description: string } {
    const [rawTitle, ...rest] = text.split(":");
    return {
        title: rawTitle.trim(),
        description: rest.join(":").trim(),
    };
}
