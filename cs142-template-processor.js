class Cs142TemplateProcessor{
    constructor(template) {
        this.template = template;
    }
    

    fillIn(dictionary) {
        var a = this.template;
        //console.log("template",template);
        for(var b in dictionary){
            console.log("b:",b);
            var s=b.length
            console.log("urt:",s);
            var b1 = b.substring(0, s-2);
            console.log("tasllaa:",b);
            console.log(typeof b);
            //var c=new RegExp('{{' +b+'}}');
            var c=a.match('{{' +b1+'}}')
            a=a.replace(c,dictionary[b]);
        }
        var a1=a.replace(new RegExp('{\\{\\w+\\}\\}'), "");
        //a=a.replace(a1,"")
        return a1;
    }
}
