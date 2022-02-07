export class Auxiliary
{
    //Private properties - name:type
    private id: number = -1;
    private name: string = "";
    private userId: number = -1;
    private liftType: string = "";
    private description: string = "";

    //Constructor
    constructor(id:number, name:string, userId:number, liftType: string, description:string)
    {
        this.id = id;
        this.name = name;
        this.userId = userId; 
        this.liftType = liftType;
        this.description = description;
    }

    //Getter & setters 
    get Id():number
    {
        return this.id;
    }
    set Id(id:number)
    {
        this.id = id; 
    }

    get UserId():number
    {
        return this.userId;
    }
    set UserId(userId:number)
    {
        this.userId = userId; 
    }

    get LiftType():string
    {
        return this.liftType;
    }
    set LiftType(liftType:string)
    {
        this.liftType = liftType; 
    }

    get Description():string
    {
        return this.description;
    }
    set Description(description:string)
    {
        this.description = description; 
    }
    
    get Name():string
    {
        return this.name;
    }
    set Name(name:string)
    {
        this.name = name;
    }




}