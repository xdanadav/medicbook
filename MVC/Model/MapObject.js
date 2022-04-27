class MapObject{
    constructor(name){
        this.name = name
        this.displayName = name
        this.children = []
        this.parent = null
    }

    static displayNameInstance(name, displayName){
        let mapObject = new MapObject(name);
        mapObject.setDisplayName(displayName);
        return mapObject

    }

    setDisplayName(displayName){
        this.displayName = displayName

    }

    addChild(mapObjectChild){
        this.children.push(mapObjectChild);
        mapObjectChild.parent = this;
    }

    getChild(name){
        console.log("outloop print", this.children)
        for (var index in this.children){
            var child = this.children[index]
            console.log("\n\n\n\nIn loop print", child.name)
            if(child.name == name){
                return child;
            }
        }
    }

    addChildren(children){
        console.log(children)
        for (let i = 0; i < children.length; i++){
            let child = children[i];
            this.children.push(child)
            child.parent = this;
        }
    }
}

export default MapObject;