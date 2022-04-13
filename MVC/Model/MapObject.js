class MapObject{
    constructor(name){
        this.name= name
        this.children = []
        this.parent = null
    }

    addChild(mapObjectChild){
        this.children.push(mapObjectChild);
        mapObjectChild.parent = this;
    }

    getChild(name){
        for (child in this.children){
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