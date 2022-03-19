export default class Image {
    constructor(src,text){
        this.src = src;
        this.text = text;
    }

    render(){
        return `<img src="${this.src}" alt="${this.text}">`;
    }
}