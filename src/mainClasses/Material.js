 class Material{
    constructor(name, url, type = MaterialType.Document, views = 0, ownerName =  "Unknown"){
        this.name = name
        this.url = url
        this.type = type
        this.views = views
        this.ownerName = ownerName



    }
    getUrl(){
        return this.materialUrl
    }
    getName(){
        return this.materialName
    }

    toString(){
        return "Material: (name: " + this.name + ", url: " + this.url + ")"
    }
}

const MaterialType = {
    Document : 1,
    Presentation: 2,
    BookPage: 3,
}

export {Material, MaterialType}