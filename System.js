class System{

    constructor(){}

    authenticate(actualCode,enteredCode){
        textSize(50);
        fill("black");
        text(code,300,300)
        //code to return true if correct answer entered.
        if(actualCode === enteredCode.toUpperCase())
        // if the answer entre is correct then score will be added by one or if in correct then score will not increase.
        {
            return true
        }
        else
        {
            return false
        }

        
    }

}