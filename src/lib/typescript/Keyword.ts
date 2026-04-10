export class Keyword
{
    text;
    bgColor;
    onclick;

    constructor(text="", bgColor="", onclick=(callbackKeyword:Keyword) => {})
    {
        this.text = text;
        this.bgColor = bgColor;
        this.onclick = onclick;
    }

    copyAsLabel()
    {
        return new Keyword(this.text, this.bgColor);
    }
}