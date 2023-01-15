class RouterHistory{
    
    constructor(){
        this.stack = []
    }
    
    push(screen, path){
        this.stack.push({screen: screen, path: path})
        console.log("---------\nCurrent Router:")
        for(var index in this.stack){
            console.log("     " + this.stack[index].screen, this.stack[index].path, this.stack[index].navOption)
        }
        console.log("\n---------")
    }
    remove(screen, path){
        if(this.stack.length > 0){
            this.stack.pop()
        }
        console.log("---------\nCurrent Router:")
        for(var index in this.stack){
            console.log("     " + this.stack[index].screen, this.stack[index].path, this.stack[index].navOption)
        }
        console.log("\n---------")
    }
    isEmpty(){
        
        return this.stack.length == 0
    }
}
export const NavigationOption = {
    Next: Symbol(1),
    Back: Symbol(-1),
}

let routerHistory = new RouterHistory()

export default routerHistory