function choice (items){
    return items[Math.floor(Math.random()*items.length)];
}

function remove(items,item){
    for (let i=0;i<items.length;i++){
        if (items[i]==item){
            let removed = items[i];
            items.splice(i,1);
            return removed;
        }
    }
    return undefined;

}

export {choice, remove};