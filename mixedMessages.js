function motivationalQuoteGen(){
    
    let motivationalQuote = `If you ${randomGen1()} hard you ${randomGen2()} and then you will ${randomGen3()}!`;
    
    function randomGen1(){
        let num = Math.floor(Math.random() * 4);
        switch(num){
            case 0:
                return "work"
                break;
            case 1:
                return "play"
                break;
            case 2:
                return "train"
                break;
            case 3:
                return "study"
                break;
        }
    }

    function randomGen2(){
    let num = Math.floor(Math.random() * 4);
        switch(num){
            case 0:
                return "get better"
                break;
            case 1:
                return "improve"
                break;
            case 2:
                return "be awesome"
                break;
            case 3:
                return "push yourself"
                break;
        }
    }

    function randomGen3(){
        let num = Math.floor(Math.random() * 4);
        switch(num){
            case 0:
                return "rule the world"
                break;
            case 1:
                return "become a Master"
                break;
            case 2:
                return "be the boss"
                break;
            case 3:
                return "kick some asses"
                break;
        }
    }
    return motivationalQuote;
};

motivationalQuoteGen()