export default class LoadService 
{
    public async load_html(element: HTMLDivElement, url: string)
    {
        return fetch(url)
        .then((response) => response.text())
        .then((html) => {
            element.innerHTML = html;
        })
        .catch((error) => {
            console.warn(error);
        });
    }
}