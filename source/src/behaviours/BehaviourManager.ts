import Behaviour from "./Behaviour";
import SidetreeBehaviour from "./SidetreeBehaviour";
import UniversalBehaviour from "./UniversalBehaviour";

export class BehaviourManager{
    private map : Map<number,Behaviour> = new Map<number,Behaviour>();

    constructor(){
        this.setBehaviourMap();
    }
    private setBehaviourMap(){ 
        this.map.set(1, new SidetreeBehaviour());
        this.map.set(0, new UniversalBehaviour());
    }

    public get(key : number) : Behaviour{
        return this.map.get(key) ?? this.map.get(0);
    }


    public has(key:number){
        return this.map.has(key);
    }
}
