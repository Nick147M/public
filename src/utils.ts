export const extractId = (url: string) => {
    var regExpResult = /\/(\d+)\/$/g.exec(url);
    return regExpResult ? parseInt(regExpResult[1]) : null;
}